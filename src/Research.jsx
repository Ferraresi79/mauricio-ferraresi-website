import React from 'react';
import research01 from '../public/research01.jpeg';
import research02 from '../public/research02.jpeg';

const bulletPoints = [
  "Embeddings of investment platforms",
  "Exposure market with granular investment platforms: Equilibrium and causality",
  "Forecasting exposure on investment platforms",
  "Opportunistic investment platforms"
];

export default function Research() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Research Agenda</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Research Content */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Research Projects</h2>
            <ul className="space-y-3 text-gray-700">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="space-y-6">

        <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={research02}
              alt="Research Image 2"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={research01}
              alt="Research Image 1"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 