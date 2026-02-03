'use client';

import Link from 'next/link';

const mockLeaderboard = [
  {
    rank: 1,
    name: 'Marcus Webb',
    avatar: '🎸',
    currentJob: 'Former Accountant',
    dream: 'Music Producer',
    cred: 120,
    status: 'leaped',
    leapedDate: 'Jan 2024',
  },
  {
    rank: 2,
    name: 'Priya Sharma',
    avatar: '🎨',
    currentJob: 'UX Designer',
    dream: 'Fine Artist',
    cred: 89,
    status: 'active',
    timeline: '2 months',
  },
  {
    rank: 3,
    name: 'Alex Rivera',
    avatar: '📱',
    currentJob: 'Marketing Manager',
    dream: 'Indie App Developer',
    cred: 67,
    status: 'active',
    timeline: '4 months',
  },
  {
    rank: 4,
    name: 'Sarah Chen',
    avatar: '👩‍💻',
    currentJob: 'Data Analyst',
    dream: 'Full-time Artist',
    cred: 45,
    status: 'active',
    timeline: '3 months',
  },
  {
    rank: 5,
    name: 'Jordan Kim',
    avatar: '✍️',
    currentJob: 'Software Engineer',
    dream: 'Author',
    cred: 23,
    status: 'active',
    timeline: '6 months',
  },
  {
    rank: 6,
    name: 'Taylor Morgan',
    avatar: '🎬',
    currentJob: 'Project Manager',
    dream: 'Filmmaker',
    cred: 18,
    status: 'active',
    timeline: '1 year',
  },
  {
    rank: 7,
    name: 'Casey Parker',
    avatar: '🎵',
    currentJob: 'Sales Rep',
    dream: 'Podcast Host',
    cred: 15,
    status: 'active',
    timeline: '6 months',
  },
  {
    rank: 8,
    name: 'Jamie Lee',
    avatar: '📸',
    currentJob: 'Bank Teller',
    dream: 'Travel Photographer',
    cred: 12,
    status: 'new',
    timeline: '1 year',
  },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-emerald-400">LEAP</span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/feed" className="text-gray-400 hover:text-white transition">Feed</Link>
            <Link href="/grants" className="text-gray-400 hover:text-white transition">Grants</Link>
            <Link href="/leaderboard" className="text-white font-medium">Leaderboard</Link>
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

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-2">CRED Leaderboard</h1>
            <p className="text-gray-400">The most active members of the LEAP community</p>
          </div>

          {/* Stats */}
          <div className="mb-10 grid grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 text-center">
              <div className="text-3xl font-bold text-emerald-400">8</div>
              <div className="text-gray-400 text-sm">Active Leapers</div>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 text-center">
              <div className="text-3xl font-bold text-purple-400">389</div>
              <div className="text-gray-400 text-sm">Total CRED Earned</div>
            </div>
            <div className="p-6 bg-emerald-900/30 rounded-2xl border border-emerald-500/30 text-center">
              <div className="text-3xl font-bold text-emerald-400">1</div>
              <div className="text-gray-400 text-sm">Successful Leaps</div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-900/50 text-sm text-gray-400 font-medium">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Leaper</div>
              <div className="col-span-3">Journey</div>
              <div className="col-span-2 text-center">CRED</div>
              <div className="col-span-2 text-right">Status</div>
            </div>

            {mockLeaderboard.map((user) => (
              <div 
                key={user.rank}
                className={`grid grid-cols-12 gap-4 p-4 items-center border-t border-gray-700/50 hover:bg-gray-700/30 transition ${
                  user.status === 'leaped' ? 'bg-emerald-900/10' : ''
                }`}
              >
                <div className="col-span-1">
                  {user.rank <= 3 ? (
                    <span className="text-2xl">
                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                    </span>
                  ) : (
                    <span className="text-gray-400 font-medium">{user.rank}</span>
                  )}
                </div>
                
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                    {user.avatar}
                  </div>
                  <span className="font-medium">{user.name}</span>
                </div>
                
                <div className="col-span-3 text-sm">
                  <div className="text-red-400 line-through opacity-70">{user.currentJob}</div>
                  <div className="text-emerald-400">{user.dream}</div>
                </div>
                
                <div className="col-span-2 text-center">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 font-bold rounded-lg">
                    {user.cred}
                  </span>
                </div>
                
                <div className="col-span-2 text-right">
                  {user.status === 'leaped' ? (
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-lg">
                      🚀 Leaped {user.leapedDate}
                    </span>
                  ) : user.status === 'new' ? (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-lg">
                      New
                    </span>
                  ) : (
                    <span className="text-sm text-gray-400">
                      Leaping in {user.timeline}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* How CRED is earned */}
          <div className="mt-10 p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="font-bold mb-4">How is CRED earned?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {[
                { action: 'Create profile', cred: '+10' },
                { action: 'Post update', cred: '+5' },
                { action: 'Get tipped', cred: '+2' },
                { action: 'Tip someone', cred: '+1' },
                { action: 'Hit milestone', cred: '+20' },
                { action: 'Make the leap', cred: '+100' },
              ].map((item) => (
                <div key={item.action} className="flex justify-between">
                  <span className="text-gray-400">{item.action}</span>
                  <span className="text-purple-400 font-medium">{item.cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
