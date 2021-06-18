import axios from 'axios';
import { baseURL } from 'Utils/constants';

const httpClient = axios.create({
  baseURL: `${baseURL}/api`,
});

export default httpClient;
