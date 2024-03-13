import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App() {
  return (
    <>    
    <Header></Header>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
    <Route path="/about" element={<About></About>}></Route>
        
    </Routes>
    
    </>
  );
}

export default App;
