import React from 'react';
import SocialButtons from './SocialButtons';

const SHOW_SOCIAL_BUTTONS = false;

export default function Navbar({ onToggleSidebar }) {
  const isMainPage = window.location.pathname === '/';
  
  return (
    <nav className={`
      bg-white shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-30 
      lg:left-64
      ${isMainPage ? 'lg:hidden' : ''}
    `}>
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                   transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl">
          Mauricio Ferraresi
        </h1>
        
        {SHOW_SOCIAL_BUTTONS && (
          <div className="hidden lg:block">
            <SocialButtons />
          </div>
        )}
        
        {/* Spacer for mobile layout */}
        <div className="w-10 lg:hidden"></div>
      </div>
    </nav>
  );
} 