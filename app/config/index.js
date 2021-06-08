const env = require('env-var');
require('./dotenv');

module.exports = {
    env: env.get('env').default('dev').asString(),
    webPort: env.get('PORT').required().asIntPositive(),
    coinApi: {
        baseUrl: 'https://rest.coinapi.io',
        priceUrl: '/v1/exchangerate',
        apiKey: env.get('COIN_API_KEY').required().asString(),
        apiHeader: 'X-CoinAPI-Key',
    }
}