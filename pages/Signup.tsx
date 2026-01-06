
import React, { useState } from 'react';
import { User, Briefcase, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Screen } from '../types';

const Signup: React.FC<{ onNavigate: (s: Screen) => void }> = ({ onNavigate }) => {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-6 bg-gradient-to-br from-brand-white to-brand-green/5">
      <div className="max-w-xl w-full bg-white border border-gray-100 rounded-[3rem] shadow-2xl p-10 md:p-16 space-y-10 animate-in zoom-in-95 duration-700">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
             <span className="text-brand-green font-black text-2xl">E</span>
          </div>
          <h1 className="text-4xl font-black text-brand-green">Join the Future</h1>
          <p className="text-gray-400 text-sm">Create your free account today</p>
        </div>

        <div className="flex p-2 bg-gray-50 rounded-2xl">
          <button 
            onClick={() => setRole('buyer')}
            className={`flex-1 py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all ${role === 'buyer' ? 'bg-white shadow-lg text-brand-green' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <User className="w-4 h-4" />
            <span>Buyer</span>
          </button>
          <button 
            onClick={() => setRole('seller')}
            className={`flex-1 py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all ${role === 'seller' ? 'bg-white shadow-lg text-brand-green' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Seller</span>
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-4">Full Name</label>
              <input type="text" placeholder="Rahim Ahmed" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-4">Phone / Email</label>
              <input type="text" placeholder="+880..." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-4">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all" />
          </div>
          
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input type="checkbox" className="w-5 h-5 accent-brand-green rounded-lg" />
            <span className="text-xs text-gray-400 font-bold">I agree to the <button onClick={() => onNavigate('TERMS')} className="text-brand-green underline">Terms</button> & <button onClick={() => onNavigate('PRIVACY')} className="text-brand-green underline">Privacy</button></span>
          </label>
        </div>

        <button 
          onClick={() => onNavigate('HOME')}
          className="w-full bg-brand-green text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-brand-green/20 flex items-center justify-center space-x-2 hover:bg-brand-green/90 active:scale-95 transition-all"
        >
          <span>Create {role === 'buyer' ? 'Buyer' : 'Seller'} Account</span>
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gray-100 flex-1" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Or Join With</span>
            <div className="h-px bg-gray-100 flex-1" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="py-4 border border-gray-100 rounded-2xl font-black text-sm flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all">
               <span>Google</span>
            </button>
            <button className="py-4 border border-gray-100 rounded-2xl font-black text-sm flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all">
               <span>Facebook</span>
            </button>
          </div>
          <p className="text-sm font-bold text-gray-400">
            Already have an account? <button onClick={() => onNavigate('LOGIN')} className="text-brand-green underline">Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
