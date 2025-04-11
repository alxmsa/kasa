import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Logements from './pages/logements'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import './styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/Kasa' element={<Home />} />
        <Route path='/apropos' element={<APropos />} />
        <Route path='/logements/:id' element={<Logements />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

