
import React, { useState } from 'react';
import { User, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Screen } from '../types';

const Login: React.FC<{ onNavigate: (s: Screen) => void }> = ({ onNavigate }) => {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-brand-green leading-tight">
              Welcome to <span className="text-brand-green/70 italic">EasyTaskBD</span>
            </h1>
            <p className="text-gray-500 text-lg">Join the fastest growing digital workforce in Bangladesh.</p>
          </div>

          <div className="flex space-x-4 p-2 bg-gray-100 rounded-2xl">
            <button 
              onClick={() => setRole('buyer')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all ${role === 'buyer' ? 'bg-white shadow-lg text-brand-green' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <User className="w-4 h-4" />
              <span>I'm a Buyer</span>
            </button>
            <button 
              onClick={() => setRole('seller')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all ${role === 'seller' ? 'bg-white shadow-lg text-brand-green' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Briefcase className="w-4 h-4" />
              <span>I'm a Seller</span>
            </button>
          </div>

          <div className="space-y-6 bg-brand-green/5 p-8 rounded-3xl border border-brand-green/10">
            <p className="text-sm font-bold text-brand-green uppercase tracking-widest">Why EasyTaskBD?</p>
            <div className="space-y-4">
              {role === 'buyer' ? (
                <>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                    <p className="text-sm text-gray-600">"Verified local talent ensures my projects stay within context and culture."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                    <p className="text-sm text-gray-600">"Escrow payments mean I only pay when I'm 100% happy with the delivery."</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                    <p className="text-sm text-gray-600">"Secure bKash/Nagad payouts make it easy to manage my local earnings."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                    <p className="text-sm text-gray-600">"Access to both big gigs and small micro-tasks keeps my wallet active."</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 p-10 rounded-[2rem] shadow-2xl space-y-8 animate-in zoom-in-95 duration-700">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Sign In</h2>
            <p className="text-gray-400 text-sm">Access your {role} dashboard</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
              <input type="email" placeholder="name@company.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-bold">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="accent-brand-green" />
              <span className="text-gray-400">Remember Me</span>
            </label>
            <button className="text-brand-green hover:underline">Forgot Password?</button>
          </div>

          <button 
            onClick={() => onNavigate('HOME')}
            className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-green/20 flex items-center justify-center space-x-2 hover:bg-brand-green/90 active:scale-95 transition-all"
          >
            <span>Continue as {role === 'buyer' ? 'Buyer' : 'Seller'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-400">Or continue with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 border border-gray-100 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">Google</button>
              <button className="py-3 border border-gray-100 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
