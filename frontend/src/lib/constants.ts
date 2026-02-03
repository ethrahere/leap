// LEAP Token Constants
export const LEAP_TOKEN_ADDRESS = '0xd77BCD4f8Cc5691A27Bdc35B16ebCfd9BeFd9B07';
export const CHAIN_ID = 8453; // Base
export const CHAIN_NAME = 'Base';

// URLs
export const BASESCAN_URL = `https://basescan.org/token/${LEAP_TOKEN_ADDRESS}`;
export const CLANKER_URL = `https://www.clanker.world/clanker/${LEAP_TOKEN_ADDRESS}`;
export const UNISWAP_URL = `https://app.uniswap.org/swap?outputCurrency=${LEAP_TOKEN_ADDRESS}&chain=base`;
export const DEXSCREENER_URL = `https://dexscreener.com/base/${LEAP_TOKEN_ADDRESS}`;

// CRED Actions
export const CRED_ACTIONS = {
  CREATE_PROFILE: 10,
  POST_UPDATE: 5,
  GET_TIPPED: 2,
  TIP_SOMEONE: 1,
  HIT_MILESTONE: 20,
  MAKE_THE_LEAP: 100,
  HELP_ANOTHER: 10,
  COMPLETE_GRANT: 50,
};
