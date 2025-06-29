import React from 'react';
import PdfRenderer from './components/PdfRenderer';

const bulletPoints = [
  "Researcher in quantitative asset management and factor models",
  "Interested in philosophy of science and epistemology",
  "Former astronomer"
];

export default function Miscellaneous() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Miscellaneous</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Bullet Points and Thesis */}
        <div className="space-y-8">
          {/* Bullet Points */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h2>
            <ul className="space-y-3 text-gray-700">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Thesis Paper */}
          <PdfRenderer 
            title="Essays on Risk in Asset Management"
            pdfUrl="https://www.dropbox.com/scl/fi/bj6kmdd5sfgzn6nlhu819/Mauricio_Thesis.pdf?rlkey=92d064isyyw99rp9bqysl3f97&e=1&st=899nky09&raw=1"
            downloadUrl="https://www.dropbox.com/scl/fi/bj6kmdd5sfgzn6nlhu819/Mauricio_Thesis.pdf?rlkey=92d064isyyw99rp9bqysl3f97&e=1&st=899nky09&dl=1"
          />
        </div>

        {/* Right Column - Images */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="/miscelleneous01.jpeg"
              alt="Miscellaneous Image 1"
              className="w-full h-auto rounded"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="/miscelleneous02.jpeg"
              alt="Miscellaneous Image 2"
              className="w-full h-auto rounded"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="/miscelleneous03.jpeg"
              alt="Miscellaneous Image 3"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 