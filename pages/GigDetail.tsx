
import React, { useState } from 'react';
import { Star, Clock, Check, MessageSquare, ChevronRight, MapPin, Play, Award, Zap } from 'lucide-react';
import { Gig, Screen } from '../types';

interface GigDetailProps {
  gig: Gig;
  onNavigate: (screen: Screen) => void;
  onOpenChat: () => void;
}

const GigDetail: React.FC<GigDetailProps> = ({ gig, onNavigate, onOpenChat }) => {
  const [activeTier, setActiveTier] = useState<'basic' | 'standard' | 'premium'>('standard');
  const [activeImage, setActiveImage] = useState(gig.image);
  const currentTier = gig.tiers[activeTier];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
        <nav className="flex items-center space-x-2 text-xs text-gray-400 font-medium">
          <span className="hover:text-brand-green cursor-pointer" onClick={() => onNavigate('HOME')}>EasyTaskBD</span>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-brand-green cursor-pointer">{gig.category}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-green">{gig.title}</span>
        </nav>

        <h1 className="text-4xl font-bold leading-tight">{gig.title}</h1>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src={gig.seller.avatar} className="w-14 h-14 rounded-full border-2 border-brand-yellow" alt={gig.seller.name} />
              {gig.seller.isVerifiedExpert && (
                <div className="absolute -bottom-1 -right-1 bg-brand-yellow p-1 rounded-full border-2 border-white">
                  <Award className="w-3 h-3 text-brand-green" />
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg hover:underline cursor-pointer" onClick={() => onNavigate('SELLER_PROFILE')}>
                  {gig.seller.name}
                </span>
                {gig.seller.isVerifiedExpert && (
                  <span className="px-2 py-0.5 bg-brand-yellow/20 text-brand-green text-[10px] font-bold rounded">VERIFIED EXPERT</span>
                )}
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Star className="w-3 h-3 fill-brand-yellow text-brand-yellow mr-1" />
                  <span className="font-bold">{gig.seller.rating}</span>
                </div>
                <span className="text-gray-400">({gig.seller.reviews} reviews)</span>
                <div className="flex items-center space-x-1 text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{gig.location || 'Bangladesh'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media Gallery */}
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video relative group bg-gray-100">
            {activeImage === 'video' ? (
              <iframe 
                className="w-full h-full" 
                src={gig.videoUrl} 
                title="Gig Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            ) : (
              <img src={activeImage} className="w-full h-full object-cover" alt="Gig Main" />
            )}
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveImage(gig.image)}
              className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImage === gig.image ? 'border-brand-green scale-105' : 'border-transparent'}`}
            >
              <img src={gig.image} className="w-full h-full object-cover" />
            </button>
            {gig.images?.map((img, i) => (
              <button 
                key={i}
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-brand-green scale-105' : 'border-transparent'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
            {gig.videoUrl && (
              <button 
                onClick={() => setActiveImage('video')}
                className={`flex-shrink-0 w-24 h-16 rounded-xl bg-brand-green flex items-center justify-center text-brand-yellow border-2 transition-all ${activeImage === 'video' ? 'border-brand-yellow scale-105' : 'border-transparent'}`}
              >
                <Play className="w-6 h-6 fill-brand-yellow" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Success Rate</p>
            <p className="text-xl font-bold text-brand-green">{gig.seller.successRate}%</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Avg. Response</p>
            <p className="text-xl font-bold text-brand-green">{gig.seller.responseTime}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Completed</p>
            <p className="text-xl font-bold text-brand-green">{gig.seller.completedOrders}+</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Queue</p>
            <p className="text-xl font-bold text-brand-green">12 Orders</p>
          </div>
        </div>

        <div className="space-y-6 pt-8">
          <h2 className="text-2xl font-bold border-b border-gray-100 pb-4">About This Service</h2>
          <div className="text-gray-600 leading-relaxed whitespace-pre-line space-y-4">
            <p>{gig.description}</p>
            <p><strong>Why Choose Me?</strong><br />
            - Local expertise with global standards.<br />
            - 100% manual work with documented results.<br />
            - Post-delivery support for up to 30 days.</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="sticky top-28 bg-white border border-gray-100 rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="flex">
            {(['basic', 'standard', 'premium'] as const).map(tier => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`flex-1 py-5 text-[10px] font-bold uppercase transition-all border-b-2 ${
                  activeTier === tier ? 'border-brand-green text-brand-green bg-white' : 'border-transparent text-gray-400 bg-gray-50'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          <div className="p-8 space-y-8">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-xl text-gray-800">{currentTier.name} Package</h3>
              <span className="text-3xl font-bold text-brand-green">{currentTier.price}</span>
            </div>

            <div className="flex items-center space-x-6 text-sm font-medium border-y border-gray-50 py-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{currentTier.delivery} Delivery</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                <span>Priority</span>
              </div>
            </div>

            <ul className="space-y-4">
              {currentTier.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 bg-green-50 text-brand-green rounded-full p-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 pt-4">
              <button 
                onClick={() => onNavigate('DEPOSIT')}
                className="w-full bg-brand-yellow py-5 rounded-2xl font-bold text-brand-green shadow-xl shadow-brand-yellow/20 hover:scale-[1.02] transition-all active:scale-95"
              >
                Order Now ({currentTier.price})
              </button>
              <button 
                onClick={onOpenChat}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border border-gray-100 font-bold text-gray-500 hover:text-brand-green hover:border-brand-yellow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Custom Requirements?</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetail;
