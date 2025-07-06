import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  { name: 'Profile', path: '/' },
  { name: 'Curriculum Vitae', path: '/curriculum-vitae' },
  { name: 'Working Papers', path: '/working-papers' },
  { name: 'Research Agenda', path: '/research' },
  { name: 'Miscellaneous', path: '/miscellaneous' },
];

function navigateToPath(path) {
  window.location.href = path;
}

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed top-0 left-0 h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white 
        transform transition-transform duration-300 ease-in-out z-50
        w-full lg:w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-700 relative">
            <button
              onClick={onClose}
              className="lg:hidden absolute top-4 right-4 p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 
                       focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50
                       transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold text-slate-100">Mauricio Ferraresi</h2>
            <p className="text-slate-300 text-sm mt-1">Sao Paulo School of Economics</p>
            <p className="text-slate-300 text-sm mt-1">mauricio.ferraresi@fgv.br</p>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                onClick={onClose}
                className={`w-full text-left block px-4 py-3 rounded-lg hover:bg-slate-700 hover:bg-opacity-50 
                         transition-all duration-200 group
                         focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50
                         ${location.pathname === section.path ? 'bg-slate-700' : ''}`}
              >
                <span className="font-medium text-slate-100 group-hover:text-white transition-colors">
                  {section.name}
                </span>
              </Link>
            ))}
          </nav>
          
          <div className="p-4 border-t border-slate-700">
            <p className="text-slate-300 text-xs text-center">
              © Mauricio Ferraresi
            </p>
          </div>
        </div>
      </aside>
    </>
  );
} 