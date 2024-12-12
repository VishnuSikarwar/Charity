import React from 'react';
import backgroundImg2 from '../assets/img/background-2.jpg';
import Post5 from '../assets/img/Post-5.jpg';
import Post3 from '../assets/img/Post-3.jpg';
import Post2 from '../assets/img/Post-2.jpg';
import Post4 from '../assets/img/Post-4.jpg';
import Galery6 from '../assets/img/galery-6.jpg';
import Avatar1 from '../assets/img/avatar-1.jpg'
import Avatar2 from '../assets/img/avatar-2.jpg'
import { TbArrowBackUp } from "react-icons/tb";
import '../assets/css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import '../assets/css/SingleBlog.css'; 


const SingleBlog = () => {
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
          <h2 className='text-white'>Single Blog Page</h2>
        </div>
        <div className="container pt-3 d-flex align-items-center text-white">
          <Link className="nav-link" to="/">Home</Link>
          <span className="text-white mx-2">/</span>
          <Link className="nav-link" to="/SingleBlog">Single Blog</Link>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9">
            <img 
              src={Post5} 
              alt="Error" 
              className='img-fluid rounded mt-5'
              style={{
                width: '100%',
              }}
            />
            <div className="progress mt-3">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '53%', background: '#83ba09' }}
                aria-valuenow="53"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                53%
              </div>
            </div>
            <div className="row ">
              <span className="col-6" style={{ textAlign: 'left', fontSize: '20px' }}>
                Raised: <b>52,000$</b>
              </span>
              <span className="col-6" style={{ textAlign: 'right', fontSize: '20px' }}>
                Goal: <b>90,000$</b>
              </span>
            </div>

            {/* Blog Post Content */}
            <div className="row mt-4">
              <div className="col-12">
                <h1 className="font-weight-bold">Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h1>
              </div>
            </div>

            <div className="row text-muted mb-3">
              <div className="col-12">
                <span>12 November 2018</span> |
                <span> By John Doe</span> |
                <span> 0 Comments</span>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <p style={{fontSize: '16px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="container mb-3" style={{backgroundColor: '#f4f4f8', padding: '20px', borderRadius: '10px', position: 'relative'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '10px',
                  color: '#7ED321',
                  fontSize: '24px',
                }}>
                  <i className="fa fa-quote-right" style={{ fontSize: '50px', position: 'absolute', top: '-20px', left: '-35px' }}></i>
                </div>
                </div>
                
                <p style={{fontSize: '16px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            {/* Tags Section */}
            <div className="row mt-4">
              <div className="col-8 ">
                <strong>TAGS:</strong>
                <a href="#" className='social-link' style={{textDecoration: 'none', color: 'black'}}>< i className="fa-solid fa-tag mx-2"></i>Charity</a>
                <a href="#" className='social-link' style={{textDecoration: 'none', color: 'black'}}>< i className="fa-solid fa-tag mx-2"></i>Health</a>
                <a href="#" className='social-link' style={{textDecoration: 'none', color: 'black'}}>< i className="fa-solid fa-tag mx-2"></i>Donation</a>
              </div>
              <div className="col-4">
                <strong>SHARE:</strong>
                <a href="#" className='social-link' style={{textDecoration: 'none', color: 'black'}}><i className="fab fa-twitter mx-2"></i></a>
                <a href="#" className='social-link' style={{textDecoration: 'none', color: 'black'}}><i className="fab fa-facebook-f mx-2"></i></a>
                <a href="#" className='social-link' style={{textDecoration: 'none', color: 'black'}}><i className="fab fa-google-plus-g mx-2"></i></a>
                <a href="#" className='social-link' style={{textDecoration: 'none', color: 'black'}}><i className="fab fa-pinterest-p mx-2"></i></a>
                <a href="#" className='social-link' style={{textDecoration: 'none', color: 'black'}}><i class="fa-brands fa-instagram mx-2"></i></a>
              </div>
            </div>

            {/* comments */}
            <h3 className='mt-5 mb-5'>Comments (3)</h3>
            <div className="container" style={{border: '1px solid #e6e6ea', borderRadius: '10px'}}>
              <div className="row">
                <div className="col-1 mt-4">
                  <img src={Avatar1} alt="" style={{borderRadius: '50%'}}/>
                </div>
                <div className="col-11 px-5">
                  <div className="row">
                    <div className="col-5 mt-4 me-4"><span style={{fontSize: '20px', fontWeight: '700'}}>John Doe</span> <span style={{fontSize: '12px', marginLeft: '15px'}}>2 min ago</span></div>
                    <div className="col-3 mt-4 me-5" ></div>
                    <div className="col-2 mt-4 me-3 Arrow" style={{marginLeft:'20px'}}><span style={{fontSize: '16px'}}>Reply</span><TbArrowBackUp style={{marginLeft: '1px'}}/></div>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>

              <div className="container mt-4 mb-4" style={{border: '1px solid #e6e6ea', borderRadius: '10px'}}>
              <div className="row">
                <div className="col-1 mt-4">
                  <img src={Avatar2} alt="" style={{borderRadius: '50%'}}/>
                </div>
                <div className="col-11 px-5 mb-4">
                  <div className="row">
                    <div className="col-5 mt-4 me-4"><span style={{fontSize: '20px', fontWeight: '700'}}>John Doe</span> <span style={{fontSize: '12px', marginLeft: '15px'}}>2 min ago</span></div>
                    <div className="col-3 mt-4 me-5" ></div>
                    <div className="col-2 mt-4 me-3 Arrow" style={{marginLeft:'20px'}}><span style={{fontSize: '16px'}}>Reply</span><TbArrowBackUp style={{marginLeft: '1px'}}/></div>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              </div>

            </div>

            <div className="container mt-4 mb-4" style={{border: '1px solid #e6e6ea', borderRadius: '10px'}}>
              <div className="row">
                <div className="col-1 mt-4">
                  <img src={Avatar1} alt="" style={{borderRadius: '50%'}}/>
                </div>
                <div className="col-11 px-5 mb-4">
                  <div className="row">
                    <div className="col-5 mt-4 me-4"><span style={{fontSize: '20px', fontWeight: '700'}}>John Doe</span> <span style={{fontSize: '12px', marginLeft: '15px'}}>2 min ago</span></div>
                    <div className="col-3 mt-4 me-5" ></div>
                    <div className="col-2 mt-4 me-3 Arrow" style={{marginLeft:'20px'}}><span style={{fontSize: '16px'}}>Reply</span><TbArrowBackUp style={{marginLeft: '1px'}}/></div>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

            {/* Form */}
            <form className='mt-5'>
                <h3>Leave a reply</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  
                <div className="row">
                    <div className="col-md-4 mb-3">
                    <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-4 mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-md-4 mb-3">
                    <input type="text" className="form-control" placeholder="Website" />
                    </div>
                </div>
  
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Message"></textarea>
                </div>
  
                <button type="button" className="btn  rounded-pill text-white ps-4 pe-4 pt-2 pb-2" style={{background: '#83ba09 '}}>Submit</button>
            </form>


          </div>

          <div className="col-lg-3">
            {/* Additional Content or Sidebar */}
            <div className="container mt-5 tdnone">
              <h3>Category</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li className='mt-3'>Health <span style={{color: '#83ba09'}}>(57)</span></li>
                <li className='mt-3'>Food <span style={{color: '#83ba09'}}>(86)</span></li>
                <li className='mt-3'>Education <span style={{color: '#83ba09'}}>(241)</span></li>
                <li className='mt-3'>Donation <span style={{color: '#83ba09'}}>(65)</span></li>
                <li className='mt-3'>Events <span style={{color: '#83ba09'}}>(14)</span></li>
              </ul>

              <h3>Latest Posts</h3>
              <div className="row align-items-center hover-Posts">
                <div className="col-4 imgcontainer1 mt-3">
                  <img src={Post4} alt="" className="image" style={{width: '120%', height: '100%'}}/>
                  <div className="overlay" style={{cursor: 'pointer'}}></div>
                </div>
                <div className="col-8 mt-3">
                  <p className='hover-text' style={{ fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}>
                    <b>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</b>
                  </p>
                </div> 
                <span className="col-5" style={{ fontSize: '12px' }}>
                  By John Doe
                </span>
                <span className="col-7" style={{ fontSize: '12px' }}>
                  12 November 2018
                </span>

                <div className="col-4 imgcontainer1 mt-3">
                  <img src={Post3} alt="" className="image" style={{width: '120%', height: '100%'}}/>
                  <div className="overlay" style={{cursor: 'pointer'}}></div>
                </div>
                <div className="col-8 mt-3">
                  <p className='hover-text' style={{ fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}>
                    <b>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</b>
                  </p>
                </div> 
                <span className="col-5" style={{ fontSize: '12px' }}>
                  By John Doe
                </span>
                <span className="col-7" style={{ fontSize: '12px' }}>
                  12 November 2018
                </span>


                <div className="col-4 imgcontainer1 mt-3">
                  <img src={Post2} alt="" className="image" style={{width: '120%', height: '100%'}}/>
                  <div className="overlay" style={{cursor: 'pointer'}}></div>
                </div>
                <div className="col-8 mt-3">
                  <p className='hover-text' style={{ fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}>
                    <b>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</b>
                  </p>
                </div> 
                <span className="col-5" style={{ fontSize: '12px' }}>
                  By John Doe
                </span>
                <span className="col-7" style={{ fontSize: '12px' }}>
                  12 November 2018
                </span>

              </div>


              <h3 className='mt-5'>Latest Causes</h3>
              {/* <div className="progress mt-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '53%', background: '#83ba09' }}
                      aria-valuenow="53"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                    </div>
                  </div>
                </div> 
                <span className="col-12" style={{ fontSize: '12px' }}>
                  Raised: <b>52.000$</b> - Goal: <b>90.000$</b>
                </span> */}
              <div className="row align-items-center hover-Posts">
                <div className="col-4 imgcontainer1 mt-3">
                  <img src={Post4} alt="" className="image" style={{width: '120%', height: '100%'}}/>
                  <div className="overlay" style={{cursor: 'pointer'}}></div>
                </div>
                <div className="col-8 mt-5">
                  <p className='hover-text' style={{ fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}>
                    <b>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</b>
                  </p>
                  <div className="progress mt-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '53%', background: '#83ba09' }}
                      aria-valuenow="53"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                    </div>
                  </div>
                </div> 
                <span className="col-12" style={{ fontSize: '12px' }}>
                  Raised: <b>52.000$</b> - Goal: <b>90.000$</b>
                </span>

                <div className="col-4 imgcontainer1 mt-3">
                  <img src={Post3} alt="" className="image" style={{width: '120%', height: '100%'}}/>
                  <div className="overlay" style={{cursor: 'pointer'}}></div>
                </div>
                <div className="col-8 mt-5">
                  <p className='hover-text' style={{ fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}>
                    <b>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</b>
                  </p>
                  <div className="progress mt-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '53%', background: '#83ba09' }}
                      aria-valuenow="53"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                    </div>
                  </div>
                </div> 
                <span className="col-12" style={{ fontSize: '12px' }}>
                  Raised: <b>52.000$</b> - Goal: <b>90.000$</b>
                </span>

                <div className="col-4 imgcontainer1 mt-3">
                  <img src={Post2} alt="" className="image" style={{width: '120%', height: '100%'}}/>
                  <div className="overlay" style={{cursor: 'pointer'}}></div>
                </div>
                <div className="col-8 mt-5">
                  <p className='hover-text' style={{ fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}>
                    <b>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</b>
                  </p>
                  <div className="progress mt-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '53%', background: '#83ba09' }}
                      aria-valuenow="53"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                    </div>
                  </div>
                </div> 
                <span className="col-12" style={{ fontSize: '12px' }}>
                  Raised: <b>52.000$</b> - Goal: <b>90.000$</b>
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
