import React, { useState, useEffect } from 'react';
import './Faculty.css';

const DocumentVerification = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch documents for verification
  }, []);

  const handleVerify = (documentId) => {
    // Add document verification logic here
  };

  return (
    <div className="document-verification">
      <h2>Document Verification</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            {document.studentCode} - {document.type}
            <button onClick={() => handleVerify(document.id)}>Verify</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentVerification;
