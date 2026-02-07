
import React, { useState } from 'react';
import { SITE_CONTENT } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-legal-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-legal-brown text-xs font-bold tracking-[0.5em] uppercase block mb-6">Contact</span>
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-8">Secure Your <br />Consultation</h2>
            <p className="text-gray-600 mb-16 text-lg font-light leading-relaxed">
              Legal matters require immediate and expert attention. Contact my office directly or fill out the form for a confidential callback.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-10 h-[1px] bg-legal-brown"></div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-[0.3em] mb-2">Private Office</h4>
                  <p className="text-gray-700 font-light">{SITE_CONTENT.contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-10 h-[1px] bg-legal-brown"></div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-[0.3em] mb-2">Direct Line</h4>
                  <p className="text-gray-700 font-light">{SITE_CONTENT.contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-10 h-[1px] bg-legal-brown"></div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-[0.3em] mb-2">Electronic Mail</h4>
                  <p className="text-gray-700 font-light">{SITE_CONTENT.contactInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-2xl border-t-8 border-legal-brown">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fadeIn">
                <div className="w-16 h-16 bg-legal-cream text-legal-brown flex items-center justify-center rounded-full mb-8">
                  <i className="fa-solid fa-check text-2xl"></i>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Request Received</h3>
                <p className="text-gray-500 font-light">My office will contact you shortly to schedule your confidential consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Identity</label>
                  <input 
                    required
                    placeholder="Full Name"
                    type="text" 
                    className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-legal-brown transition-colors text-lg font-light"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Communication</label>
                    <input 
                      required
                      placeholder="Email Address"
                      type="email" 
                      className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-legal-brown transition-colors text-lg font-light"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Contact Number</label>
                    <input 
                      placeholder="Phone"
                      type="tel" 
                      className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-legal-brown transition-colors text-lg font-light"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Brief Detail</label>
                  <textarea 
                    required
                    placeholder="Describe your legal matter..."
                    rows={4}
                    className="w-full border-b border-gray-200 py-4 focus:outline-none focus:border-legal-brown transition-colors text-lg font-light resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-legal-brown text-white py-6 font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#3d2d21] transition-all shadow-xl shadow-legal-brown/20"
                >
                  Confirm Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
