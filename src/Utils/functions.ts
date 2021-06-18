import { baseURL } from './constants';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
});

export const getImageSrc = (path: string) => baseURL + path;

export const formatCurrency = (value: number) => {
  return currencyFormatter.format(value);
};
