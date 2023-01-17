import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AppAutoFillPageEditing from "./AppAutoFillPageEditing";
import SertifikatAdd from "./pages/SertifikatAdd/SertifikatAdd";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <SertifikatAdd/>
    </div>
  );
}

export default App;
