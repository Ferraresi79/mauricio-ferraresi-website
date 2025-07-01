import React from 'react';

const bulletPoints = [
  "Embeddings of investment platforms",
  "Exposure market with granular investment platforms: Equilibrium and causality",
  "Forecasting exposure on investment platforms (joint work with Laura Simonsen Leal)",
  "Opportunistic investment platforms behavior (joint work with Giovanni Di Pietra)"
];

export default function Research() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Research Agenda</h1>
      
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
  );
} 