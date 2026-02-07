
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}
