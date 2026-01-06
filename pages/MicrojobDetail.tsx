
import React, { useState } from 'react';
import { ArrowLeft, Clock, Target, CheckCircle, Upload, Send, Loader2, Bookmark } from 'lucide-react';
import { Microjob, Screen } from '../types';

interface MicrojobDetailProps {
  job: Microjob;
  onNavigate: (screen: Screen) => void;
}

const MicrojobDetail: React.FC<MicrojobDetailProps> = ({ job, onNavigate }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [holding, setHolding] = useState(false);
  const [held, setHeld] = useState(false);
  const [proofText, setProofText] = useState('');

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleHold = () => {
    setHolding(true);
    setTimeout(() => {
      setHolding(false);
      setHeld(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center space-y-6 animate-in zoom-in-95">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 animate-bounce shadow-lg">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold">Proof Submitted!</h2>
        <p className="text-gray-500 text-lg">The buyer will review your work shortly. Once approved, ৳{job.price} will be added to your wallet.</p>
        <button 
          onClick={() => onNavigate('MICROJOBS')}
          className="px-10 py-4 bg-brand-green text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all"
        >
          Back to Marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => onNavigate('MICROJOBS')}
          className="flex items-center space-x-2 text-sm text-gray-400 hover:text-brand-green transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Market</span>
        </button>
        {held ? (
          <div className="flex items-center space-x-2 text-brand-green font-bold text-sm bg-brand-yellow/20 px-4 py-2 rounded-xl">
            <Clock className="w-4 h-4" />
            <span>Job Held: 59:59 remaining</span>
          </div>
        ) : (
          <button 
            onClick={handleHold}
            disabled={holding}
            className="flex items-center space-x-2 text-sm font-bold bg-gray-100 px-4 py-2 rounded-xl hover:bg-brand-yellow hover:text-brand-green transition-all disabled:opacity-50"
          >
            {holding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bookmark className="w-4 h-4" />}
            <span>Hold Job (৳{job.holdFee || 2})</span>
          </button>
        )}
      </div>

      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-2xl space-y-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-block px-4 py-1.5 bg-brand-green/5 text-brand-green text-[10px] font-black rounded-full uppercase tracking-widest">
              {job.category}
            </div>
            <h1 className="text-4xl font-black text-brand-green">{job.title}</h1>
          </div>
          <div className="text-right p-6 bg-brand-green rounded-3xl text-white shadow-xl shadow-brand-green/10 min-w-[150px]">
            <p className="text-[10px] text-brand-yellow font-black uppercase tracking-widest mb-1">Earn</p>
            <p className="text-4xl font-black">{job.price}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-y border-gray-50 py-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Est. Time</p>
              <p className="text-lg font-black">{job.duration}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Availability</p>
              <p className="text-lg font-black">{job.spots} / {job.totalSpots}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Task Overview</h3>
          <p className="text-gray-500 leading-relaxed text-lg">{job.description}</p>
        </div>

        <div className="space-y-6 bg-brand-green/5 p-8 rounded-3xl border border-brand-green/10">
          <h3 className="text-xl font-bold flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-brand-green" />
            <span>Precise Instructions</span>
          </h3>
          <ul className="space-y-4">
            {job.instructions?.map((step, i) => (
              <li key={i} className="flex items-start space-x-4 text-sm md:text-base text-gray-700 font-medium">
                <span className="w-8 h-8 bg-white border-2 border-brand-green text-brand-green rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-black shadow-sm">
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-10 border-t border-gray-100 space-y-8">
          <h3 className="text-2xl font-bold">Submit Completed Work</h3>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-black text-gray-800 uppercase tracking-widest">Proof Summary (Text)</label>
              <textarea 
                value={proofText}
                onChange={(e) => setProofText(e.target.value)}
                className="w-full h-40 p-6 bg-gray-50 border border-gray-100 rounded-3xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-yellow/30 transition-all resize-none"
                placeholder="Paste the URL of your post, your username, or the unique code shown at the end..."
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-gray-800 uppercase tracking-widest">Visual Evidence (Screenshot)</label>
              <div className="border-4 border-dashed border-gray-100 rounded-[2rem] p-12 flex flex-col items-center justify-center space-y-4 hover:border-brand-yellow hover:bg-brand-yellow/5 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-brand-green shadow-sm transition-all">
                  <Upload className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-500">Drag & Drop Proof</p>
                  <p className="text-xs text-gray-400 mt-1">High-quality JPG or PNG accepted</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={submitting || !proofText.trim()}
            className="w-full bg-brand-green text-white py-6 rounded-[1.5rem] font-bold text-xl flex items-center justify-center space-x-4 shadow-2xl shadow-brand-green/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>Verifying Proof...</span>
              </>
            ) : (
              <span>Finalize & Submit Job</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MicrojobDetail;
