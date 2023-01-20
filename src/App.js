import React  from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import SertifikatAdd from "./pages/SertifikatAdd/SertifikatAdd";
import { Routes,Route } from "react-router-dom";
import AppLogin from "./pages/login/AppLogin"
import AppSignUp from "./pages/signup/AppSignUp";
import Footer from "./components/footer/footer";
import TutorialPage from "./pages/Tutorial/TutorialPage";
import Pricing from "./pages/pricing/Pricing";
import { useState } from "react";
import "./App.css";

function App() {
 const [user,setUser]=useState({});
  function setUserHandeler(data){
    setUser(data)
  }
  return (
    <div className="App">

      <Navbar user={user}/>
      <div className="webpadding">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sertifikat" element={<SertifikatAdd/>}></Route>
        <Route path="/login" element={<AppLogin setUser={setUserHandeler}/>}></Route>
        <Route path="/signup" element={<AppSignUp setUser={setUserHandeler}/>}></Route>
        <Route path="/tutorial" element={<TutorialPage></TutorialPage>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
      </Routes>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
