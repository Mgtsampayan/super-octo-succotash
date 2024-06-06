import React, { useEffect, useState } from 'react';
import './Student.css';

const RequestStatus = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch request status from the server
    }, []);

    return (
        <div className="request-status">
            <h2>Request Status</h2>
            <ul>
                {requests.map((request) => (
                    <li key={request.id}>{request.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default RequestStatus;
