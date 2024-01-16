import React from 'react';
//import logo from './assets/logo.svg';
import './assets/App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import LearnPage from "./pages/LearnPage"
import ResourcesPage from "./pages/ResourcesPage"
import HardwarePage from "./pages/HardwarePage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/hardware" element={<HardwarePage />} />          
        </Routes>
        
        <Footer />
      </ Router>
    </div>
  );
}




{/* 
export default function App() {
  return (
    <div className="App">
      <Header />


      <Banner />
      <Content />
      <Learn />
      <Resources />
      <Hardware />


    
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
      <Footer />
    </div>
  );
}
*/}