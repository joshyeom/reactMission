import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";
import Info from "./Info.tsx";
import "./App.css";
import handleThemeToggle from './recoil/recoilState.tsx'
import Cart from "./Cart.tsx";


function App({ handleThemeToggle }) {
  return (
    <Router>
      <Nav handleThemeToggle={handleThemeToggle} />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/product/:id" element={<Info />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
