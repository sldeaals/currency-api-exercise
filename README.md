Create a component that consumes a currency exchange API based on a currency selected in a Dropdown.

Resources:
Currency Exchange API:
https://v6.exchangerate-api.com/v6/72179b357c84d84fcb2c1f3d/latest/{CURRENCY CODE}

// App.js

1. Create a dropdown with the currencies USD, EUR and ARG (put USD by default)
2. Show the currency that is selected in the dropdown.
3. Every time the dropdown value changes, the currency exchange API should hit the API again.

// ExchangeRates.js

1. Fetch the exchange rates based on the given currency and display them on the screen using a list with the following format

• currency_code: value

e.g.

• USD: 1.1785
• CAD: 1.3303
...

2. Do not display the currency being used to query the API in the list.
   If the request is being executed, you should display "Loading...".
3. If an error occurs during the request, you should display "An error has occurred..." and log the error in the console.
