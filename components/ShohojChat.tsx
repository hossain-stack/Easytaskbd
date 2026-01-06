
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Search, MapPin } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { MOCK_GIGS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const ShohojChat: React.FC<{ onRecommend: (id: string) => void }> = ({ onRecommend }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string; recommendations?: any[] }[]>([
    { role: 'bot', content: "Hi! I'm Shohoj, your AI assistant. I can help you find experts, answer FAQs, or recommend the best freelancers in Mirpur, Dhanmondi, or anywhere in BD. What are you looking for?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const prompt = `You are "Shohoj", a helpful AI assistant for EasyTaskBD, a freelancer platform in Bangladesh. 
      Users will ask to find people or about the site. 
      Available Freelancers: ${JSON.stringify(MOCK_GIGS.map(g => ({ id: g.id, title: g.title, seller: g.seller.name, category: g.category, location: g.location })))}
      User query: "${userMsg}"
      If they want to hire someone (e.g. content creator in Mirpur 12), suggest relevant freelancers from the list.
      Always be polite, speak clearly, and focus on the BD market. 
      Limit your response to a few helpful sentences.`;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });

      const responseText = result.text || "I'm sorry, I'm having trouble connecting. How else can I help?";
      
      // Basic recommendation logic based on keywords
      const lowerInput = userMsg.toLowerCase();
      const recs = MOCK_GIGS.filter(g => 
        lowerInput.includes(g.category.toLowerCase()) || 
        (g.subCategory && lowerInput.includes(g.subCategory.toLowerCase())) ||
        (g.location && lowerInput.includes(g.location.toLowerCase()))
      );

      setMessages(prev => [...prev, { role: 'bot', content: responseText, recommendations: recs }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', content: "Oops, something went wrong. Try again!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-brand-green text-brand-yellow rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all animate-float"
        >
          <Bot className="w-8 h-8" />
        </button>
      ) : (
        <div className="w-96 h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-10">
          <div className="bg-brand-green p-4 flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-yellow/20 rounded-xl">
                <Bot className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <p className="font-bold">Shohoj AI</p>
                <p className="text-[10px] text-brand-yellow">Intelligent Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} flex-col items-${m.role === 'user' ? 'end' : 'start'} gap-2`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-brand-green text-white rounded-tr-none' : 'bg-white text-brand-green shadow-sm rounded-tl-none border border-gray-100'
                }`}>
                  {m.content}
                </div>
                {m.recommendations && m.recommendations.length > 0 && (
                  <div className="w-full space-y-2 mt-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase ml-2">Recommended Experts</p>
                    <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                      {m.recommendations.map(gig => (
                        <div 
                          key={gig.id} 
                          onClick={() => onRecommend(gig.id)}
                          className="flex-shrink-0 w-40 bg-white p-3 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:border-brand-yellow transition-all"
                        >
                          <p className="font-bold text-[11px] line-clamp-1">{gig.title}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            <span className="text-[10px] text-gray-500">{gig.location}</span>
                          </div>
                          <p className="text-brand-green font-bold text-xs mt-2">{gig.tiers.basic.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-green" />
                  <span className="text-xs text-gray-400 font-medium">Shohoj is thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-2xl px-3 py-1">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about mirpur editors..."
                className="flex-1 bg-transparent py-3 text-sm focus:outline-none"
              />
              <button 
                onClick={handleSend}
                className="bg-brand-green p-2 rounded-xl text-brand-yellow hover:scale-105 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShohojChat;
