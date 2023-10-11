import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createRoot } from 'react-dom';
import QRScanner from './pages/Scanner/QRScanner';
import QRMenu from './pages/Menu/QRMenu';
import './index.css';

const history = createBrowserHistory();

const App = () => (
  <BrowserRouter history={history}>
    <Routes>
      <Route path="/" element={<QRScanner />} />
      <Route path="/menu" element={<QRMenu />} />
    </Routes>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
