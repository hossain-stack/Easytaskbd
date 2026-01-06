
import React, { useState } from 'react';
import { Search, Clock, ChevronRight, Bookmark } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../constants';
import { Screen } from '../types';

const Blog: React.FC<{ onNavigate: (s: Screen) => void }> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Freelancing', 'Tax & Legal', 'Lead Generation', 'Influencer Marketing', 'Payments & Tips', 'Writing & Legal'];

  const filteredPosts = filter === 'All' ? MOCK_BLOG_POSTS : MOCK_BLOG_POSTS.filter(p => p.category === filter);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-brand-green text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow opacity-10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black">EasyTaskBD <span className="text-brand-yellow">Blog</span></h1>
            <p className="text-brand-yellow/60 font-black tracking-widest uppercase text-xs">Expert Guides, Tips & Success Stories</p>
          </div>
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-5 text-gray-400 group-hover:text-brand-yellow transition-colors" />
            <input 
              type="text" 
              placeholder="Search guides (e.g. VAT filing, Micro-influencer...)" 
              className="w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:bg-white/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                filter === cat ? 'bg-brand-green text-white shadow-xl shadow-brand-green/20 scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, i) => (
            <div 
              key={post.id} 
              className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-60 overflow-hidden relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-black text-brand-green uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8 space-y-6 flex flex-col h-[300px] justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="flex items-center space-x-1"><Clock className="w-3 h-3" /><span>{post.readTime}</span></span>
                  </div>
                  <h3 className="text-xl font-black text-brand-green leading-snug group-hover:text-brand-yellow transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <button onClick={() => onNavigate('BLOG_DETAIL')} className="flex items-center space-x-2 text-xs font-black text-brand-green group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <Bookmark className="w-4 h-4 text-gray-300 hover:text-brand-green cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
