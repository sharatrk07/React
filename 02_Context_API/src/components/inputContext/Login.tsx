import { useState, useContext } from 'react'
import UserContext from "./context/UserContext.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext)

  // sending the data to the userContext store, using useContext() hook
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <h2>Login Page: </h2>
      <input
        type="text"
        placeholder="name..,"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"            "}
      <input
        type="text"
        placeholder="password..,"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {"            "}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
