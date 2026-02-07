
import React from 'react';
import { 
  Gavel, 
  Users, 
  Home, 
  Building2, 
  ShieldCheck, 
  FileText, 
  Scale 
} from 'lucide-react';
import { PracticeArea, BlogPost, FaqItem, Testimonial } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'criminal',
    title: 'Criminal Law',
    description: 'Expert representation in bail matters, criminal trials, and appeals before High Courts and Supreme Court. We handle white-collar crimes and cyber offenses.',
    icon: 'Gavel'
  },
  {
    id: 'civil',
    title: 'Civil Law',
    description: 'Comprehensive litigation for recovery suits, injunctions, and contractual disputes. We ensure your civil rights are protected in every judicial forum.',
    icon: 'Scale'
  },
  {
    id: 'family',
    title: 'Family & Divorce Law',
    description: 'Sensitive handling of divorce, child custody, maintenance, and domestic violence cases. Prioritizing amicable resolution through mediation when possible.',
    icon: 'Users'
  },
  {
    id: 'property',
    title: 'Property & Real Estate',
    description: 'Drafting sale deeds, title verification, RERA disputes, and ancestral property litigation. Ensuring secure investments for our clients.',
    icon: 'Home'
  },
  {
    id: 'corporate',
    title: 'Corporate & Business',
    description: 'Legal advisory for startups, SME compliance, partnership disputes, and complex commercial agreements to safeguard business interests.',
    icon: 'Building2'
  },
  {
    id: 'consumer',
    title: 'Consumer Rights',
    description: 'Protecting consumers against unfair trade practices and deficiency in services before District, State, and National Commissions.',
    icon: 'ShieldCheck'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding RERA: A Guide for Homebuyers in India',
    excerpt: 'Navigating the Real Estate Regulatory Authority rules and how it protects your investments from builder delays.',
    date: 'Oct 15, 2023',
    category: 'Property Law'
  },
  {
    id: '2',
    title: 'Grounds for Divorce Under Hindu Marriage Act',
    excerpt: 'A clear explanation of legal grounds including cruelty, desertion, and mutual consent for Indian couples.',
    date: 'Nov 02, 2023',
    category: 'Family Law'
  },
  {
    id: '3',
    title: 'Your Rights During a Police Stop and Search',
    excerpt: 'Know the procedural requirements and constitutional protections every Indian citizen should be aware of.',
    date: 'Dec 10, 2023',
    category: 'Criminal Law'
  },
  {
    id: '4',
    title: 'Cheque Bounce Cases: Section 138 Explained',
    excerpt: 'The legal process of recovery and the penalties involved when a cheque is dishonored in business transactions.',
    date: 'Jan 05, 2024',
    category: 'Civil Law'
  },
  {
    id: '5',
    title: 'Importance of a Will: Why You Need One Today',
    excerpt: 'Debunking myths about inheritance and why professional drafting of a Will is essential for asset protection.',
    date: 'Feb 12, 2024',
    category: 'General'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What should I bring for the first consultation?",
    answer: "Please bring all relevant documents, notices, previous court orders, and a brief chronological summary of the facts related to your case."
  },
  {
    question: "How long does a typical civil case take in India?",
    answer: "The duration varies significantly based on the complexity and court pendency. We focus on procedural efficiency to minimize delays whenever possible."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer secure video consultations via Zoom or Google Meet for clients who cannot visit our office in person."
  },
  {
    question: "What are your fee structures?",
    answer: "Fees depend on the nature of the case—whether it is a fixed retainer, per-hearing appearance fee, or drafting charges. We provide transparency in billing."
  },
  {
    question: "Is my case information kept confidential?",
    answer: "Absolutely. Attorney-client privilege is a cornerstone of our practice. All information shared is strictly confidential as per legal ethics."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "The firm handled my property dispute with extreme professionalism. Their attention to detail in title verification saved me from a major loss.",
    rating: 5
  },
  {
    name: "Anita Sharma",
    role: "Professional",
    content: "In a very stressful divorce case, the advocate was not just a legal guide but a source of strength. Highly recommend their family law services.",
    rating: 5
  },
  {
    name: "Suresh Mehra",
    role: "Startup Founder",
    content: "Vidhyaan Law Associates helped us with our initial partnership agreements. Clear, concise, and very knowledgeable about Indian corporate laws.",
    rating: 4
  }
];

export const OFFICE_DETAILS = {
  address: "Suite 402, High Court Chambers, MG Road, New Delhi - 110001",
  phone: "+91 98765 43210",
  whatsapp: "9876543210",
  email: "contact@vidhyaanlaw.com",
  timings: "Mon - Sat: 10:00 AM - 7:00 PM"
};
