import httpClient from './httpClient';

export const getDealers = (params) => {
  return httpClient.get('/goods', { params });
};
