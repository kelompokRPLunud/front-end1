import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function AppSignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function SignUp() {
    console.warn(username, email, password)
    let item = {username, email, password}
    let result = await fetch ('/v1/auth/SignUp', {
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
        name="email"
        type="email"
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={SignUp}> Sign Up</button>
      </header>
    </div>
  );
}

export default AppSignUp;
