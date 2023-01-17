import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import SertifikatAdd from "./pages/SertifikatAdd/SertifikatAdd";
import { Routes,Route } from "react-router-dom";
import AppLogin from "./pages/login/AppLogin"
import AppSignUp from "./pages/signup/AppSignUp";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Sertifikat" element={<SertifikatAdd/>}></Route>
        <Route path="/login" element={<AppLogin/>}></Route>
        <Route path="/signup" element={<AppSignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
