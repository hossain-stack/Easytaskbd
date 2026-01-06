
import React from 'react';
import { Filter, Search, Clock, Zap, Target } from 'lucide-react';
import { MOCK_MICROJOBS } from '../constants';
import { Microjob } from '../types';

const Microjobs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Microjob Marketplace</h1>
          <p className="text-gray-500">Complete small tasks, get paid instantly. High speed, no interview required.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 bg-brand-yellow text-brand-green font-bold rounded-xl shadow-lg hover:scale-105 transition-all">
            Post New Job
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6 sticky top-28">
            <h3 className="font-bold flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Refine Search</span>
            </h3>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Category</p>
              {['All Tasks', 'Social Media', 'Content Review', 'App Testing', 'Web Traffic'].map(cat => (
                <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border-2 border-gray-200 rounded group-hover:border-brand-green transition-colors" />
                  <span className="text-sm text-gray-600 group-hover:text-brand-green">{cat}</span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Price Range</p>
              <input type="range" className="w-full accent-brand-green" />
              <div className="flex justify-between text-xs text-gray-400">
                <span>৳2</span>
                <span>৳500</span>
              </div>
            </div>

            <button className="w-full py-2 bg-gray-50 text-brand-green text-sm font-bold rounded-lg hover:bg-brand-yellow transition-colors">
              Reset All
            </button>
          </div>
        </aside>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center space-x-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search jobs by name or keyword..." 
                className="w-full pl-12 pr-4 py-3 bg-transparent text-sm focus:outline-none"
              />
            </div>
            <button className="px-6 py-2 bg-brand-green text-white rounded-xl text-sm font-bold hover:bg-brand-green/90 transition-colors">
              Search
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_MICROJOBS.map((job, i) => (
              <MicrojobItem key={job.id} job={job} index={i} />
            ))}
          </div>

          <div className="pt-8 flex justify-center">
            <button className="px-8 py-3 bg-white border border-gray-100 rounded-xl font-bold text-gray-500 hover:text-brand-green hover:border-brand-yellow transition-all">
              Load More Tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fix: Use React.FC to define props, which correctly handles standard React props like 'key'
const MicrojobItem: React.FC<{ job: Microjob; index: number }> = ({ job, index }) => {
  return (
    <div 
      className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10 flex flex-col h-full space-y-4">
        <div className="flex justify-between items-start">
          <div className="px-2 py-1 bg-brand-green/5 text-brand-green text-[10px] font-bold rounded uppercase">
            {job.category}
          </div>
          <span className="text-xl font-bold text-brand-green group-hover:text-brand-green/70">{job.price}</span>
        </div>

        <h3 className="font-bold text-lg leading-tight group-hover:text-brand-green transition-colors">
          {job.title}
        </h3>

        <div className="flex items-center space-x-6 text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{job.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Target className="w-3 h-3" />
            <span>{job.spots} spots left</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
            <span>Progress</span>
            <span>{Math.round((job.totalSpots - job.spots) / job.totalSpots * 100)}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-yellow transition-all duration-1000 ease-out"
              style={{ width: `${(job.totalSpots - job.spots) / job.totalSpots * 100}%` }}
            />
          </div>
        </div>

        <div className="pt-2 flex items-center space-x-3">
          <button className="flex-1 bg-brand-green text-white py-3 rounded-xl font-bold text-sm shadow-sm group-hover:bg-brand-green group-hover:shadow-brand-green/20 transition-all">
            Start Job
          </button>
          <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-brand-green transition-colors">
            <Zap className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Microjobs;
