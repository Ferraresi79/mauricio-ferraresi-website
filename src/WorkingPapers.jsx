import React from 'react';
import PdfRenderer from './components/PdfRenderer';

export default function WorkingPapers() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Working Papers</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - PDFs */}
        <div className="space-y-8">
          <PdfRenderer 
            title="Replicant Investment Platforms (Job Market Paper)"
            pdfUrl="https://www.dropbox.com/scl/fi/m1uu0nyyyqyb12mcwfn97/Replicant_Investment_Platforms.pdf?rlkey=ffzslt64u3lbta0rknxqxbvqz&e=1&st=b4zjnn92&raw=1"
            downloadUrl="https://www.dropbox.com/scl/fi/m1uu0nyyyqyb12mcwfn97/Replicant_Investment_Platforms.pdf?rlkey=ffzslt64u3lbta0rknxqxbvqz&e=1&st=b4zjnn92&dl=1"
          />
          <PdfRenderer 
            title="Amplification and Performance from Exposure based Strategies"
            pdfUrl="https://www.dropbox.com/scl/fi/dar2cutl6vofqycjmuff3/Amplification_and_Performance_from_Exposure_based_Strategies.pdf?rlkey=xob4e8mjz2dmqlxu4yybarbqw&st=4z89uzdh&raw=1"
            downloadUrl="https://www.dropbox.com/scl/fi/dar2cutl6vofqycjmuff3/Amplification_and_Performance_from_Exposure_based_Strategies.pdf?rlkey=xob4e8mjz2dmqlxu4yybarbqw&st=4z89uzdh&dl=1"
          />
        </div>

        {/* Right Column - Working Paper Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="bg-white rounded-lg shadow-lg p-4 h-fit">
            <img
              src="/workingpaper01.jpeg"
              alt="Working Papers"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 