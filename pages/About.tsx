
import React from 'react';
import { Target, Users, Award, Zap, Heart } from 'lucide-react';
import { Screen } from '../types';

const About: React.FC<{ onNavigate: (s: Screen) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-green">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20" alt="Team" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/80 to-brand-green" />
        </div>
        <div className="relative z-10 text-center space-y-6 px-6">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">Empowering Every Bangladeshi <br /> to <span className="text-brand-yellow">Earn & Grow</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">We are building the future of work for 170 million people, one task at a time.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Active Sellers', value: '12K+', icon: Users },
            { label: 'Completed Jobs', value: '50K+', icon: Zap },
            { label: 'Payouts Made', value: '৳50M+', icon: Award },
            { label: 'Avg Rating', value: '4.9/5', icon: Heart },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-2 group hover:border-brand-yellow transition-all">
              <div className="p-3 bg-brand-green/5 text-brand-green rounded-xl group-hover:bg-brand-yellow transition-all">
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-4xl font-black text-brand-green">{stat.value}</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-brand-green">Our Mission</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              At EasyTaskBD, we believe that opportunity should be local and accessible. Our mission is to bridge the gap between talented professionals and businesses across Bangladesh, while providing students and part-time workers a reliable way to earn through micro-tasks.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              We focus on context, culture, and convenience. By supporting local payment methods like bKash and Nagad, we ensure that every Bangladeshi can participate in the digital economy without barriers.
            </p>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img src="https://picsum.photos/seed/mission/800/600" className="w-full" alt="Mission" />
          </div>
        </div>

        <div className="text-center space-y-12">
          <h2 className="text-4xl font-black text-brand-green">Our Vision for 2030</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-gray-50 rounded-[2.5rem] space-y-4">
              <div className="text-6xl text-brand-yellow opacity-30 font-black">01</div>
              <h4 className="text-xl font-black">Inclusive Economy</h4>
              <p className="text-sm text-gray-500">Every district from Panchagarh to Cox's Bazar represented in the digital workforce.</p>
            </div>
            <div className="p-10 bg-brand-green text-white rounded-[2.5rem] space-y-4 shadow-2xl">
              <div className="text-6xl text-brand-yellow opacity-30 font-black">02</div>
              <h4 className="text-xl font-black">Global Standards</h4>
              <p className="text-sm text-gray-300">Training local talent to compete on a global level with high-fidelity output and ethics.</p>
            </div>
            <div className="p-10 bg-gray-50 rounded-[2.5rem] space-y-4">
              <div className="text-6xl text-brand-yellow opacity-30 font-black">03</div>
              <h4 className="text-xl font-black">Secure Future</h4>
              <p className="text-sm text-gray-500">A reliable insurance and benefit system for our top-tier freelancers.</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-yellow p-16 rounded-[4rem] text-center space-y-8 shadow-2xl shadow-brand-yellow/20">
          <h2 className="text-4xl font-black text-brand-green">Ready to be part of the revolution?</h2>
          <div className="flex justify-center gap-4">
            <button onClick={() => onNavigate('SIGNUP')} className="px-10 py-4 bg-brand-green text-white font-black rounded-2xl hover:scale-105 transition-all">Join Our Community</button>
            <button onClick={() => onNavigate('BLOG')} className="px-10 py-4 bg-white text-brand-green font-black rounded-2xl border border-brand-green/10 hover:bg-gray-50 transition-all">Success Stories</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
