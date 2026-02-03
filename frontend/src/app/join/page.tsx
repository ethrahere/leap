'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    currentJob: '',
    creativeDream: '',
    timeline: '6months',
    twitter: '',
    bio: '',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-emerald-400">LEAP</span>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Start Your <span className="text-emerald-400">Leap</span>
          </h1>
          <p className="text-gray-400 text-center mb-10">
            Tell us about your journey. Where you're escaping from, and where you're headed.
          </p>

          {/* Progress */}
          <div className="flex gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div 
                key={s}
                className={`flex-1 h-2 rounded-full ${s <= step ? 'bg-emerald-500' : 'bg-gray-700'}`}
              />
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">What's your name?</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name or alias"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">What's your current job? (The cage)</label>
                <input
                  type="text"
                  value={formData.currentJob}
                  onChange={(e) => setFormData({ ...formData, currentJob: e.target.value })}
                  placeholder="e.g., Software Engineer at BigCorp"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>
              
              <button
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.currentJob}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-black font-bold rounded-xl transition"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">What's your creative dream? (The goal)</label>
                <input
                  type="text"
                  value={formData.creativeDream}
                  onChange={(e) => setFormData({ ...formData, creativeDream: e.target.value })}
                  placeholder="e.g., Full-time indie game developer"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">When do you plan to leap?</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-emerald-500 focus:outline-none"
                >
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="1year">Within 1 year</option>
                  <option value="already">Already leaped! 🚀</option>
                </select>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!formData.creativeDream}
                  className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-black font-bold rounded-xl transition"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Twitter/X (optional)</label>
                <input
                  type="text"
                  value={formData.twitter}
                  onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                  placeholder="@yourhandle"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tell us more about your journey</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="What's driving you to make the leap? What are you working on?"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              {/* Preview Card */}
              <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Preview</div>
                <div className="font-bold text-lg mb-1">{formData.name || 'Your Name'}</div>
                <div className="text-sm text-gray-400 mb-3">
                  <span className="text-red-400">{formData.currentJob || 'Current Job'}</span>
                  <span className="mx-2">→</span>
                  <span className="text-emerald-400">{formData.creativeDream || 'Creative Dream'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">+10 CRED</span>
                  <span>for joining</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl transition"
                >
                  Back
                </button>
                <button
                  onClick={() => alert('Coming soon! Connect wallet to complete.')}
                  className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition"
                >
                  Complete Registration
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center">
                Connect your wallet to finish registration and receive +10 CRED
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
