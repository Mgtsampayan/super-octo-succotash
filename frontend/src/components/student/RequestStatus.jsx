import { useEffect, useContext } from 'react';
import { RequestContext } from '../../context/RequestContext';

const RequestStatus = () => {
    const { requests, getRequests } = useContext(RequestContext);

    useEffect(() => {
        getRequests();
    }, [getRequests]); // Pag mali pwede paki tanggal

    return (
        <div>
            <h1>Request Status</h1>
            <ul>
                {requests.map((request) => (
                    <li key={request.id}>
                        {request.documentType}: {request.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RequestStatus;
