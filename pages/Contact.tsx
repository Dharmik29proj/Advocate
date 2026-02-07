
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { OFFICE_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="bg-[#0a192f] text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold serif mb-4">Contact Our Office</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Get professional legal assistance in New Delhi. Reach out to schedule an appointment or ask a general query.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#0a192f] serif mb-6">Our Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-1">Office Address</p>
                    <p className="text-slate-800 leading-relaxed">{OFFICE_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-slate-800 text-lg font-bold">{OFFICE_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-1">Email Address</p>
                    <p className="text-slate-800">{OFFICE_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4 text-blue-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-500 uppercase tracking-widest mb-1">Office Hours</p>
                    <p className="text-slate-800">{OFFICE_DETAILS.timings}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h4 className="font-bold text-[#0a192f] serif mb-4">Visit Note</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prior appointment is mandatory for physical consultations to ensure quality time for your brief. We strictly follow the Bar Council of India standards.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 relative">
              {submitted ? (
                <div className="text-center py-20 animate-in zoom-in duration-500">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0a192f] serif mb-4">Request Received</h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Thank you for reaching out. An associate will review your query and contact you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#0a192f] serif mb-2">Send a Message</h3>
                  <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                        <input 
                          type="text" required 
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="tel" required 
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email (Optional)</label>
                        <input 
                          type="email"
                          placeholder="email@example.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Case Category</label>
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                          <option>Criminal Law</option>
                          <option>Civil Litigation</option>
                          <option>Family / Divorce</option>
                          <option>Property Dispute</option>
                          <option>Corporate / Commercial</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">How can we help?</label>
                      <textarea 
                        rows={5} required
                        placeholder="Briefly describe your legal situation..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      ></textarea>
                    </div>

                    <p className="text-xs text-slate-400 italic">
                      * By submitting this form, you acknowledge that this does not create an advocate-client relationship.
                    </p>

                    <button 
                      type="submit"
                      className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center group"
                    >
                      Request Consultation <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] bg-slate-200 rounded-lg overflow-hidden border-4 border-white shadow-lg">
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
            <MapPin size={48} className="mb-4 text-blue-600 opacity-50" />
            <p className="font-bold serif text-xl">Interactive Map Interface</p>
            <p className="text-sm">MG Road, New Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
