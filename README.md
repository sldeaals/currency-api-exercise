### Setup
```bash
git clone https://github.com/DannyFeliz/currency-api-exercise.git && cd currency-api-exercise && npm install && npm run start
```

#### Create a component that consumes a currency exchange API based on a currency selected in a Dropdown.

#### Resources:
Currency Exchange API:
```js
https://v6.exchangerate-api.com/v6/72179b357c84d84fcb2c1f3d/latest/{CURRENCY_CODE}
```
<hr>

```js
// App.js
```
- Create a dropdown with the currencies EUR, USD, BRL, PEN, and ARS (put USD by default)
- Every time the dropdown value changes, the currency exchange API should hit the API again.

<hr>

```js
// ExchangeRates.js
```
- Fetch the exchange rates based on the given currency and display them using a list with the following format

currency_code: value
##### e.g.
```json
USD: 1.1745
CAD: 1.3331
```

- If the request is loading, you should display **"Loading..."**.
