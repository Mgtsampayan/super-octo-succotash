import React, { createContext, useState, useEffect } from 'react';
import { fetchRequests, createRequest, updateRequest } from '../services/requestService';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const loadRequests = async () => {
      const requestsData = await fetchRequests();
      setRequests(requestsData);
    };
    loadRequests();
  }, []);

  const addRequest = async (request) => {
    const newRequest = await createRequest(request);
    setRequests((prevRequests) => [...prevRequests, newRequest]);
  };

  const editRequest = async (id, updatedRequest) => {
    const newRequest = await updateRequest(id, updatedRequest);
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? newRequest : request
      )
    );
  };

  return (
    <RequestContext.Provider value={{ requests, addRequest, editRequest }}>
      {children}
    </RequestContext.Provider>
  );
};
