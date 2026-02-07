
import React from 'react';
import { Scale, Award, Briefcase, Landmark, CheckCircle2, MessageCircle, ChevronRight, Star } from 'lucide-react';
import { PRACTICE_AREAS, BLOG_POSTS, TESTIMONIALS, OFFICE_DETAILS } from '../constants';
import PracticeCard from '../components/PracticeCard';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Law Library Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
              <Award className="h-4 w-4 mr-2" /> Excellence in Advocacy since 2010
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 serif leading-tight animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
              Trusted Legal Guidance with <span className="text-blue-400">Experience & Integrity.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
              Professional legal assistance for criminal, civil, family, property, and corporate matters in the Courts of New Delhi and NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20"
              >
                Book Free Consultation
              </button>
              <button 
                onClick={() => onNavigate('practice-areas')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-[#0a192f] transition-all"
              >
                View Practice Areas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-[#0a192f] serif mb-2">15+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Years of Practice</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-[#0a192f] serif mb-2">1200+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Cases Handled</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-[#0a192f] serif mb-2">95%</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Client Satisfaction</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-[#0a192f] serif mb-2">12+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Courts Practiced In</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Advocate Portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 text-white rounded-lg shadow-xl hidden lg:block">
                <p className="text-sm font-bold uppercase tracking-widest mb-2">Main Office</p>
                <p className="serif text-xl font-bold">New Delhi, High Court</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">About Vidhyaan Law</h2>
              <h3 className="text-4xl font-bold text-[#0a192f] serif mb-6 leading-tight">Championing Your Rights With Rigorous Legal Research</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded by Adv. Vikram Singhania, Vidhyaan Law Associates has established a reputation for excellence in the Indian legal landscape. We believe that justice is served when meticulous preparation meets strategic advocacy.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether it's a complex corporate dispute or a sensitive family matter, we provide empathetic yet authoritative guidance, ensuring our clients feel supported at every step of the legal process.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-600 h-5 w-5 mr-3" /> Practice across Supreme Court & High Courts
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-600 h-5 w-5 mr-3" /> Personalized attention to every brief
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-600 h-5 w-5 mr-3" /> Transparent fee structure with no hidden costs
                </li>
              </ul>
              <button 
                onClick={() => onNavigate('about')}
                className="inline-flex items-center font-bold text-[#0a192f] border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors"
              >
                Read More About Our Founder <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Practice Excellence</h2>
            <h3 className="text-4xl font-bold text-[#0a192f] serif mb-4">Our Practice Areas</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">Providing holistic legal services tailored to the diverse needs of individuals and corporations in modern India.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map(area => (
              <PracticeCard 
                key={area.id} 
                area={area} 
                onClick={() => onNavigate('practice-areas')} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">How We Work</h2>
            <h3 className="text-4xl font-bold serif">Our 3-Step Legal Process</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Consultation', text: 'Schedule a discovery call or meeting to discuss your case details and legal standing.' },
              { step: '02', title: 'Strategic Planning', text: 'We conduct rigorous legal research and draft a roadmap for litigation or resolution.' },
              { step: '03', title: 'Execution', text: 'Representation in court or negotiation table with a focus on achieving favorable results.' }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-slate-900/50 rounded-lg border border-slate-800">
                <span className="text-6xl font-black text-slate-800 absolute top-4 right-4 leading-none select-none">{item.step}</span>
                <h4 className="text-2xl font-bold mb-4 serif relative z-10">{item.title}</h4>
                <p className="text-slate-400 relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Client Feedback</h2>
            <h3 className="text-4xl font-bold text-[#0a192f] serif">Trusted By Clients Nationwide</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.content}"</p>
                <div>
                  <p className="font-bold text-[#0a192f]">{t.name}</p>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Scale className="absolute -bottom-20 -right-20 w-96 h-96 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white serif mb-8">Need Expert Legal Representation?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mb-10">
            Don't leave your legal matters to chance. Schedule a consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-md hover:bg-slate-100 transition-all shadow-xl"
            >
              Talk to an Advocate
            </button>
            <a 
              href={`https://wa.me/${OFFICE_DETAILS.whatsapp}`} 
              className="px-10 py-4 bg-[#25D366] text-white font-bold rounded-md hover:bg-green-600 transition-all shadow-xl flex items-center justify-center"
            >
              <MessageCircle className="mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
