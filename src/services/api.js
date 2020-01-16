import axios from 'axos';

const api = axios.create({
    baseURL = process.env.REACT_APP_API_URL
});

export default api;