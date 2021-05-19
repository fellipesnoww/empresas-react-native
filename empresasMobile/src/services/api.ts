import axios from 'axios';

const api = axios.create({
  baseURL: 'http://empresas.ioasys.com.br',
});

export default api;
