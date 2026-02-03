'use client';

import Link from 'next/link';

// Mock data for the feed
const mockPosts = [
  {
    id: '1',
    author: 'Sarah Chen',
    avatar: '👩‍💻',
    currentJob: 'Data Analyst at Amazon',
    dream: 'Full-time Artist',
    cred: 45,
    content: "Just finished my first commission! Someone paid me $200 for a portrait. It's not much but it's proof that this could work. 3 more months until I have enough runway to quit.",
    timestamp: '2h ago',
    tips: 12,
    milestone: null,
  },
  {
    id: '2',
    author: 'Marcus Webb',
    avatar: '🎸',
    currentJob: 'Accountant',
    dream: 'Music Producer',
    cred: 120,
    content: "🚀 I DID IT. Today was my last day at the firm. After 8 years of crunching numbers, I'm finally going full-time on music. Terrified but alive.",
    timestamp: '5h ago',
    tips: 89,
    milestone: 'Made the Leap!',
  },
  {
    id: '3',
    author: 'Alex Rivera',
    avatar: '📱',
    currentJob: 'Marketing Manager',
    dream: 'Indie App Developer',
    cred: 67,
    content: "Week 12 update: My app just hit 500 downloads! Still at my day job but spending every evening and weekend coding. The dream is getting closer.",
    timestamp: '8h ago',
    tips: 34,
    milestone: null,
  },
  {
    id: '4',
    author: 'Jordan Kim',
    avatar: '✍️',
    currentJob: 'Software Engineer',
    dream: 'Author',
    cred: 23,
    content: "Applied for my first LEAP grant today. Asking for 3 months of runway to finish my novel. The community vote starts tomorrow. Nervous but hopeful.",
    timestamp: '1d ago',
    tips: 45,
    milestone: 'Grant Application',
  },
];

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-emerald-400">LEAP</span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/feed" className="text-white font-medium">Feed</Link>
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

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Post Box */}
          <div className="mb-8 p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <textarea 
              placeholder="Share an update on your journey..."
              className="w-full bg-transparent border-none focus:outline-none resize-none text-white placeholder-gray-500"
              rows={3}
            />
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                +5 CRED for posting
              </div>
              <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition">
                Post
              </button>
            </div>
          </div>

          {/* Feed */}
          <div className="space-y-6">
            {mockPosts.map((post) => (
              <div key={post.id} className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                      {post.avatar}
                    </div>
                    <div>
                      <div className="font-bold flex items-center gap-2">
                        {post.author}
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded">
                          {post.cred} CRED
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="text-red-400">{post.currentJob}</span>
                        <span className="mx-2">→</span>
                        <span className="text-emerald-400">{post.dream}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{post.timestamp}</span>
                </div>

                {/* Milestone Badge */}
                {post.milestone && (
                  <div className="mb-3 inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full">
                    🎯 {post.milestone}
                  </div>
                )}

                {/* Content */}
                <p className="text-gray-200 mb-4">{post.content}</p>

                {/* Actions */}
                <div className="flex items-center gap-6 text-gray-400">
                  <button className="flex items-center gap-2 hover:text-emerald-400 transition">
                    <span>💸</span>
                    <span>Tip</span>
                    <span className="text-emerald-400">{post.tips}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-pink-400 transition">
                    <span>❤️</span>
                    <span>Support</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-400 transition">
                    <span>💬</span>
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
