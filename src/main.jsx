// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QRScanner from './pages/Scanner/QRScanner';
import QRMenu from './pages/Menu/QRMenu';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRScanner />} />
        <Route path="/menu" element={<QRMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
