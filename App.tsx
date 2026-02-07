
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SEO from './components/SEO';
import { MessageCircle, X, Info } from 'lucide-react';
import { FAQS, BLOG_POSTS, PRACTICE_AREAS } from './constants';
import PracticeCard from './components/PracticeCard';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenLegalDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleDisclaimerAccept = () => {
    localStorage.setItem('hasSeenLegalDisclaimer', 'true');
    setShowDisclaimer(false);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <SEO title="Best Advocate in New Delhi" description="Professional legal services for criminal, civil, and family law in Delhi High Court. 15+ years experience." />
            <Home onNavigate={setActivePage} />
          </>
        );
      case 'practice-areas':
        return (
          <div className="pt-24 pb-24">
            <SEO title="Our Practice Areas" description="Expertise in Criminal, Civil, Property, and Family Law in India." />
            <div className="bg-[#0a192f] text-white py-16 mb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold serif mb-4">Practice Areas</h1>
                <p className="text-slate-400 text-lg max-w-2xl">Specialized legal representation for individuals and businesses across India's premier judicial forums.</p>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRACTICE_AREAS.map(area => (
                  <PracticeCard key={area.id} area={area} onClick={() => {}} />
                ))}
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="pt-24 pb-24">
             <SEO title="About Adv. Vikram Singhania" description="Meet the lead advocate with over 15 years of litigation experience." />
             <div className="bg-[#0a192f] text-white py-16 mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl md:text-5xl font-bold serif mb-4">About the Advocate</h1>
                </div>
             </div>
             <div className="max-w-4xl mx-auto px-4">
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-xl font-medium text-slate-700 leading-relaxed mb-8">
                    Adv. Vikram Singhania is a seasoned litigator with a career spanning over 15 years, specializing in Constitutional and Criminal matters before the High Court of Delhi and the Supreme Court of India.
                  </p>
                  <h3 className="text-2xl font-bold serif text-[#0a192f] mt-12 mb-6">Education & Credentials</h3>
                  <ul className="list-none space-y-4 mb-12">
                    <li className="flex items-start bg-white p-4 border-l-4 border-blue-600 shadow-sm">
                      <div>
                        <p className="font-bold">Bachelor of Laws (LL.B.)</p>
                        <p className="text-sm text-slate-500 italic">Faculty of Law, University of Delhi</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 border-l-4 border-blue-600 shadow-sm">
                      <div>
                        <p className="font-bold">Bar Council Registration</p>
                        <p className="text-sm text-slate-500 italic">Member of the Bar Council of Delhi (BCI No. D/XX/2010)</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="text-2xl font-bold serif text-[#0a192f] mt-12 mb-6">Our Philosophy</h3>
                  <p className="text-slate-600 mb-6">
                    We believe that law is not just a profession but a calling to serve justice. Our approach combines traditional legal wisdom with modern technological tools to provide the most efficient advocacy for our clients.
                  </p>
                </div>
             </div>
          </div>
        );
      case 'contact':
        return (
          <>
            <SEO title="Book Consultation" description="Contact our MG Road, New Delhi office for legal appointments." />
            <Contact />
          </>
        );
      case 'blog':
        return (
          <div className="pt-24 pb-24">
            <SEO title="Legal Articles & Insights" description="Stay updated with latest legal developments in Indian Law." />
            <div className="bg-[#0a192f] text-white py-16 mb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold serif mb-4">Legal Insights</h1>
                <p className="text-slate-400 text-lg max-w-2xl">Articles and guides explaining the complexities of the Indian legal system in simple English.</p>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-4 serif leading-tight text-[#0a192f]">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-6">{post.excerpt}</p>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                    <button className="text-xs font-bold text-blue-800 hover:underline">READ ARTICLE</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'faq':
        return (
          <div className="pt-24 pb-24">
            <SEO title="Legal FAQ" description="Common questions about hiring an advocate and legal procedures in India." />
            <div className="max-w-3xl mx-auto px-4 mt-20">
              <h1 className="text-4xl font-bold serif mb-12 text-center text-[#0a192f]">Frequently Asked Questions</h1>
              <div className="space-y-6">
                {FAQS.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-lg mb-3 serif text-blue-900">{item.question}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'privacy':
      case 'disclaimer':
        return (
          <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold serif mb-8">{activePage === 'privacy' ? 'Privacy Policy' : 'Legal Disclaimer'}</h1>
            <div className="prose prose-slate max-w-none bg-white p-10 border rounded-lg shadow-sm">
              <p className="mb-4">As per the rules of the Bar Council of India, Advocates are not permitted to solicit work or advertise. This website is meant for providing information to the user at their own request.</p>
              <p className="mb-4">The information provided on this website is for general informational purposes only and should not be construed as legal advice. Use of this website does not create an advocate-client relationship between you and Vidhyaan Law Associates.</p>
              <p className="mb-4">We do not guarantee the accuracy, completeness, or timeliness of the information. Any decision taken based on the content of this website is at the sole discretion of the user.</p>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={setActivePage} />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
          title="WhatsApp Us"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a192f]/80 backdrop-blur-sm p-4">
          <div className="bg-white max-w-xl w-full rounded-lg shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="p-8">
              <div className="flex items-center text-blue-600 mb-6">
                <Info size={32} className="mr-3" />
                <h2 className="text-2xl font-bold serif text-[#0a192f]">Legal Disclaimer</h2>
              </div>
              <div className="text-slate-600 space-y-4 text-sm leading-relaxed mb-8">
                <p>
                  The Bar Council of India rules prohibit law firms from advertising and soliciting work via the public domain. This website is designed solely for information purposes and not for the purpose of advertising.
                </p>
                <p>
                  By clicking on <strong>'I Agree'</strong> below, the user acknowledges the following:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The user wishes to gain more information about the firm for their own knowledge and use.</li>
                  <li>There has been no advertisement, personal communication, solicitation, or inducement of any sort whatsoever from us or any of our members.</li>
                  <li>The information provided on the website is not legal advice and does not create an advocate-client relationship.</li>
                </ul>
              </div>
              <button 
                onClick={handleDisclaimerAccept}
                className="w-full py-4 bg-[#0a192f] text-white font-bold rounded hover:bg-slate-800 transition-all uppercase tracking-widest text-sm"
              >
                I Agree & Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
