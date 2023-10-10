import React from 'react';
import { createRoot } from 'react-dom/client';
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

createRoot(document.getElementById('root')).render(<App />);
