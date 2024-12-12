import React from 'react';
import backgroundImg2 from '../assets/img/background-2.jpg';
import '../assets/css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import '../assets/css/About.css'; 

const About = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '30vh',
          background: `url(${backgroundImg2}) center center`,
          marginTop: '0px'
        }}
      >
        <div className="container pt-5">
          <h2 className='text-white'>About Page</h2>
        </div>
        <div className="container pt-3 d-flex align-items-center text-white">
          <Link className="nav-link" to="/">Home</Link>
          <span className="text-white mx-2">/</span>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </div>

      {/* Additional content section */}
      <div className="container mt-5">
        <h3>About Our Company</h3>
        <p>
          Our company has been committed to making a positive impact in the community since its inception. 
          We specialize in a variety of services that cater to the needs of our clients and the broader community.
        </p>

        <h4>Mission Statement</h4>
        <p>
          Our mission is to deliver high-quality services that empower our clients to achieve their goals. 
          We believe in integrity, excellence, and community-focused efforts.
        </p>

        <h4>Our Team</h4>
        <p>
          Our team consists of dedicated professionals who bring a wealth of experience and passion to their work. 
          We are committed to continuous learning and innovation.
        </p>

        <h4>Contact Information</h4>
        <p>
          Email: info@company.com<br />
          Phone: (123) 456-7890<br />
          Address: 123 Main St, Anytown, USA
        </p>
      </div>
    </>
  );
};

export default About;
