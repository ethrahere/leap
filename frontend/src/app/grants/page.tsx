'use client';

import Link from 'next/link';

const mockGrants = [
  {
    id: '1',
    applicant: 'Jordan Kim',
    avatar: '✍️',
    currentJob: 'Software Engineer',
    dream: 'Author',
    cred: 23,
    title: '3 Months to Finish My Novel',
    description: "I've been writing my debut novel for 2 years while working full-time. I'm 70% done and need 3 months of runway to complete it and start querying agents. The grant would cover my basic expenses so I can focus entirely on writing.",
    amount: '$4,500',
    votes: 156,
    totalVotes: 400,
    daysLeft: 5,
    status: 'voting',
  },
  {
    id: '2',
    applicant: 'Priya Sharma',
    avatar: '🎨',
    currentJob: 'UX Designer',
    dream: 'Fine Artist',
    cred: 89,
    title: 'First Solo Exhibition',
    description: "I want to quit my corporate job and prepare for my first solo art exhibition. The grant would cover studio rent, materials, and living expenses for 4 months while I create the body of work.",
    amount: '$6,000',
    votes: 234,
    totalVotes: 400,
    daysLeft: 3,
    status: 'voting',
  },
  {
    id: '3',
    applicant: 'Marcus Webb',
    avatar: '🎸',
    currentJob: 'Accountant',
    dream: 'Music Producer',
    cred: 120,
    title: 'Launch My First Album',
    description: "After 8 years in accounting, I'm ready to go full-time on music. The grant would cover studio time and living expenses for 2 months while I complete and release my debut album.",
    amount: '$3,000',
    votes: 400,
    totalVotes: 400,
    daysLeft: 0,
    status: 'funded',
  },
];

export default function GrantsPage() {
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
            <Link href="/grants" className="text-white font-medium">Grants</Link>
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
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold mb-2">Leap Grants</h1>
              <p className="text-gray-400">Vote with your CRED to fund creative leaps</p>
            </div>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl transition">
              Apply for Grant
            </button>
          </div>

          {/* Treasury Info */}
          <div className="mb-10 p-6 bg-gradient-to-r from-emerald-900/30 to-gray-800/50 rounded-2xl border border-emerald-500/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400">$12,450</div>
                <div className="text-gray-400 text-sm">Treasury Balance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">$320</div>
                <div className="text-gray-400 text-sm">Monthly Yield</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">3</div>
                <div className="text-gray-400 text-sm">Grants Funded</div>
              </div>
            </div>
          </div>

          {/* Grants List */}
          <div className="space-y-6">
            {mockGrants.map((grant) => (
              <div 
                key={grant.id} 
                className={`p-6 rounded-2xl border ${
                  grant.status === 'funded' 
                    ? 'bg-emerald-900/20 border-emerald-500/30' 
                    : 'bg-gray-800/50 border-gray-700'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                      {grant.avatar}
                    </div>
                    <div>
                      <div className="font-bold flex items-center gap-2">
                        {grant.applicant}
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded">
                          {grant.cred} CRED
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="text-red-400">{grant.currentJob}</span>
                        <span className="mx-2">→</span>
                        <span className="text-emerald-400">{grant.dream}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">{grant.amount}</div>
                    <div className="text-sm text-gray-400">requested</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{grant.title}</h3>
                <p className="text-gray-300 mb-4">{grant.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">{grant.votes} CRED votes</span>
                    <span className="text-gray-400">{Math.round((grant.votes / grant.totalVotes) * 100)}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        grant.status === 'funded' ? 'bg-emerald-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${(grant.votes / grant.totalVotes) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  {grant.status === 'funded' ? (
                    <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 font-semibold rounded-lg">
                      ✅ Funded
                    </span>
                  ) : (
                    <span className="text-gray-400">
                      {grant.daysLeft} days left to vote
                    </span>
                  )}
                  
                  {grant.status === 'voting' && (
                    <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition">
                      Vote with CRED
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
