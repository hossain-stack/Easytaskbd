
import React, { useState } from 'react';
import { X, Send, Paperclip, DollarSign, Briefcase } from 'lucide-react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  sellerName: string;
  onPlaceOrder: (price?: number) => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose, sellerName, onPlaceOrder }) => {
  const [messages, setMessages] = useState([
    { text: `Hi! How can I help you today regarding your request?`, sender: 'seller' }
  ]);
  const [input, setInput] = useState('');
  const [negotiatedPrice, setNegotiatedPrice] = useState<number>(1500);
  const [showPriceAdjust, setShowPriceAdjust] = useState(false);

  if (!isOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'buyer' }]);
    setInput('');
  };

  const handlePriceProposal = () => {
    setMessages([...messages, { 
      text: `Proposed a new price: ৳${negotiatedPrice}. Please review.`, 
      sender: 'buyer' 
    }]);
    setShowPriceAdjust(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center bg-brand-green/20 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
        <div className="bg-brand-green p-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src="https://picsum.photos/seed/rahim/40/40" className="w-10 h-10 rounded-full border-2 border-brand-yellow" alt="Seller" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-brand-green"></div>
            </div>
            <div>
              <p className="font-bold text-sm">{sellerName}</p>
              <p className="text-[10px] text-brand-yellow">Active Now</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                m.sender === 'buyer' 
                  ? 'bg-brand-green text-white rounded-tr-none' 
                  : 'bg-white text-brand-green shadow-sm rounded-tl-none border border-gray-100'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {showPriceAdjust && (
          <div className="p-4 bg-brand-yellow/10 border-t border-brand-yellow/30 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-brand-green uppercase">Adjust Proposed Rate</span>
              <button onClick={() => setShowPriceAdjust(false)} className="text-gray-400"><X className="w-4 h-4" /></button>
            </div>
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-2.5 text-gray-400 font-bold">৳</span>
                <input 
                  type="number" 
                  value={negotiatedPrice}
                  onChange={(e) => setNegotiatedPrice(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
              <button 
                onClick={handlePriceProposal}
                className="px-6 py-2 bg-brand-green text-white rounded-xl text-sm font-bold"
              >
                Propose
              </button>
            </div>
          </div>
        )}

        <div className="p-4 border-t bg-white space-y-4">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setShowPriceAdjust(!showPriceAdjust)}
              className="p-2 bg-gray-100 rounded-full text-brand-green hover:bg-brand-yellow transition-colors"
            >
              <DollarSign className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-yellow"
            />
            <button className="p-2 text-gray-400 hover:text-brand-green transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button 
              onClick={handleSend}
              className="bg-brand-green p-2 rounded-full text-brand-yellow hover:scale-110 transition-transform"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          <button 
            onClick={() => onPlaceOrder(negotiatedPrice)}
            className="w-full bg-brand-yellow py-3 rounded-xl font-bold text-brand-green hover:shadow-lg flex items-center justify-center space-x-2 transition-all"
          >
            <Briefcase className="w-4 h-4" />
            <span>Direct Hire for ৳{negotiatedPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
