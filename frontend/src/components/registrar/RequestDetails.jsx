import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Registrar.css';

const RequestDetails = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    // Fetch request details from the server by id
  }, [id]);

  return (
    <div className="request-details">
      <h2>Request Details</h2>
      {request ? (
        <div>
          <p>Student Code: {request.studentCode}</p>
          <p>Status: {request.status}</p>
          {/* Add more details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RequestDetails;
