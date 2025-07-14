import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop'; // Make sure your file is named ScrollToTop.jsx

function App() {

  useEffect(() => {
    const links = document.querySelectorAll('a[data-target]');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    };

    links.forEach(link => link.addEventListener('click', handleClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <Router>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* You can add more routes here */}
        </Routes>
      </main>
      <Footer />
      {/* Always visible on all pages */}
      <ScrollToTop />
    </Router>
  );
}

export default App;
