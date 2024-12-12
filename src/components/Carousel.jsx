// src/components/Carousel.jsx
import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Image1 from '../assets/img/background-1.jpg'; 
import Image2 from '../assets/img/background-2.jpg'; 
import '../assets/css/Carousel.css'; 

const Carousel = () => {
    return (
        <> 
            <div>            
                <OwlCarousel 
                    items={1}  
                    className="owl-theme"  
                    loop  
                    nav  
                    margin={8}
                >  
                    <div className="slide-item" style={{ backgroundImage: `url(${Image1})` }}>
                        <div className="content text-start" style={{ padding: '100px 20px' }}>
                            <h1 className="display-4 fw-bold" style={{ color: 'white', marginBottom: '20px' }}>Become A Volunteer</h1>
                            <p className="lead" style={{ color: 'white', marginBottom: '30px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className="btn btn-success btn-lg">Join Us Now!</button>
                        </div>
                    </div> 
                    <div className="slide-item" style={{ backgroundImage: `url(${Image2})` }}>
                        <div className="content text-start" style={{ padding: '100px 20px' }}>
                            <h1 className="display-4 fw-bold" style={{ color: 'white', marginBottom: '20px' }}>Become A Volunteer</h1>
                            <p className="lead" style={{ color: 'white', marginBottom: '30px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button className="btn btn-success btn-lg">Join Us Now!</button>
                        </div>
                    </div>   
                </OwlCarousel> 
            </div>
        </>
    );
};

export default Carousel;
