//import logo from './logo.svg';
import './App.css';
import React from "react";
import { Routes, Route, Router } from 'react-router-dom';

//page components
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import ErrorPage from './components/errorPage'
import Header from './components/headerFooter.js/header';
import Footer from './components/headerFooter.js/footer';

function App() {
  return (
    <div >
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        
        <Route path='*' element={<ErrorPage />} />  
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
