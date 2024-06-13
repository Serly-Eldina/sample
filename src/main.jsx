import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Navigation from './nav.jsx'; // Mengimpor komponen Navbar dari Nav.jsx
import Footer from './footer.jsx'; // Mengimpor komponen Footer dari Footer.jsx
import Home from './home.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Home />
    <Footer />
    <App />
  </React.StrictMode>,
);
