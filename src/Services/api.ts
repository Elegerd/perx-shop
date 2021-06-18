import { Good } from 'Types/common';
import httpClient from './httpClient';

export const getGoods = params => {
  return httpClient.get<Good[]>('/goods', { params });
};
