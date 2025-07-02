import React from 'react';
import curriculum01 from '../public/curriculum01.jpeg';
import curriculum02 from '../public/curriculum02.jpeg';

export default function CurriculumVitae() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Curriculum Vitae</h1>
      
      {/* PDF Viewer */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <iframe
            src="https://docs.google.com/gview?url=https://www.dropbox.com/scl/fi/u17knrh4hspxqc145x8p1/CV.pdf?rlkey=29fedm3ta6tw5bqfp6lsn4ylk%26e=1%26st=9psvdvi9%26dl=1&embedded=true"
            width="100%"
            height="800px"
            className="border-0 rounded"
            title="Curriculum Vitae PDF"
          >
            <p>Your browser does not support PDFs. 
              <a href="https://www.dropbox.com/scl/fo/72p8jkhgzumyj3ibv7a5f/AJ6Os6NA3rByJPJ9itL89f0?dl=1&e=1&preview=CV.pdf&rlkey=vh13prjnfng1ptlsqh5syv6y9&st=e5mqhlfu" target="_blank" rel="noopener noreferrer">
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
            src={curriculum02}
            alt="Curriculum Image 2"
            className="w-full h-auto rounded"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={curriculum01}
            alt="Curriculum Image 1"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
} 