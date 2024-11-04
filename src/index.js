import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Questionnaire from './pages/Questionnaire'
import Banner from './components/Banner'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questionnaire' element={<Questionnaire />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

