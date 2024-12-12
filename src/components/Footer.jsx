import React from 'react'
import logo from '../assets/img/logo.png'; 
import Galery1 from '../assets/img/galery-1.jpg'
import Galery2 from '../assets/img/galery-2.jpg'
import Galery3 from '../assets/img/galery-3.jpg'
import Galery4 from '../assets/img/galery-4.jpg'
import Galery5 from '../assets/img/galery-5.jpg'
import Galery6 from '../assets/img/galery-6.jpg'
import '../assets/css/Footer.css';


const Footer = () => {
  return (
    <>
        <div className="container" style={{marginTop: '150px'}}>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <img src={logo} alt="logo" />
                    <div style={{ marginBottom: '10px', color: '#6c757f', fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="mt-5">
                        <span><i className="bi bi-geo-alt-fill"></i> 2736 Hinkle Deegan Lake Road</span><br/>
                        <span><i class="bi bi-telephone-fill"></i>  607-279-9246</span><br/>
                        <span><i class="bi bi-envelope-fill"></i>   [email protected]</span>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <h2>Galery</h2>
                    <div className="row">
                        <div className="col-4">
                            <img src={Galery1} alt="" className="img-fluid mt-2 mb-2" style={{borderRadius: '10px'}} />
                        </div>
                        <div className="col-4">
                            <img src={Galery2} alt="" className="img-fluid mt-2 mb-2" style={{borderRadius: '10px'}} />
                        </div>
                        <div className="col-4">
                            <img src={Galery3} alt="" className="img-fluid mt-2 mb-2" style={{borderRadius: '10px'}} />
                        </div>
                        <div className="col-4">
                            <img src={Galery4} alt="" className="img-fluid mt-2 mb-2" style={{borderRadius: '10px'}} />
                        </div>
                        <div className="col-4">
                            <img src={Galery5} alt="" className="img-fluid mt-2 mb-2" style={{borderRadius: '10px'}} />
                        </div>
                        <div className="col-4">
                            <img src={Galery6} alt="" className="img-fluid mt-2 mb-2" style={{borderRadius: '10px'}} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <h2>Newsletter</h2>
                    <span className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
                    <form className="d-flex flex-column align-items-center mt-3">
                        <div className="form-group w-100">
                            <input type="email" className="form-control mt-1" placeholder="Enter your email" />
                        </div>
                        <button type="submit" className="btn rounded-pill w-100 mt-4" style={{background: '#83ba09'}}>Subscribe</button>
                    </form>
                    <div className="d-flex justify-content-around mt-3">
                        <i className="bi bi-facebook d-flex align-items-center justify-content-center" style={{border: '1px solid grey', borderRadius: '50%', width: '30px', height: '30px', fontSize: '20px'}}></i>
                        <i className="bi bi-twitter d-flex align-items-center justify-content-center" style={{border: '1px solid grey', borderRadius: '50%', width: '30px', height: '30px', fontSize: '20px'}}></i>
                        <i className="bi bi-google d-flex align-items-center justify-content-center" style={{border: '1px solid grey', borderRadius: '50%', width: '30px', height: '30px', fontSize: '20px'}}></i>
                        <i className="bi bi-instagram d-flex align-items-center justify-content-center" style={{border: '1px solid grey', borderRadius: '50%', width: '30px', height: '30px', fontSize: '20px'}}></i>
                        <i className="bi bi-pinterest d-flex align-items-center justify-content-center" style={{border: '1px solid grey', borderRadius: '50%', width: '30px', height: '30px', fontSize: '20px'}}></i>
                    </div>
                </div>
                <div className="col-12 col-lg-8 mt-5">Copyright ©2024 All rights reserved | This template is made with  by Colorlib</div>
                <div className="col-12 col-lg-4 mt-5">
                    <ul className="list-inline d-flex justify-content-between">
                        <li className="list-inline-item">
                            <a href="/home" className="text-decoration-none custom-link">Home</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/about" className="text-decoration-none custom-link">About</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/causes" className="text-decoration-none custom-link">Causes</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/events" className="text-decoration-none custom-link">Events</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/blog" className="text-decoration-none custom-link">Blog</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/contact" className="text-decoration-none custom-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}


export default Footer