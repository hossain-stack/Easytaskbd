
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import GigDetail from './pages/GigDetail';
import Microjobs from './pages/Microjobs';
import MicrojobDetail from './pages/MicrojobDetail';
import OrderFlow from './pages/OrderFlow';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import { Terms, Privacy, Help } from './pages/StaticPages';
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
        return <Home onNavigate={handleNavigate} featuredGigs={MOCK_GIGS} onGigSelect={(gig) => handleGigSelect(gig.id)} />;
      case 'LOGIN':
        return <Login onNavigate={handleNavigate} />;
      case 'SIGNUP':
        return <Signup onNavigate={handleNavigate} />;
      case 'BLOG':
        return <Blog onNavigate={handleNavigate} />;
      case 'CONTACT':
        return <Contact />;
      case 'ABOUT':
        return <About onNavigate={handleNavigate} />;
      case 'TERMS':
        return <Terms />;
      case 'PRIVACY':
        return <Privacy />;
      case 'HELP':
        return <Help />;
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
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="font-black text-lg leading-snug line-clamp-2 h-14">{gig.title}</h3>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                          <span className="font-black text-sm">{gig.seller.rating}</span>
                        </div>
                        <div className="text-right">
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
            <h1 className="text-5xl font-black text-brand-green">Microjob Board</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_MICROJOBS.map((job) => (
                <div 
                  key={job.id} 
                  onClick={() => handleMicrojobSelect(job)}
                  className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer space-y-6 group"
                >
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-brand-green/5 text-brand-green text-[10px] font-black rounded-full uppercase">{job.category}</span>
                    <p className="text-2xl font-black text-brand-green">{job.price}</p>
                  </div>
                  <h3 className="font-black text-xl text-brand-green">{job.title}</h3>
                </div>
              ))}
            </div>
          </div>
        );
      case 'MICROJOB_DETAIL':
        return selectedMicrojob ? <MicrojobDetail job={selectedMicrojob} onNavigate={handleNavigate} /> : <Home onNavigate={handleNavigate} featuredGigs={MOCK_GIGS} onGigSelect={(gig) => handleGigSelect(gig.id)} />;
      case 'DEPOSIT':
        return <OrderFlow onNavigate={handleNavigate} />;
      case 'ORDER_CONFIRMATION':
        return <OrderFlow onNavigate={handleNavigate} isConfirmation />;
      case 'PREMIUM_SUBSCRIBE':
        return <div className="p-20 text-center">Premium Subscription Flow (In Development)</div>;
      case 'SELLER_PROFILE':
        return (
          <div className="max-w-7xl mx-auto px-6 py-20 flex gap-12">
            <aside className="w-1/3 space-y-8">
              <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-xl text-center space-y-4">
                <img src="https://picsum.photos/seed/rahim/120/120" className="w-32 h-32 rounded-full mx-auto border-4 border-brand-yellow" />
                <h2 className="text-2xl font-black text-brand-green">Rahim Ahmed</h2>
                <div className="flex justify-around border-t border-gray-50 pt-4">
                  <div><p className="font-black">4.9</p><p className="text-[10px] uppercase text-gray-400 font-black">Rating</p></div>
                  <div><p className="font-black">250+</p><p className="text-[10px] uppercase text-gray-400 font-black">Jobs</p></div>
                </div>
              </div>
              {renderEarningsChart()}
            </aside>
            <div className="flex-1 space-y-12">
               <h3 className="text-4xl font-black">Expert Profile</h3>
               <p className="text-gray-500 text-lg leading-relaxed">Dedicated VAT and Tax consultant helping local businesses thrive.</p>
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
        onPlaceOrder={() => handleNavigate('DEPOSIT')}
      />
      <ShohojChat onRecommend={(id) => handleGigSelect(id)} />
    </Layout>
  );
};

export default App;
