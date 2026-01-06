
import React from 'react';
import { ArrowRight, Zap, ShieldCheck, CreditCard, Users } from 'lucide-react';
import { Screen, Gig } from '../types';
import GigCard from '../components/GigCard';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
  featuredGigs: Gig[];
  onGigSelect: (gig: Gig) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, featuredGigs, onGigSelect }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-green overflow-hidden">
        {/* Animated Map Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 1000">
            <path d="M100,100 Q400,0 700,100 T700,900 T100,900 Z" fill="none" stroke="#FFD700" strokeWidth="2" />
            <circle cx="400" cy="500" r="10" fill="#FFD700" className="animate-pulse" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hire Top Talent or <br />
              <span className="text-brand-yellow">Earn Easily</span> <br />
              in Bangladesh
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              From expert legal consulting to quick social media micro-tasks, EasyTaskBD bridges the gap between professionals and business opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => onNavigate('GIG_LIST')}
                className="px-8 py-4 bg-brand-yellow text-brand-green font-bold rounded-xl shadow-lg hover:shadow-brand-yellow/20 hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <span>Browse Professional Gigs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('MICROJOBS')}
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Post a Microjob
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-brand-yellow font-bold text-2xl">10K+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Active Sellers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-yellow font-bold text-2xl">৳50M+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Payouts Made</span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-yellow font-bold text-2xl">4.9/5</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Avg. Rating</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative animate-in zoom-in-95 duration-1000">
            <div className="w-[500px] h-[500px] bg-gradient-to-tr from-brand-yellow/20 to-transparent rounded-full absolute -top-10 -right-10 animate-float" />
            <img 
              src="https://picsum.photos/seed/freelance/800/800" 
              className="w-full rounded-3xl shadow-2xl relative z-10 border border-white/10" 
              alt="Bangladeshi Freelancer" 
            />
          </div>
        </div>
      </section>

      {/* Featured Gigs Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Featured Professional Services</h2>
            <p className="text-gray-500">Curated experts delivered with precision.</p>
          </div>
          <button 
            onClick={() => onNavigate('GIG_LIST')}
            className="text-brand-green font-bold flex items-center space-x-1 hover:space-x-2 transition-all"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGigs.slice(0, 4).map(gig => (
            <GigCard key={gig.id} gig={gig} onClick={() => onGigSelect(gig)} />
          ))}
        </div>
      </section>

      {/* Microjob Highlights */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex px-3 py-1 bg-brand-yellow/20 text-brand-green text-xs font-bold rounded-full">
              QUICK TASKS
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Need Something Small Done Fast? <br />
              <span className="text-brand-green/60">Try Microjobs.</span>
            </h2>
            <p className="text-gray-600">
              Thousands of workers are ready to like, follow, review, or test your products. Low cost, high speed, and verified proofs.
            </p>
            <div className="space-y-4">
              {[
                { icon: Zap, title: "Instant Hiring", desc: "Jobs claimed in seconds." },
                { icon: ShieldCheck, title: "Proof Verification", desc: "You only pay for valid work." },
                { icon: CreditCard, title: "Low Fees", desc: "Start campaigns from just 50 BDT." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-green">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onNavigate('MICROJOBS')}
              className="px-6 py-3 bg-brand-green text-white font-bold rounded-xl hover:scale-105 transition-all"
            >
              Explore Microjobs
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-40 bg-brand-green/5 rounded-2xl flex items-center justify-center animate-float">
                <Users className="w-12 h-12 text-brand-green/20" />
              </div>
              <div className="h-60 bg-brand-yellow/10 rounded-2xl p-6 flex flex-col justify-end">
                <span className="text-2xl font-bold">150+</span>
                <span className="text-xs uppercase text-gray-500 font-bold">New Jobs Daily</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-60 bg-brand-green rounded-2xl p-6 text-white flex flex-col justify-between">
                <div className="w-10 h-10 bg-white/20 rounded-full" />
                <div>
                  <p className="text-brand-yellow font-bold">Top Earner</p>
                  <p className="text-sm opacity-60">Kamal earned ৳4,200 this week</p>
                </div>
              </div>
              <div className="h-40 bg-gray-200 rounded-2xl overflow-hidden grayscale">
                <img src="https://picsum.photos/seed/task/400/400" className="w-full h-full object-cover" alt="Task" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
