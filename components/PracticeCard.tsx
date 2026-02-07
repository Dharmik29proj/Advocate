
import React from 'react';
import { Gavel, Users, Home, Building2, ShieldCheck, Scale, ArrowRight } from 'lucide-react';
import { PracticeArea } from '../types';

const iconMap: Record<string, any> = {
  Gavel,
  Users,
  Home,
  Building2,
  ShieldCheck,
  Scale
};

interface PracticeCardProps {
  area: PracticeArea;
  onClick: () => void;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ area, onClick }) => {
  const Icon = iconMap[area.icon] || Scale;

  return (
    <div 
      className="group bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        <Icon className="h-8 w-8 text-blue-900 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-4 serif text-[#0a192f]">{area.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {area.description}
      </p>
      <button className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-blue-800 hover:text-blue-600">
        Learn More <ArrowRight className="ml-2 h-3 w-3" />
      </button>
    </div>
  );
};

export default PracticeCard;
