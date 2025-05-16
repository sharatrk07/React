// useCurrencyConverter.ts
import { useState, useEffect } from "react";

function useCurrencyConverter(currency: string): Record<string, number> {
  const [rates, setRates] = useState<Record<string, number>>({});
  const lowerCurrency = currency.toLowerCase();
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lowerCurrency}.json`;

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setRates(data[lowerCurrency] ?? {});
      })
      .catch(err => {
        console.error("Failed to fetch currency rates:", err);
        setRates({});
      });
  }, [lowerCurrency, url]);

  return rates;
}

export default useCurrencyConverter;