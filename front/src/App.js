import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ProductosPage from './pages/ProductosPage';
import ContactoPage from './pages/ContactoPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
        </BrowserRouter>
        <Footer />


      </div>
    );
  }
}

export default App;
