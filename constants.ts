
import { FirmContent } from './types';

export const SITE_CONTENT: FirmContent = {
  name: "Alexander J. Sterling",
  tagline: "Dedicated Advocacy. Exceptional Results.",
  heroTitle: "Superior Legal Counsel.",
  heroSubtitle: "Providing sophisticated legal solutions for complex challenges. I am committed to protecting your interests with rigorous attention to detail and unwavering integrity.",
  aboutTitle: "A Legacy of Legal Distinction",
  aboutContent: "With over two decades of focused experience in high-stakes litigation and complex advisory, I have built a reputation for providing strategic and empathetic advocacy. My practice is founded on the belief that every client deserves a lawyer who is not only a formidable opponent in the courtroom but also a trusted advisor in the boardroom.",
  aboutStats: [
    { label: "Cases Won", value: "950+" },
    { label: "Expert Awards", value: "15" },
    { label: "Years Experience", value: "22" },
    { label: "Success Rate", value: "99%" }
  ],
  services: [
    {
      id: "realestate",
      title: "Real Estate Law",
      description: "Managing high-value property portfolios, complex zoning disputes, and institutional development transactions with tactical foresight.",
      icon: "fa-solid fa-building-columns"
    },
    {
      id: "civil",
      title: "Civil Litigation",
      description: "Navigating intricate multi-jurisdictional disputes with a focus on strategic mediation and decisive courtroom victory.",
      icon: "fa-solid fa-scale-balanced"
    },
    {
      id: "criminal",
      title: "Criminal Defense",
      description: "Defending professional reputations and individual liberties in high-profile white-collar and specialized criminal matters.",
      icon: "fa-solid fa-gavel"
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      description: "Securing the future of innovation through aggressive trademark enforcement, patent litigation, and trade secret protection.",
      icon: "fa-solid fa-lightbulb"
    },
    {
      id: "corporate",
      title: "Corporate Law",
      description: "Serving as a strategic architect for corporate governance, mergers, acquisitions, and private equity structures.",
      icon: "fa-solid fa-briefcase"
    },
    {
      id: "family",
      title: "Family Law",
      description: "Providing discreet and sophisticated counsel for high-net-worth matrimonial matters and generational wealth planning.",
      icon: "fa-solid fa-users"
    }
  ],
  testimonials: [
    {
      name: "Marcus Vane",
      position: "CEO, Vane Global Capital",
      content: "Alexander's approach is surgical. He navigates complexity with an ease that only comes from deep expertise and a relentless work ethic.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Julianne Moretti",
      position: "Director, Moretti Estates",
      content: "When the stakes were highest for our real estate development, Mr. Sterling was the only voice of reason and strategy that mattered.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "David Chen",
      position: "Founder, Zenith Technologies",
      content: "His defense of our intellectual property was a masterclass in legal strategy. I trust Alexander with my most critical business assets.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ],
  contactInfo: {
    address: "One Liberty Plaza, Suite 4200, New York, NY 10006",
    phone: "+1 (212) 555-0198",
    email: "office@sterling-law.com",
    hours: "Consultations by Appointment"
  },
  socialLinks: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  }
};
