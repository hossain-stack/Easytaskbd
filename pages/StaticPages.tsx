
import React, { useState } from 'react';
import { Shield, Lock, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export const Terms: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 space-y-12 animate-in fade-in duration-700">
    <div className="text-center space-y-4">
      <Shield className="w-16 h-16 text-brand-yellow mx-auto" />
      <h1 className="text-5xl font-black text-brand-green">Terms of Service</h1>
      <p className="text-gray-400">Last updated: Oct 14, 2026</p>
    </div>
    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-brand-green">1. Acceptance of Terms</h2>
        <p>By accessing and using EasyTaskBD, you agree to be bound by these terms. Our platform is a marketplace for digital services and micro-tasks.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-brand-green">2. User Conduct</h2>
        <p>Users must provide accurate information. Spamming, fraudulent activity, or harassment of other users will result in immediate permanent account suspension.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-brand-green">3. Payments & Escrow</h2>
        <p>All funds are processed via our secure Escrow system. EasyTaskBD holds the funds until the buyer confirms satisfactory delivery of the service or micro-task.</p>
      </section>
    </div>
  </div>
);

export const Privacy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 space-y-12 animate-in fade-in duration-700">
    <div className="text-center space-y-4">
      <Lock className="w-16 h-16 text-brand-yellow mx-auto" />
      <h1 className="text-5xl font-black text-brand-green">Privacy Policy</h1>
      <p className="text-gray-400">Your data is safe with EasyTaskBD</p>
    </div>
    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
      <div className="p-8 bg-brand-yellow/10 rounded-3xl border border-brand-yellow/20 flex items-start space-x-6">
        <Shield className="w-12 h-12 text-brand-green flex-shrink-0" />
        <div>
          <h4 className="font-black text-brand-green">Data Protection Highlight</h4>
          <p className="text-sm">We never sell your data to third parties. Your contact information is only shared with collaborators during an active order.</p>
        </div>
      </div>
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-brand-green">Information We Collect</h2>
        <p>We collect personal information necessary to facilitate transactions, including name, email, phone number, and transaction history.</p>
      </section>
    </div>
  </div>
);

export const Help: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <HelpCircle className="w-16 h-16 text-brand-yellow mx-auto" />
        <h1 className="text-5xl font-black text-brand-green">Help Center</h1>
        <p className="text-gray-400">Find answers to common questions</p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="border border-gray-100 rounded-[2rem] overflow-hidden transition-all hover:border-brand-yellow">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full p-8 flex items-center justify-between text-left transition-colors ${openIndex === i ? 'bg-brand-green text-white' : 'bg-white hover:bg-gray-50'}`}
            >
              <span className="text-lg font-black">{item.q}</span>
              {openIndex === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {openIndex === i && (
              <div className="p-8 bg-white text-gray-500 leading-relaxed text-lg border-t border-gray-50 animate-in slide-in-from-top-2">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
