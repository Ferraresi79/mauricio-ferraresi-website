import React from 'react';
import SocialButtons from './SocialButtons';

const sections = [
  { name: 'Profile', path: '/' },
  { name: 'Curriculum Vitae', path: '/curriculum-vitae' },
  { name: 'Working Papers', path: '/working-papers' },
  { name: 'Research', path: '/research' },
  { name: 'Miscellaneous', path: '/miscellaneous' },
];

function navigateToPath(path) {
  window.location.href = path;
}

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-12">
    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">Mauricio Ferraresi</h1>
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] gap-12">
      <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-2 flex-1">
        <div className="text-2xl md:text-3xl text-gray-900 font-normal">Job market paper for 2025-2026</div>
        
        <div className="hidden lg:block mt-6">
          <SocialButtons />
        </div>
      </div>
      <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] flex justify-center items-center flex-shrink-0">
        <img
          src="/profile.jpeg"
          alt="Mauricio Ferraresi"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
    
    <div className="lg:hidden w-full max-w-md">
      <SocialButtons className="flex-col sm:flex-row" />
    </div>
    
    <div className="lg:hidden w-full max-w-md">
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl p-6 space-y-3">
        <h3 className="text-xl font-bold text-slate-100 mb-4 text-center">Navigation</h3>
        {sections.map((section) => (
          <button
            key={section.path}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-700 hover:bg-opacity-50 
                     transition-all duration-200 group
                     focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
            onClick={() => navigateToPath(section.path)}
          >
            <span className="font-medium text-slate-100 group-hover:text-white transition-colors">
              {section.name}
            </span>
          </button>
        ))}
      </div>
    </div>
    </div>
  );
} 