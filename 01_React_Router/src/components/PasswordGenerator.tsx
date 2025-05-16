import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?';

  const [length, setLength] = useState(8);
  const [numallow, setNumallow] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallow) str += "0123456789";
    if (charallow) str += "!@#$%^&*()_+-=[]{}|;:,.<>/?";
    for (let i = 0; i <= length; i++) {
      const char: number = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, numallow, charallow]);
  // In useCallback dependencies, we include used methods or variables

  useEffect(() => {
    passwordGenerator();
  }, [length, numallow, charallow, passwordGenerator]);
  // If any changes in useEffect dependencies, then the function will re-render

  const copyToClipBoard = useCallback(() => {
    if (passRef.current && "select" in passRef.current) {
      (passRef.current as HTMLInputElement).select();
      window.navigator.clipboard.writeText(password);
      // passRef.current?.setSelectionRange(0, 3);
    }
  }, [password]);

  return (
    <>
      <br />
      <div
        style={{
          backgroundColor: "lightyellow",
          paddingLeft: "25px",
          paddingTop: "10px",
          paddingBottom: "20px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "black" }}>Password Generator</h1>
        <div>
          <input
            type="text"
            value={password}
            placeholder="password"
            style={{ borderRadius: "6px", margin: "8px", width: "350px" }}
            readOnly
            ref={passRef}
          />
          <button
            type="button"
            onClick={copyToClipBoard}
            style={{ borderRadius: "5px", margin: "5px" }}
            className="btn btn-primary"
          >
            Copy
          </button>
        </div>
        <div>
          <label>Length: {length}</label>
          <br />
          <input
            type="range"
            min={5}
            max={25}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        <div>
          <label style={{ margin: "5px" }}>
            Include Numbers: {numallow ? "Yes" : "No"}
          </label>
          <input
            type="checkbox"
            checked={numallow}
            onChange={() => setNumallow((prev) => !prev)}
          />
        </div>
        <div>
          <label style={{ margin: "5px" }}>
            Include Characters: {charallow ? "Yes" : "No"}
          </label>
          <input
            type="checkbox"
            checked={charallow}
            onChange={() => setCharallow((prev) => !prev)}
          />
        </div>
      </div>
      <br />
    </>
  );
}

export default PasswordGenerator;
