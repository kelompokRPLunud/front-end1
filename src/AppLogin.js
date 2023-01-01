import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function Login() {
    console.warn(username, password)
    let item = {username, password}
    let result = await fetch ('/v1/auth/login', {
        method : 'POST',  
        body : JSON.stringify(item)
    })

    result = await result.json()
    
  }

  return (
    <div className="App">
      <header className="App-header">

      <input
        name="name"
        type="text"
        placeholder="username"
        onChange={e => setUsername(e.target.value)}
      />

      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={Login}> Login</button>
      </header>
    </div>
  );
}

export default App;
