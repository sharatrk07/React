// src/components/CommonComponents.tsx
import React from "react";
import Card from "./components/Card/Card";
import Color from "./components/Color";
import Counter from "./components/Counter/Counter";
import PasswordGenerator from "./components/PasswordGenerator";
import Converter from "./components/currencyConverter/Converter";

const App: React.FC = () => {
  const description =
    "The major canal, which links Varthur Lake and Bellanduru Amanikere Lake and runs along survey numbers 61 and 59, has been allegedly cut to make a road to connect Varthur.";

  return (
    <div style={{ padding: "2rem", background: "#ebe8e8" }}>
      <Counter />
      <Color />
      <PasswordGenerator />
      <Converter />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        <Card title="Project One" src="src/components/Card/images/1.jpeg" />
        <Card
          title="Project Two"
          src="src/components/Card/images/2.jpeg"
          description={description}
        />
        <Card
          title="Project Three"
          src="src/components/Card/images/3.jpeg"
          description={description}
        />
      </div>
    </div>
  );
};

export default App;