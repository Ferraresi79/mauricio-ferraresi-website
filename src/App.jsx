import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Profile from './Profile';
import CurriculumVitae from './CurriculumVitae';
import WorkingPapers from './WorkingPapers';
import Research from './Research';
import Miscellaneous from './Miscellaneous';

function PageNotFound() {
  return <div className="p-6">Page not found</div>;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router basename="/mauricio-ferraresi-website">
      <div className="min-h-screen bg-gray-50">
        <Navbar onToggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        <main className="pt-16 lg:pt-16 lg:ml-64 min-h-screen">
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
              <Route path="/working-papers" element={<WorkingPapers />} />
              <Route path="/research" element={<Research />} />
              <Route path="/miscellaneous" element={<Miscellaneous />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
} 