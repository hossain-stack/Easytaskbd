
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import GigDetail from './pages/GigDetail';
import Microjobs from './pages/Microjobs';
import MicrojobDetail from './pages/MicrojobDetail';
import OrderFlow from './pages/OrderFlow';
import Login from './pages/Login';
import ChatModal from './components/ChatModal';
import ShohojChat from './components/ShohojChat';
import { Screen, Gig, Microjob } from './types';
import { MOCK_GIGS, MOCK_EARNINGS, MOCK_MICROJOBS, CATEGORIES } from './constants';
import { Star, TrendingUp, Award, Zap, ChevronRight, BarChart3, ShieldCheck, Clock, Target, Play, MapPin, Filter } from 'lucide-react';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('HOME');
  const [selectedGig, setSelectedGig] = useState<Gig | null>(null);
  const [selectedMicrojob, setSelectedMicrojob] = useState<Microjob | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock session

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGigSelect = (gigId: string) => {
    const gig = MOCK_GIGS.find(g => g.id === gigId);
    if (gig) {
      setSelectedGig(gig);
      handleNavigate('GIG_DETAIL');
    }
  };

  const handleMicrojobSelect = (job: Microjob) => {
    setSelectedMicrojob(job);
    handleNavigate('MICROJOB_DETAIL');
  };

  const renderEarningsChart = () => {
    const max = Math.max(...MOCK_EARNINGS.map(d => d.amount));
    return (
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-brand-green" />
            <span>Earnings Analytics</span>
          </h3>
          <div className="flex items-center space-x-1 text-green-500 font-bold text-xs bg-green-50 px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3" />
            <span>+15% this month</span>
          </div>
        </div>
        <div className="h-48 flex items-end justify-between gap-2 px-2">
          {MOCK_EARNINGS.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center group cursor-help">
              <div 
                className="w-full bg-brand-green/10 rounded-t-lg relative group-hover:bg-brand-yellow transition-all"
                style={{ height: `${(d.amount / max) * 100}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-green text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  ৳{d.amount}
                </div>
              </div>
              <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase">{d.month}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'HOME':
        return <Home 
          onNavigate={handleNavigate} 
          featuredGigs={MOCK_GIGS} 
          onGigSelect={(gig) => handleGigSelect(gig.id)} 
        />;
      case 'LOGIN':
        return <Login onNavigate={handleNavigate} />;
      case 'GIG_DETAIL':
        return selectedGig ? (
          <GigDetail 
            gig={selectedGig} 
            onNavigate={handleNavigate} 
            onOpenChat={() => setIsChatOpen(true)}
          />
        ) : <Home onNavigate={handleNavigate} featuredGigs={MOCK_GIGS} onGigSelect={(gig) => handleGigSelect(gig.id)} />;
      
      case 'GIG_LIST':
        return (
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
              <h1 className="text-4xl font-black text-brand-green">Professional Marketplace</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select className="bg-transparent text-sm font-bold focus:outline-none">
                    <option>Recommended</option>
                    <option>Highest Rated</option>
                    <option>Most Recent</option>
                    <option>Price: Low to High</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <aside className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase text-gray-400 tracking-[0.2em]">Industries</p>
                  <div className="flex flex-col space-y-2">
                    {CATEGORIES.slice(0, 8).map(cat => (
                      <button key={cat} className="text-left px-4 py-3 rounded-xl hover:bg-brand-yellow/10 hover:text-brand-green font-bold text-sm transition-all text-gray-500">
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 pt-8 border-t border-gray-50">
                  <p className="text-xs font-black uppercase text-gray-400 tracking-[0.2em]">Service Options</p>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 accent-brand-green rounded-lg" />
                      <span className="text-sm font-bold text-gray-600 group-hover:text-brand-green transition-colors">Active Now</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 accent-brand-green rounded-lg" />
                      <span className="text-sm font-bold text-gray-600 group-hover:text-brand-green transition-colors">Verified Experts</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 accent-brand-green rounded-lg" />
                      <span className="text-sm font-bold text-gray-600 group-hover:text-brand-green transition-colors">Under 24h Delivery</span>
                    </label>
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {MOCK_GIGS.map(gig => (
                  <div 
                    key={gig.id} 
                    className={`bg-white rounded-[2rem] border overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer relative group ${gig.isPremium ? 'border-brand-yellow/50 ring-4 ring-brand-yellow/5' : 'border-gray-100'}`}
                    onClick={() => handleGigSelect(gig.id)}
                  >
                    {gig.isPremium && (
                      <div className="absolute top-4 right-4 z-10 bg-brand-yellow text-brand-green text-[10px] font-black px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-lg">
                        <Award className="w-3 h-3" />
                        <span>PREMIUM</span>
                      </div>
                    )}
                    <div className="h-56 relative overflow-hidden">
                      <img src={gig.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={gig.title} />
                      <div className="absolute bottom-4 left-4 flex space-x-2">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black uppercase text-brand-green">
                          {gig.category}
                        </span>
                        {gig.location && (
                          <span className="px-3 py-1 bg-brand-green/90 backdrop-blur rounded-lg text-[10px] font-black uppercase text-brand-yellow flex items-center space-x-1">
                            <MapPin className="w-2.5 h-2.5" />
                            <span>{gig.location}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <img src={gig.seller.avatar} className="w-8 h-8 rounded-full border border-gray-100 shadow-sm" />
                        <span className="text-xs font-bold text-gray-500 group-hover:text-brand-green">{gig.seller.name}</span>
                      </div>
                      <h3 className="font-black text-lg leading-snug line-clamp-2 h-14">{gig.title}</h3>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                          <span className="font-black text-sm">{gig.seller.rating}</span>
                          <span className="text-xs text-gray-400">({gig.seller.reviews})</span>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">Starting At</p>
                          <p className="font-black text-xl text-brand-green">{gig.tiers.basic.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'MICROJOBS':
        return (
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center bg-brand-green p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow opacity-10 rounded-full -mr-32 -mt-32" />
              <div className="relative z-10 space-y-3">
                <h1 className="text-5xl font-black">Microjob Board</h1>
                <p className="text-brand-yellow/70 font-bold max-w-md">Small tasks, instant payouts. Perfect for daily earnings while you learn.</p>
              </div>
              <div className="relative z-10 hidden md:block">
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-xl border border-white/10 text-center">
                  <p className="text-3xl font-black text-brand-yellow">৳15,420</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Paid Out Today</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {MOCK_MICROJOBS.map((job, i) => (
                <div 
                  key={job.id} 
                  onClick={() => handleMicrojobSelect(job)}
                  className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer space-y-6 group"
                >
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-brand-green/5 text-brand-green text-[10px] font-black rounded-full uppercase tracking-widest">{job.category}</span>
                    <div className="text-right">
                      <p className="text-2xl font-black text-brand-green group-hover:text-brand-yellow transition-colors">{job.price}</p>
                    </div>
                  </div>
                  <h3 className="font-black text-xl leading-tight text-brand-green group-hover:translate-x-1 transition-transform">{job.title}</h3>
                  <div className="flex items-center space-x-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                    <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /><span>{job.duration}</span></div>
                    <div className="flex items-center space-x-2"><Target className="w-4 h-4" /><span>{job.spots} left</span></div>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-bold text-brand-green">
                    <span>Hold Fee: ৳{job.holdFee || 2}</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'MICROJOB_DETAIL':
        return selectedMicrojob ? (
          <MicrojobDetail job={selectedMicrojob} onNavigate={handleNavigate} />
        ) : <Home onNavigate={handleNavigate} featuredGigs={MOCK_GIGS} onGigSelect={(gig) => handleGigSelect(gig.id)} />;

      case 'DEPOSIT':
        return <OrderFlow onNavigate={handleNavigate} />;
      case 'ORDER_CONFIRMATION':
        return <OrderFlow onNavigate={handleNavigate} isConfirmation />;
      
      case 'PREMIUM_SUBSCRIBE':
        return (
          <div className="max-w-4xl mx-auto px-6 py-20 space-y-12 animate-in zoom-in-95 duration-700">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-brand-yellow/20 rounded-[1.5rem] flex items-center justify-center mx-auto text-brand-green animate-float shadow-xl shadow-brand-yellow/10">
                <Award className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-black text-brand-green">Upgrade Your Success</h1>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">Boost your visibility, gain trust, and get 3x more orders with EasyTaskBD Premium subscription.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="bg-white border-4 border-brand-yellow rounded-[3rem] p-10 space-y-10 shadow-2xl relative overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute top-0 right-0 bg-brand-yellow px-6 py-2 rounded-bl-3xl text-xs font-black text-brand-green tracking-widest">MOST POPULAR</div>
                <div>
                  <h3 className="text-3xl font-black text-brand-green">Monthly Pro</h3>
                  <p className="text-5xl font-black text-brand-green mt-4">৳999<span className="text-sm text-gray-400 font-bold tracking-normal">/mo</span></p>
                </div>
                <ul className="space-y-5">
                  {[
                    "Verified Expert Badge",
                    "Top 1% listing priority",
                    "Reduced commission (5%)",
                    "Unlimited profile analytics",
                    "Personal success manager"
                  ].map((f, i) => (
                    <li key={i} className="flex items-center space-x-4 text-sm font-bold text-gray-700">
                      <div className="p-1 bg-brand-yellow rounded-lg"><Zap className="w-4 h-4 text-brand-green fill-brand-green" /></div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleNavigate('DEPOSIT')} className="w-full bg-brand-green text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-brand-green/20 hover:bg-brand-green/90 transition-all active:scale-95">
                  Go Premium Now
                </button>
              </div>

              <div className="bg-gray-50/50 border border-gray-100 rounded-[3rem] p-10 space-y-10 flex flex-col justify-between grayscale opacity-60">
                <div>
                  <h3 className="text-3xl font-black text-gray-400">Basic Seller</h3>
                  <p className="text-5xl font-black text-gray-400 mt-4">Free</p>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-center space-x-4 text-sm font-bold text-gray-400"><span>•</span><span>Standard Search Listing</span></li>
                  <li className="flex items-center space-x-4 text-sm font-bold text-gray-400"><span>•</span><span>10% Platform Fee</span></li>
                  <li className="flex items-center space-x-4 text-sm font-bold text-gray-400"><span>•</span><span>Basic Profile Analytics</span></li>
                </ul>
                <div className="text-xs text-center font-black uppercase text-gray-400 tracking-[0.3em] pb-4">Current Active Plan</div>
              </div>
            </div>
          </div>
        );

      case 'SELLER_PROFILE':
        return (
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <aside className="md:w-1/3 space-y-8">
              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-2xl space-y-8 flex flex-col items-center text-center">
                <div className="relative group">
                  <img src="https://picsum.photos/seed/rahim/120/120" className="w-40 h-40 rounded-[2rem] border-4 border-brand-yellow shadow-xl group-hover:rotate-3 transition-all duration-500" alt="Avatar" />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <h2 className="text-3xl font-black text-brand-green">Rahim Ahmed</h2>
                    <Award className="w-7 h-7 text-brand-yellow fill-brand-yellow drop-shadow-sm" />
                  </div>
                  <p className="text-xs text-gray-400 font-black tracking-[0.2em] uppercase">Senior VAT Consultant</p>
                </div>

                <div className="w-full h-56 rounded-3xl overflow-hidden shadow-inner bg-gray-100 group relative">
                   <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Intro Video" 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                  />
                  <div className="absolute top-2 left-2 bg-brand-green/80 text-white text-[8px] font-black px-2 py-1 rounded uppercase">Intro Video</div>
                </div>

                <div className="w-full pt-8 border-t border-gray-50 grid grid-cols-3 gap-4">
                  <div className="text-center"><p className="text-xl font-black text-brand-green">4.9</p><p className="text-[10px] text-gray-400 font-black uppercase">Rating</p></div>
                  <div className="text-center border-x border-gray-50"><p className="text-xl font-black text-brand-green">1hr</p><p className="text-[10px] text-gray-400 font-black uppercase">Resp.</p></div>
                  <div className="text-center"><p className="text-xl font-black text-brand-green">98%</p><p className="text-[10px] text-gray-400 font-black uppercase">Success</p></div>
                </div>
                
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="w-full bg-brand-green text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-green/10 hover:scale-[1.02] transition-all"
                >
                  Message Expert
                </button>
                <button 
                  onClick={() => handleNavigate('PREMIUM_SUBSCRIBE')}
                  className="text-xs font-black text-brand-green uppercase tracking-widest hover:underline"
                >
                  Manage Membership
                </button>
              </div>
              {renderEarningsChart()}
            </aside>

            <div className="flex-1 space-y-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-brand-green">Expert Biography</h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  Chartered Accountant with 10+ years helping SMEs across Bangladesh. Specializing in high-stakes auditing and precise VAT filings. I've successfully resolved over 200+ complex tax cases and consistently maintain a top-tier rating for communication and accuracy.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black text-brand-green">Premium Showcase</h3>
                  <button className="text-sm font-black text-brand-green hover:underline">View All Gigs</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {MOCK_GIGS.map(gig => (
                    <div key={gig.id} className="group border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all cursor-pointer" onClick={() => handleGigSelect(gig.id)}>
                      <div className="h-44 overflow-hidden"><img src={gig.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                      <div className="p-6 space-y-4">
                        <h4 className="font-black text-brand-green group-hover:text-brand-yellow transition-colors">{gig.title}</h4>
                        <div className="flex items-center justify-between"><span className="text-brand-green font-black text-lg">{gig.tiers.basic.price}</span><ChevronRight className="w-5 h-5 text-gray-300" /></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-black text-brand-green">Portfolio Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-[2rem] overflow-hidden hover:scale-105 transition-all cursor-zoom-in shadow-lg group">
                      <img src={`https://picsum.photos/seed/port${i+30}/500/500`} className="w-full h-full object-cover group-hover:brightness-90 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={handleNavigate} featuredGigs={MOCK_GIGS} onGigSelect={(gig) => handleGigSelect(gig.id)} />;
    }
  };

  return (
    <Layout activeScreen={currentScreen} onNavigate={handleNavigate}>
      {renderScreen()}
      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        sellerName={selectedGig?.seller.name || "Rahim Ahmed"}
        onPlaceOrder={(customPrice) => {
          setIsChatOpen(false);
          handleNavigate('DEPOSIT');
        }}
      />
      <ShohojChat onRecommend={(id) => handleGigSelect(id)} />
    </Layout>
  );
};

export default App;
