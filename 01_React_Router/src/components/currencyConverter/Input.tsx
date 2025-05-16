// Input.tsx
import React from "react";

interface InputProps {
  label: string;
  amount: number;
  onAmountChange: (value: number) => void;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
  selectedCurrency: string;
  amountDisable?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectedCurrency,
  amountDisable = false,
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
    <label style={{ fontWeight: 500 }}>{label}</label>
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      disabled={amountDisable}
      onChange={(e) => !amountDisable && onAmountChange(Number(e.target.value))}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
      }}
    />
    <select
      value={selectedCurrency}
      onChange={(e) => onCurrencyChange(e.target.value)}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
      }}
    >
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency}>
          {currency.toUpperCase()}
        </option>
      ))}
    </select>
  </div>
);

export default Input;