import React from 'react';
import PdfRenderer from './components/PdfRenderer';
import miscelleneous01 from '/miscelleneous01.jpeg';
import miscelleneous02 from '/miscelleneous02.jpeg';
import miscelleneous03 from '/miscelleneous03.jpeg';

const bulletPoints = [
  "Researcher in demand-based asset pricing and financial intermediation based on fund networks",
  "Interested in philosophy of science and epistemology",
  "Former astronomer"
];

// External Links Button Component
function ExternalLinkButton({ title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white rounded-3xl hover:bg-slate-700 
               transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50
               shadow-lg font-medium"
    >
      {title}
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}

// External links data
const externalLinks = [
  { title: "Data and Code", link: "https://www.dropbox.com/scl/fo/lfr2ulaleizdbj30zzgum/APqx5CCihHW1BhJ1yQ0Z4gI/data_and_code?dl=0&rlkey=dfxq70bpw0qwiewjw6r75r3xm&subfolder_nav_tracking=1" },
  { title: "Drafts", link: "https://www.dropbox.com/scl/fo/lfr2ulaleizdbj30zzgum/AMAKH6UZ3hHTsuUkfsxckjs/drafts?dl=0&rlkey=dfxq70bpw0qwiewjw6r75r3xm&subfolder_nav_tracking=1" },
  { title: "Presentations", link: "https://www.dropbox.com/scl/fo/lfr2ulaleizdbj30zzgum/AExY4FTazAVoDs_ojQTEYu8/presentations?dl=0&rlkey=dfxq70bpw0qwiewjw6r75r3xm&subfolder_nav_tracking=1" },
  { title: "Reports and Projects", link: "https://www.dropbox.com/scl/fo/lfr2ulaleizdbj30zzgum/APlkbZZzeQooRpW5lWrXDpE/reports_and_projects?dl=0&rlkey=dfxq70bpw0qwiewjw6r75r3xm&subfolder_nav_tracking=1" }
];

export default function Miscellaneous() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Miscellaneous</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Bullet Points, External Links, and Thesis */}
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

          {/* External Links */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">External Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {externalLinks.map((linkData, index) => (
                <ExternalLinkButton 
                  key={index}
                  title={linkData.title}
                  link={linkData.link}
                />
              ))}
            </div>
          </div>

          {/* Thesis Paper
          <PdfRenderer 
            title="Essays on Risk in Asset Management"
            pdfUrl="https://www.dropbox.com/scl/fi/bj6kmdd5sfgzn6nlhu819/Mauricio_Thesis.pdf?rlkey=92d064isyyw99rp9bqysl3f97&e=1&st=899nky09&raw=1"
            downloadUrl="https://www.dropbox.com/scl/fi/bj6kmdd5sfgzn6nlhu819/Mauricio_Thesis.pdf?rlkey=92d064isyyw99rp9bqysl3f97&e=1&st=899nky09&dl=1"
          /> */}
        </div>

        {/* Right Column - Images */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={miscelleneous01}
              alt="Miscellaneous Image 1"
              className="w-full h-auto rounded"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={miscelleneous02}
              alt="Miscellaneous Image 2"
              className="w-full h-auto rounded"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={miscelleneous03}
              alt="Miscellaneous Image 3"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 