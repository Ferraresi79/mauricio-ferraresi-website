import React from 'react';

export default function PdfRenderer({ title, pdfUrl, downloadUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <iframe
        src={pdfUrl}
        width="100%"
        height="600px"
        className="border-0 rounded"
        title={`${title} PDF`}
      >
        <p>Your browser does not support PDFs. 
          <a href={downloadUrl || pdfUrl} target="_blank" rel="noopener noreferrer">
            Download the PDF
          </a>
        </p>
      </iframe>
    </div>
  );
} 