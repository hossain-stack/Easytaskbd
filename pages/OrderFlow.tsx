
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Loader2, CreditCard } from 'lucide-react';
import { Screen } from '../types';

interface OrderFlowProps {
  onNavigate: (screen: Screen) => void;
  isConfirmation?: boolean;
}

const OrderFlow: React.FC<OrderFlowProps> = ({ onNavigate, isConfirmation }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isConfirmation) {
      // Simulate confetti or some celebration if possible
    }
  }, [isConfirmation]);

  const handleDeposit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNavigate('ORDER_CONFIRMATION');
    }, 2000);
  };

  if (isConfirmation) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8 animate-in zoom-in-95 duration-500">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-brand-yellow/20 rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle className="w-16 h-16 text-brand-green" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Order Placed Successfully!</h1>
            <p className="text-gray-500">
              Your deposit is safely held in Escrow. Rahim Ahmed has been notified and will start working on your Tax Form Fillup immediately.
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm text-left space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Order ID</span>
              <span className="font-bold text-brand-green">#ET-BD-89231</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Delivery Date</span>
              <span className="font-bold">Oct 24, 2024</span>
            </div>
            <div className="pt-4 border-t border-gray-50">
              <button 
                onClick={() => onNavigate('HOME')}
                className="w-full bg-brand-green text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-green/90 transition-all"
              >
                <span>Track Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button onClick={() => onNavigate('HOME')} className="text-brand-green font-bold text-sm hover:underline">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Deposit & Hire</h1>
        <p className="text-gray-500">Choose your payment method to start the order.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Local Gateways</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border-2 border-brand-yellow bg-brand-yellow/5 rounded-2xl flex flex-col items-center space-y-2 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white font-black text-xs">bKash</div>
                <span className="text-xs font-bold">bKash Wallet</span>
              </button>
              <button className="p-4 border border-gray-100 rounded-2xl flex flex-col items-center space-y-2 transition-all hover:border-brand-yellow hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-black text-xs">Nagad</div>
                <span className="text-xs font-bold">Nagad Pay</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">International</p>
            <div className="space-y-4">
              <button className="w-full p-4 border border-gray-100 rounded-2xl flex items-center justify-between transition-all hover:border-brand-yellow hover:shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold">Credit / Debit Card</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>
              <button className="w-full p-4 border border-gray-100 rounded-2xl flex items-center justify-between transition-all hover:border-brand-yellow hover:shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold italic">PayPal</div>
                  <span className="text-sm font-bold">PayPal Checkout</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-6 h-fit">
          <h3 className="font-bold text-xl">Order Summary</h3>
          <div className="space-y-4 border-b border-gray-200 pb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Service</span>
              <span className="font-bold text-right">Tax Form Fillup (Standard)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Service Fee</span>
              <span className="font-bold">৳50</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold">৳1500</span>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="font-bold text-lg">Total Amount</span>
            <span className="font-bold text-2xl text-brand-green">৳1550</span>
          </div>

          <div className="space-y-4 pt-4">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-brand-green" defaultChecked />
              <span className="text-xs text-gray-400 leading-relaxed">
                I agree to the EasyTaskBD terms and acknowledge that funds will be held in Escrow until delivery.
              </span>
            </label>
            <button 
              onClick={handleDeposit}
              disabled={loading}
              className="w-full bg-brand-yellow py-4 rounded-xl font-bold text-brand-green flex items-center justify-center space-x-3 shadow-xl hover:shadow-brand-yellow/30 active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Complete Deposit</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFlow;
