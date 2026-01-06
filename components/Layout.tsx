
import React from 'react';
import { Search, Bell, Menu, Facebook, Twitter, Youtube, MessageSquare, ShieldCheck, Globe } from 'lucide-react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-white text-brand-green">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => onNavigate('HOME')}
          >
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center group-hover:bg-opacity-90 transition-all">
              <span className="text-brand-yellow font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-brand-green">
              EasyTask<span className="text-brand-green/70">BD</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button 
              onClick={() => onNavigate('GIG_LIST')}
              className={`hover:text-brand-green transition-colors ${activeScreen === 'GIG_LIST' ? 'text-brand-green border-b-2 border-brand-yellow' : 'text-gray-500'}`}
            >
              Professional Gigs
            </button>
            <button 
              onClick={() => onNavigate('MICROJOBS')}
              className={`hover:text-brand-green transition-colors ${activeScreen === 'MICROJOBS' ? 'text-brand-green border-b-2 border-brand-yellow' : 'text-gray-500'}`}
            >
              Microjobs
            </button>
            <button 
              onClick={() => onNavigate('BLOG')}
              className={`hover:text-brand-green transition-colors ${activeScreen === 'BLOG' ? 'text-brand-green border-b-2 border-brand-yellow' : 'text-gray-500'}`}
            >
              Blog
            </button>
          </div>

          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search services or experts..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 group-hover:text-brand-green transition-colors" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-brand-green" />
            <button 
              onClick={() => onNavigate('LOGIN')}
              className="px-6 py-2 bg-brand-yellow text-brand-green font-bold text-xs rounded-full hover:scale-105 transition-all shadow-sm shadow-brand-yellow/20"
            >
              Sign In
            </button>
            <Menu className="md:hidden w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* High Fidelity Footer */}
      <footer className="bg-brand-green text-white pt-20 pb-8 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
            {/* About Column */}
            <div className="col-span-2 lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center">
                  <span className="text-brand-green font-black">E</span>
                </div>
                <span className="text-2xl font-black">EasyTaskBD</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bangladesh's trusted platform for expert gigs and daily microjobs. Empowering the digital workforce.
              </p>
              <button 
                onClick={() => onNavigate('ABOUT')}
                className="px-6 py-2 bg-brand-yellow text-brand-green text-xs font-black rounded-lg hover:scale-105 transition-all"
              >
                Learn More
              </button>
            </div>

            {/* Links Columns */}
            <div className="space-y-6">
              <h4 className="font-black text-brand-yellow uppercase tracking-widest text-xs">For Buyers</h4>
              <ul className="space-y-3 text-sm text-gray-400 font-bold">
                <li onClick={() => onNavigate('MICROJOBS')} className="hover:text-brand-yellow cursor-pointer transition-colors">Post a Microjob</li>
                <li onClick={() => onNavigate('GIG_LIST')} className="hover:text-brand-yellow cursor-pointer transition-colors">Browse Professionals</li>
                <li onClick={() => onNavigate('TERMS')} className="hover:text-brand-yellow cursor-pointer transition-colors">Buyer Protection</li>
                <li onClick={() => onNavigate('HELP')} className="hover:text-brand-yellow cursor-pointer transition-colors">Safe Payments</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-brand-yellow uppercase tracking-widest text-xs">For Sellers</h4>
              <ul className="space-y-3 text-sm text-gray-400 font-bold">
                <li onClick={() => onNavigate('SIGNUP')} className="hover:text-brand-yellow cursor-pointer transition-colors">Create Profile</li>
                <li onClick={() => onNavigate('PREMIUM_SUBSCRIBE')} className="hover:text-brand-yellow cursor-pointer transition-colors">Publish Gigs</li>
                <li onClick={() => onNavigate('SELLER_PROFILE')} className="hover:text-brand-yellow cursor-pointer transition-colors">Seller Dashboard</li>
                <li onClick={() => onNavigate('BLOG')} className="hover:text-brand-yellow cursor-pointer transition-colors">Earnings Tips</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-brand-yellow uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-3 text-sm text-gray-400 font-bold">
                <li onClick={() => onNavigate('HELP')} className="hover:text-brand-yellow cursor-pointer transition-colors">Help Center</li>
                <li onClick={() => onNavigate('CONTACT')} className="hover:text-brand-yellow cursor-pointer transition-colors">Contact Us</li>
                <li onClick={() => onNavigate('HELP')} className="hover:text-brand-yellow cursor-pointer transition-colors">FAQ</li>
                <li onClick={() => onNavigate('CONTACT')} className="hover:text-brand-yellow cursor-pointer transition-colors">Report Issue</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-brand-yellow uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400 font-bold">
                <li onClick={() => onNavigate('TERMS')} className="hover:text-brand-yellow cursor-pointer transition-colors">Terms of Service</li>
                <li onClick={() => onNavigate('PRIVACY')} className="hover:text-brand-yellow cursor-pointer transition-colors">Privacy Policy</li>
                <li onClick={() => onNavigate('BLOG')} className="hover:text-brand-yellow cursor-pointer transition-colors">Blog</li>
                <li onClick={() => onNavigate('CONTACT')} className="hover:text-brand-yellow cursor-pointer transition-colors">Newsletter</li>
              </ul>
            </div>
          </div>

          {/* Social & Payments Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-8">
            <div className="flex items-center space-x-6">
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-yellow hover:text-brand-green transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-yellow hover:text-brand-green transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-yellow hover:text-brand-green transition-all"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-yellow hover:text-brand-green transition-all"><MessageSquare className="w-5 h-5" /></a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="px-3 py-1 bg-white rounded font-black text-[10px] text-pink-600">bKash</div>
              <div className="px-3 py-1 bg-white rounded font-black text-[10px] text-orange-600">Nagad</div>
              <div className="px-3 py-1 bg-white rounded font-black text-[10px] text-purple-700">Rocket</div>
              <div className="px-3 py-1 bg-white rounded font-black text-[10px] text-blue-800 uppercase">Visa</div>
              <div className="px-3 py-1 bg-white rounded font-black text-[10px] text-blue-500 font-bold italic">PayPal</div>
            </div>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">
              Made with ❤️ in Bangladesh
            </p>
            <div className="flex items-center justify-center space-x-2 text-[10px] font-black text-gray-600 uppercase">
              <Globe className="w-3 h-3" />
              <span>Bangla / English</span>
              <span className="mx-2">|</span>
              <span>BDT (৳)</span>
            </div>
            <p className="text-gray-500 text-[10px] opacity-50">© 2026 EasyTaskBD. Leading the freelance revolution in BD.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
