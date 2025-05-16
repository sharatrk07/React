// Converter.tsx
import React, { useState } from "react";
import useCurrencyConverter from "./CurrencyConverter";
import Input from "./Input";

const Converter: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("usd");
  const [toCurrency, setToCurrency] = useState<string>("inr");
  const rates: Record<string, number> = useCurrencyConverter(fromCurrency);
  const options = Object.keys(rates);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();
    const rate = rates[toCurrency] ?? 0;
    setConvertedAmount(amount * rate);
  };

  return (
    <form
      onSubmit={handleConvert}
      style={{ maxWidth: "400px", margin: "0 auto", padding: "24px", border: "1px solid #eee", borderRadius: "8px", backgroundColor: "lightcyan"}}
    >
          <h1>Currency Converter</h1>
      <Input
        label="From"
        amount={Math.floor(amount)}
        currencyOptions={options}
        selectedCurrency={fromCurrency}
        onAmountChange={(val) => setAmount(val)}
        onCurrencyChange={(currency) => setFromCurrency(currency)}
      />

      <button
        type="button"
        onClick={handleSwap}
        style={{
          marginBottom: "16px",
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#e4abf5",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Swap
      </button>

      <Input
        label="To"
        amount={Number(convertedAmount.toFixed(2))}
        currencyOptions={options}
        selectedCurrency={toCurrency}
        onAmountChange={(val) => setConvertedAmount(val)}
        onCurrencyChange={(currency) => setToCurrency(currency)}
        amountDisable
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#28a745",
          color: "#fff",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
      </button>

      <div style={{ marginTop: "16px", fontSize: "1.1rem", fontWeight: 500 }}>
        Result: {convertedAmount.toFixed(2)} {toCurrency.toUpperCase()}
      </div>
    </form>
  );
};

export default Converter;
