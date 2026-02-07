
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  position: string;
  content: string;
  image: string;
}

export interface FirmContent {
  name: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutContent: string;
  aboutStats: Array<{ label: string; value: string }>;
  services: Service[];
  testimonials: Testimonial[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  socialLinks: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
}
