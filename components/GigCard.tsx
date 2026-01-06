
import React from 'react';
import { Star } from 'lucide-react';
import { Gig } from '../types';

interface GigCardProps {
  gig: Gig;
  onClick: () => void;
}

const GigCard: React.FC<GigCardProps> = ({ gig, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={gig.image} 
          alt={gig.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 px-2 py-1 bg-brand-green/90 text-white text-[10px] font-bold rounded">
          {gig.category.toUpperCase()}
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center space-x-2">
          <img src={gig.seller.avatar} className="w-6 h-6 rounded-full" alt={gig.seller.name} />
          <span className="text-xs font-medium text-gray-600 group-hover:text-brand-green">{gig.seller.name}</span>
        </div>
        <h3 className="font-semibold text-sm line-clamp-2 leading-tight min-h-[2.5rem]">
          {gig.title}
        </h3>
        <div className="flex items-center space-x-1 text-xs">
          <Star className="w-3 h-3 fill-brand-yellow text-brand-yellow" />
          <span className="font-bold">{gig.seller.rating}</span>
          <span className="text-gray-400">({gig.seller.reviews})</span>
        </div>
        <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
          <span className="text-xs text-gray-400">Starting at</span>
          <span className="font-bold text-brand-green">{gig.tiers.basic.price}</span>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
