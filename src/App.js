import React, { useState, useEffect } from "react";
import "./styles.css";

function CurrencyConverter() {
  const [rate, setRate] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("UAH");
  const [amount, setAmount] = useState(1);
  const [convertAmount, setConvertAmount] = useState(0);
  const access_key = 'JBirTbz2NQ9oliNwO04yVPByZo8587yw';

  useEffect(() => {
    const fetchCurrencyRate = async () => {
        const response = await fetch(
              `https://api.exchangeratesapi.io/v1/latest?access_key=${access_key}&base=${from}&symbols=${to}`
           );
        const data = await response.json();
        setRate(data.rates[to]);
      };

    fetchCurrencyRate();
  }, [from, to]);

  useEffect(() => {
    setConvertAmount(amount * rate);
  }, [amount, rate]);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="app">
      <header>
        <h1>Currency Converter</h1>
        <p>
          1 {from} = {rate} {to}
        </p>
      </header>
      <main>
        <div>
          <label htmlFor="from-currency">From:</label>
          <input
            id="from-currency"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Введіть значення"
          />
          <select
            id="from-currency-select"
            value={from}
            onChange={handleFromChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
        <div>
          <label htmlFor="to-currency">To:</label>
          <input
            id="to-currency"
            type="number"
            value={convertAmount}
            disabled
          />
          <select id="to-currency-select" value={to} onChange={handleToChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
      </main>
    </div>
  );
}

export default CurrencyConverter;
