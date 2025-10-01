import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import ScrollToTop from './Components/ScrollToTop'; 

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
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
