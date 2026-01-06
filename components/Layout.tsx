
import React from 'react';
import { Search, User, Menu, Bell } from 'lucide-react';
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
          </div>

          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Find services..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 group-hover:text-brand-green transition-colors" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-brand-green" />
            <button 
              onClick={() => onNavigate('SELLER_PROFILE')}
              className="flex items-center space-x-2 p-1 rounded-full border border-gray-100 hover:border-brand-yellow transition-all"
            >
              <img src="https://picsum.photos/seed/user/32/32" className="w-8 h-8 rounded-full" alt="Profile" />
            </button>
            <Menu className="md:hidden w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-green text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-brand-yellow rounded-md"></div>
              <span className="font-bold text-xl">EasyTaskBD</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Bangladesh with top professional talent and easy micro-earning opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-brand-yellow">For Buyers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Post a Microjob</li>
              <li className="hover:text-white cursor-pointer transition-colors">Browse Professionals</li>
              <li className="hover:text-white cursor-pointer transition-colors">Buyer Protection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-brand-yellow">For Sellers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Become a Seller</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sell Micro-Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Education & Tips</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-brand-yellow">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © 2024 EasyTaskBD. All rights reserved. Made for Bangladesh.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
