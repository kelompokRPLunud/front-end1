import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AppAutoFillPageEditing from "./AppAutoFillPageEditing";

function App() {
  return (
    <div className="App">
      {/* <AppAutoFillPageEditing/> */}
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
