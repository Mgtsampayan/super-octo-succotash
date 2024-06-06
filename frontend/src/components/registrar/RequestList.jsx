import React, { useEffect, useState } from 'react';
import './Registrar.css';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch request list from the server
  }, []);

  return (
    <div className="request-list">
      <h2>Request List</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>{request.studentCode} - {request.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
