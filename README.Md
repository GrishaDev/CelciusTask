# Install

create .env with example of .env.example

get API key here: https://www.coinapi.io/pricing?apikey

or just use the one i attached together with task link in whatsapp
```bash
npm install
npm start
```
## Usage

navigate to GET /api/price/:coin

coin example is BTC, the default rate will be in USD.
you can specify different time and different base rate with
time and base queries.

example:

```
GET /api/price/BTC?base=ETH&time=2021-06-01T10:47:00.0000000Z
```

not giving time query will use current time, and not giving base query will default to USD.