import React, { useState } from "react";
import style from "./AppSignUp.module.css";
import pict1 from "../../images/pict1.svg";
import logo from "../../images/logo.svg";
import Google from "../../images/Vector.svg";
import { Link } from "react-router-dom";
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
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
            />

          <input className={style.inputfield}
            name="email"
            type="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
            />

          <input className={style.inputfield}
            name="password"
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
            />
          <div className={style.bottomdiv}>
          <button onClick={SignUp} className={style.btnsumbit}> Sign Up</button>
          <div className={style.smallerdiv}>by creating an account, I declare that I have read and accepted AGenCertif's
            <Link to="/login" className={style.link}>Terms of Use</Link> and 
            <Link to="/login" className={style.link}>Privacy Policy</Link> . </div>
          <span>Have an account?<Link to="/login" className={style.link}>Login</Link></span>
          </div>
        </div>
    </div>
  );
}

export default AppSignUp;
