import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const DocumentRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [documentType, setDocumentType] = useState('');

  useEffect(() => {
    // Fetch document requests for the logged-in student
    if (user) {
      axios.get(`/api/document-requests/${user.uid}`)
        .then(response => setRequests(response.data))
        .catch(error => console.error(error));
    }
  }, [user]);

  const handleRequest = () => {
    axios.post('/api/document-requests', {
      student_id: user.uid,
      document_type: documentType,
    }).then(response => {
      setRequests([...requests, response.data]);
    }).catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Document Requests</h2>
      <div>
        <label>Document Type:</label>
        <input type="text" value={documentType} onChange={(e) => setDocumentType(e.target.value)} />
        <button onClick={handleRequest}>Request Document</button>
      </div>
      <ul>
        {requests.map(request => (
          <li key={request.request_id}>{request.document_type} - {request.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentRequest;
