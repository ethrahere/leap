/**
 * Deploy $LEAP token via Clanker SDK
 * 
 * Usage: npx ts-node scripts/deploy-token.ts
 */

import { Clanker } from 'clanker-sdk';
import { createPublicClient, createWalletClient, http, type PublicClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { base } from 'viem/chains';
import * as dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
if (!PRIVATE_KEY) {
  throw new Error('PRIVATE_KEY not set in .env');
}

// Bankr interface fee recipient (20%)
const BANKR_INTERFACE_ADDRESS = '0xF60633D02690e2A15A54AB919925F3d038Df163e';

async function main() {
  const account = privateKeyToAccount(PRIVATE_KEY);
  console.log('Deploying from:', account.address);

  const publicClient = createPublicClient({
    chain: base,
    transport: http(),
  }) as PublicClient;

  const wallet = createWalletClient({
    account,
    chain: base,
    transport: http(),
  });

  const clanker = new Clanker({ wallet, publicClient });

  console.log('Deploying $LEAP token...');

  const { txHash, waitForTransaction, error } = await clanker.deploy({
    chainId: 8453, // Base
    name: 'LEAP',
    symbol: 'LEAP',
    image: 'ipfs://bafkreigl5q5h7n7ypzzwf2dxqpmqyisipnzs3r7vqmsmgzspnmvbf6a3tm', // Placeholder - will update
    tokenAdmin: account.address,
    
    metadata: {
      description: 'LEAP — The Creative Exit Network. A platform where creatives stake their escape from the 9-5. Your voice is earned by showing up, not paying up.',
      socialMediaUrls: [
        { platform: 'twitter', url: 'https://twitter.com/Ethr_ai' },
      ],
    },
    
    context: {
      interface: 'Bankr',
      platform: 'other',
      messageId: '',
      id: '',
    },
    
    // 10% vault for grants pool (30 day lockup, 30 day vest)
    vault: {
      percentage: 10,
      lockupDuration: 2592000, // 30 days
      vestingDuration: 2592000, // 30 days
      recipient: account.address,
    },
    
    // Rewards: 80% creator (treasury), 20% Bankr interface
    rewards: {
      recipients: [
        {
          recipient: account.address, // Treasury
          admin: account.address,
          bps: 8000, // 80%
          token: 'Paired',
        },
        {
          recipient: BANKR_INTERFACE_ADDRESS,
          admin: BANKR_INTERFACE_ADDRESS,
          bps: 2000, // 20%
          token: 'Paired',
        },
      ],
    },
    
    pool: {
      pairedToken: '0x4200000000000000000000000000000000000006', // WETH
      positions: 'Standard',
    },
    
    fees: 'StaticBasic',
    vanity: true,
    
    // Anti-sniper protection
    sniperFees: {
      startingFee: 666_777,
      endingFee: 41_673,
      secondsToDecay: 15,
    },
  });

  if (error) {
    console.error('Deployment error:', error);
    throw error;
  }

  console.log('Transaction hash:', txHash);
  console.log('Waiting for confirmation...');

  const result = await waitForTransaction();
  console.log('\n✅ $LEAP Token deployed!');
  console.log('Token address:', result.address);
  console.log('Transaction:', `https://basescan.org/tx/${txHash}`);
  console.log('Token:', `https://basescan.org/token/${result.address}`);
  
  return result.address;
}

main()
  .then((address) => {
    console.log('\nDone! Token at:', address);
    process.exit(0);
  })
  .catch((err) => {
    console.error('Failed:', err);
    process.exit(1);
  });
