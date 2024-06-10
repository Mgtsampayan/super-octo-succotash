import { useState, useEffect } from 'react';
import './Faculty.css';

const DocumentVerification = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch documents for verification
    fetch('/api/documents')
      .then((res) => res.json())
      .then(data => setDocuments(data));
  }, []);

  const handleVerify = (documentId) => {
    // Add document verification logic here
    fetch(`/api/documents/${documentId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        verified: true,
      }),
    })
      .then((res) => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
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
