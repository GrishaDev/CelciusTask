const axios = require('axios');
const { coinApi } = require('../config');
const { HttpError } = require('../utils/Error');


const coinApiPrice = async (coin, base = 'USD', time = new Date().toISOString()) => {
    const header = coinApi.apiHeader;
    const headerValue = coinApi.apiKey;
    const options = { headers: {[header]:  headerValue}};
    const url = `${coinApi.baseUrl}${coinApi.priceUrl}/${coin}/${base}?time=${time}`;
    try {
        const response = await axios.get(url, options);
        return response.data;
    }
    catch(err) {
        const code = err.response.status || 500;
        const msg = err.response.data.error || 'Server error';
        throw new HttpError(code, msg);
    }
    
}

module.exports = coinApiPrice