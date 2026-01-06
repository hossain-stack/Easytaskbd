
import React from 'react';
import { Send, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-6xl font-black text-brand-green leading-tight">Get in Touch</h1>
            <p className="text-gray-500 text-lg">Have questions about a gig, microjob, or payment? Our team is here to help 24/7.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-brand-yellow/10 rounded-[2rem] border border-brand-yellow/20 space-y-4 group hover:bg-brand-yellow transition-all duration-500">
              <Mail className="w-8 h-8 text-brand-green" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-green">Email Us</p>
                <p className="font-black text-brand-green">support@easytask.com.bd</p>
              </div>
            </div>
            <div className="p-8 bg-brand-green/5 rounded-[2rem] border border-brand-green/10 space-y-4 group hover:bg-brand-green transition-all duration-500">
              <Phone className="w-8 h-8 text-brand-green group-hover:text-brand-yellow" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-yellow/60">Call Center</p>
                <p className="font-black text-brand-green group-hover:text-white">+880 1234 567 890</p>
              </div>
            </div>
          </div>

          <div className="relative h-64 bg-gray-100 rounded-[3rem] overflow-hidden shadow-inner flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-green/5 opacity-40" />
            <div className="z-10 text-center space-y-2">
              <MapPin className="w-10 h-10 text-brand-green mx-auto animate-bounce" />
              <p className="font-black text-brand-green">Uttara, Sector 4, Dhaka, Bangladesh</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Headquarters</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-50 space-y-10">
          <h2 className="text-3xl font-black text-brand-green text-center">Send a Message</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest ml-4">Full Name</label>
                <input type="text" className="w-full px-8 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all" placeholder="Rahim" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest ml-4">Subject</label>
                <input type="text" className="w-full px-8 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all" placeholder="Support" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 tracking-widest ml-4">Email Address</label>
              <input type="email" className="w-full px-8 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all" placeholder="rahim@gmail.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 tracking-widest ml-4">Message</label>
              <textarea className="w-full h-40 px-8 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all resize-none" placeholder="Tell us how we can help..." />
            </div>
            <button className="w-full bg-brand-green text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-brand-green/20 flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all">
              <span>Send Message</span>
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 left-10 z-[60]">
        <button className="w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all animate-float">
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
