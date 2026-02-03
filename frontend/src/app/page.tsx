'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-emerald-400">LEAP</span>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/feed" className="text-gray-400 hover:text-white transition">Feed</Link>
            <Link href="/grants" className="text-gray-400 hover:text-white transition">Grants</Link>
            <Link href="/leaderboard" className="text-gray-400 hover:text-white transition">Leaderboard</Link>
            <a 
              href="https://app.uniswap.org/swap?outputCurrency=0xd77BCD4f8Cc5691A27Bdc35B16ebCfd9BeFd9B07&chain=base" 
              target="_blank"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition"
            >
              Buy $LEAP
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="text-emerald-400 text-sm font-medium">🦀 Built at ClawdKitchen Hackathon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your voice is <span className="text-emerald-400">earned</span>,<br />
            not paid.
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            LEAP is the creative exit network. A platform where artists, makers, and dreamers 
            support each other in escaping the 9-5 grind.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/join"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-lg rounded-xl transition"
            >
              Start Your Leap
            </Link>
            <a 
              href="#how-it-works"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg rounded-xl transition"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-400">0</div>
            <div className="text-gray-400 mt-1">Leapers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400">$0</div>
            <div className="text-gray-400 mt-1">Treasury</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400">0</div>
            <div className="text-gray-400 mt-1">Grants Given</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400">0</div>
            <div className="text-gray-400 mt-1">Dreams Funded</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How <span className="text-emerald-400">LEAP</span> Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">1. Set Your Goal</h3>
              <p className="text-gray-400">
                Create your profile. Share what job you're escaping and what creative dream you're chasing.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">2. Earn CRED</h3>
              <p className="text-gray-400">
                Post updates, help others, hit milestones. CRED is earned — never bought. It's your reputation.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">3. Apply for Grants</h3>
              <p className="text-gray-400">
                When you're ready to make the leap, apply for a grant. The community votes with their CRED.
              </p>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">4. Make the Leap</h3>
              <p className="text-gray-400">
                Quit your job. Pursue your dream. Share your journey and inspire the next wave of leapers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Two Layers. <span className="text-emerald-400">Fair by Design.</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We separated money from governance. Rich or poor, your voice is earned by participating.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-emerald-900/30 to-gray-900 rounded-2xl border border-emerald-500/20">
              <div className="text-sm font-bold text-emerald-400 mb-2">ECONOMIC LAYER</div>
              <h3 className="text-2xl font-bold mb-4">$LEAP Token</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Trade on Uniswap</li>
                <li>• Tip other creators</li>
                <li>• Fund the treasury</li>
                <li>• Trading fees → grants</li>
              </ul>
              <div className="mt-6">
                <a 
                  href="#" 
                  className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition"
                >
                  Buy $LEAP
                </a>
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-purple-900/30 to-gray-900 rounded-2xl border border-purple-500/20">
              <div className="text-sm font-bold text-purple-400 mb-2">REPUTATION LAYER</div>
              <h3 className="text-2xl font-bold mb-4">CRED Points</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Earned, never bought</li>
                <li>• Soulbound (non-transferable)</li>
                <li>• Voting power on grants</li>
                <li>• Unlock access tiers</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/join"
                  className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition"
                >
                  Start Earning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earn CRED */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Earn <span className="text-purple-400">CRED</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { action: 'Create profile', cred: '+10', icon: '👤' },
              { action: 'Post update', cred: '+5', icon: '📝' },
              { action: 'Get tipped', cred: '+2', icon: '🎁' },
              { action: 'Tip someone', cred: '+1', icon: '💸' },
              { action: 'Hit milestone', cred: '+20', icon: '🎯' },
              { action: 'Make the leap', cred: '+100', icon: '🚀' },
            ].map((item) => (
              <div key={item.action} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-purple-400">{item.cred}</div>
                <div className="text-sm text-gray-400">{item.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-900/30 via-gray-900 to-purple-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to escape the grind?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the collective. Share your dream. Take the leap.
          </p>
          <Link 
            href="/join"
            className="inline-block px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xl rounded-xl transition"
          >
            Start Your Leap
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">
            <span className="text-emerald-400">LEAP</span>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="https://twitter.com/Ethr_ai" target="_blank" className="hover:text-white transition">Twitter</a>
            <a href="https://github.com/ethrahere/leap" target="_blank" className="hover:text-white transition">GitHub</a>
            <a href="https://basescan.org" target="_blank" className="hover:text-white transition">Contract</a>
          </div>
          <div className="text-gray-500 text-sm">
            Built with 🦀 at ClawdKitchen
          </div>
        </div>
      </footer>
    </div>
  );
}
