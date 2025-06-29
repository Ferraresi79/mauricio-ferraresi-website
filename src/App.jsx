import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Profile from './Profile';
import CurriculumVitae from './CurriculumVitae';
import WorkingPapers from './WorkingPapers';
import Miscellaneous from './Miscellaneous';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const path = window.location.pathname;
  let MainContent;
  if (path === '/' || path === '') {
    MainContent = <Profile />;
  } else if (path === '/curriculum-vitae') {
    MainContent = <CurriculumVitae />;
  } else if (path === '/working-papers') {
    MainContent = <WorkingPapers />;
  } else if (path === '/miscellaneous') {
    MainContent = <Miscellaneous />;
  } else {
    MainContent = <div className="p-6">Page not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <main className="pt-16 lg:pt-16 lg:ml-64 min-h-screen">
        <div className="p-6">
          {MainContent}
        </div>
      </main>
    </div>
  );
} 