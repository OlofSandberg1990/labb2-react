import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CV from "./Pages/CV";
import Other from "./Pages/Other";
import Footer from "./components/Footer";


function App() {
  return (
    <>    
    <Header></Header>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/CV" element={<CV></CV>}></Route>
    <Route path="/other" element={<Other></Other>}></Route>
    </Routes>
        
    <Footer></Footer>
    
    </>
  );
}

export default App;
