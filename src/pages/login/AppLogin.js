import React, { useState } from "react";
import style from "./AppLogin.module.css";
import pict1 from "../../images/pict1.svg";
import logo from "../../images/logo.svg";
import Google from "../../images/Vector.svg"
import Orsplit from "../../components/orsplit/Orsplit.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AppLogin(propsperty) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function Login(props) {
    console.warn(username, password)
    let item = {'nama':username, 'password':password}
    try{
    let result = await fetch ('http://146.190.148.131:8000/user/login/', {
        method : 'POST',  
        body : JSON.stringify(item)
    })
    result = await result.json();
    console.log(result);
    if (result["detail"]){
      console.log("error")
      return;
    }
    localStorage.setItem("agencertif",JSON.stringify({"token":result["token"],"nama":result["nama"]}));
    propsperty.setUser(result);
    navigate(`/`);
  }
  catch(err){
    console.log(err)
  }
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
          name="nama"
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
