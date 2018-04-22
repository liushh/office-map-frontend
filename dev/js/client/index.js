import axios from 'axios';

const client = axios.create({ baseURL: 'http://127.0.0.1:8000/api' });
client.defaults.headers['Content-Type'] = 'application/json';

export {
  client
};
