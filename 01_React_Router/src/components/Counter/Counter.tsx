// Counter.tsx
import { useState } from "react";
import Buttons from "./Buttons";

function Counter() {
  const [value, setValue] = useState(0);

  const handleIncrement = () =>
    setValue((prev) => (prev < 25 ? prev + 1 : prev));
  const handleDecrement = () =>
    setValue((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <>
      <div
        style={{
          backgroundColor: "lightgray",
          paddingTop: "10px",
          paddingLeft: "25px",
          borderRadius: "10px",
        }}
      >
        <h2>Counter: {value}</h2>
        <Buttons
          buttonName="Increment"
          onClick={handleIncrement}
          value={value}
        />
        <Buttons
          buttonName="Decrement"
          onClick={handleDecrement}
          value={value}
        />
      </div>
      <br />
    </>
  );
}

export default Counter;
