// src/components/NavBar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '../assets/css/NavBar.css';
import logo from '../assets/img/logo.png'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Home">
                    <img src={logo} alt="Charity Logo" style={{ width: '120px', marginLeft: '100px' }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft: '50px'}}>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/SingleCauses" id="causesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Causes
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="causesDropdown">
                                <li><Link className="dropdown-item" to="/SingleCauses">Single Cause</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                                <li><Link className="dropdown-item" to="/SingleEvent">Single Event</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                                <li><Link className="dropdown-item" to="/BlogPage">Blog Page</Link></li>
                                <li><Link className="dropdown-item" to="/SingleBlog">Single Blog</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className='nav-item'>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
