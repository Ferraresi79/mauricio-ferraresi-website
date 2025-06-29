import React from 'react';

export default function CurriculumVitae() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Curriculum Vitae</h1>
      
      {/* PDF Viewer */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <iframe
            src="/cv.pdf"
            width="100%"
            height="800px"
            className="border-0 rounded"
            title="Curriculum Vitae PDF"
          >
            <p>Your browser does not support PDFs. 
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                Download the PDF
              </a>
            </p>
          </iframe>
        </div>
      </div>

      {/* Curriculum Images - Side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src="/curriculum02.jpeg"
            alt="Curriculum Page 2"
            className="w-full h-auto rounded"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src="/curriculum01.jpeg"
            alt="Curriculum Page 1"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
} 