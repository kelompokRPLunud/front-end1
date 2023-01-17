import React, { useState } from "react";
import style from "./AppLogin.module.css";
import pict1 from "../../images/pict1.svg";
import logo from "../../images/logo.svg";
import Google from "../../images/Vector.svg"
import Orsplit from "../../components/orsplit/Orsplit.jsx";
import { Link } from "react-router-dom";

function AppLogin() {
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
    <div className={style.block}>
      <div className={style.leftblock}>
          <img src={pict1} className={style.imgsize}></img>
      </div>
      <div className={style.rightblock}>
        <div className={style.textleft}>
          <img src={logo}></img>
          Auto Fill Your Certificate
        </div>
        <input className={style.inputfield}
          name="name"
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          />

        <input className={style.inputfield}
          name="password"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          />

      <button onClick={Login} className={style.btnsumbit}> Login</button>
      <Orsplit/>
      <div className={style.bottomdiv}>
        <button  className={style.btnsumbit2}><span><img src={Google} ></img></span><span> Login with Google</span></button>
        <span>Don't Have Account?<Link to="/signup" className={style.link}>Sign UP</Link></span>
      </div>
      </div>
    </div>
  );
}

export default AppLogin;
