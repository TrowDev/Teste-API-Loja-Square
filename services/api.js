// import axios from 'axios';
const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.lojasquare.com.br//v1',
    headers: {
        'AUTHORIZATION': 'KEY-API'
    }
});

module.exports = api;
// export default api;