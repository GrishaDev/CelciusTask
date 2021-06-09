const coinApiPrice = require('../coinApi');
class Controller {
    static async getCoinPrice(req, res) {
        const { coin } = req.params;
        const { time, base } = req.query;
        const coinData = await coinApiPrice(coin, base, time)
        res.send(coinData);
    }
}

module.exports = Controller