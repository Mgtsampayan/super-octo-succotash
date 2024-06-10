import PropType from 'prop-types'
import { createContext, useState, useEffect } from 'react';
import { getRequestsService, createRequestService } from '../services/requestService';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);

  const getRequests = async () => {
    const response = await getRequestsService();
    setRequests(response.data);
  };

  const createRequest = async (request) => {
    await createRequestService(request);
    getRequests();
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <RequestContext.Provider value={{ requests, getRequests, createRequest }}>
      {children}
    </RequestContext.Provider>
  );
};

RequestProvider.propTypes = {
  children: PropType.node.isRequired,
};
