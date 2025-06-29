import React from 'react';

export default function Miscellaneous() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Miscellaneous</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Bullet Points */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>Research interests in economic development and policy analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>Experience with quantitative research methodologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>Proficient in statistical software and data analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>Active participation in academic conferences and workshops</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>Collaborative research projects with international institutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>Teaching experience in undergraduate economics courses</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>Published work in peer-reviewed academic journals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>Recipient of academic scholarships and research grants</span>
            </li>
          </ul>
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