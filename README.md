### Setup
```bash
git clone https://github.com/sldeaals/currency-api-exercise.git && cd currency-api-exercise && npm install && npm run start
```

#### Create a component that consumes a currency exchange API based on a currency selected in a Dropdown.

#### Resources:
Currency Exchange API:
```js
https://v6.exchangerate-api.com/v6/71d0d9072451bae18657a9ec/latest/{CURRENCY_CODE}
```
<hr>

```js
// App.js
```
- Create a dropdown with the currencies EUR, USD, BRL, PEN, and ARS (put USD by default)

<hr>

```js
// ExchangeRates.js
```
- Fetch the exchange rates based on the selected currency and display them using a list with the following format

currency_code: value
##### e.g.
```json
1. USD: 1.1745
2. CAD: 1.3331
```

- If the request is loading, you should display **"Loading..."**.
