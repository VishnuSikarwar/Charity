// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [numPages, setNumPages] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setNumPages(11); // Mobile screens
      } else if (window.innerWidth <= 991) {
        setNumPages(15); // Tablet screens
      } else {
        setNumPages(5.4); // Laptop screens
      }
    };

    handleResize(); // Set initial page count
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);

  return (
    <> 
      <div style={{ minHeight: '100vh' }}>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
