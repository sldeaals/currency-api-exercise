### Setup

```bash
git clone --single-branch --branch vue https://github.com/DannyFeliz/currency-api-exercise.git && cd currency-api-exercise && npm install && npm run serve
```

#### Create a component that consumes a currency exchange API based on a currency selected in a Dropdown.

#### Resources:

Currency Exchange API:

```js
https://v6.exchangerate-api.com/v6/e7d0a9353ebf1a256297b4d5/latest/{CURRENCY_CODE}
```

<hr>

```js
// App.vue
```

- Create a dropdown with the currencies EUR, USD, BRL, PEN, and ARS (select USD by default)
- Every time the dropdown value changes, the currency exchange API should hit the API again.

<hr>

```js
// ExchangeRates.vue
```

- Fetch the exchange rates based on the given currency and display them using a list with the following format

currency_code: value

##### e.g.

```json
1. USD: 1.1745
2. CAD: 1.3331
3. EUR: 1.0025
```
- Omit the current selected currency from the list.
- If the request is loading, you should display **"Loading..."**.
- If there is an error you should display **"Something wrong happened, please try later..."** and log the error into the console.
