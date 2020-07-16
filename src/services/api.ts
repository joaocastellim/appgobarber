import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.31.189.44:3333',
});

export default api;

// 10.0.2.2
