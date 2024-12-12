import React from 'react';
import backgroundImg2 from '../assets/img/background-2.jpg';
import Post1 from '../assets/img/Post-1.jpg';
import Post3 from '../assets/img/Post-3.jpg';
import Post2 from '../assets/img/Post-2.jpg';
import Post4 from '../assets/img/Post-4.jpg';
import Post5 from '../assets/img/Post-5.jpg';
import Post6 from '../assets/img/Post-6.jpg';
import Galery6 from '../assets/img/galery-6.jpg';
import '../assets/css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import '../assets/css/BlogPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot,  faTicket} from '@fortawesome/free-solid-svg-icons';

const BlogPage = () => {
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
          <h2 className='text-white'>Blog Page</h2>
        </div>
        <div className="container pt-3 d-flex align-items-center text-white">
          <Link className="nav-link" to="/">Home</Link>
          <span className="text-white mx-2">/</span>
          <Link className="nav-link" to="/SingleCauses">Blog Page</Link>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <img src={Post1} style={{width: '100%', height: '60%', borderRadius: '10px'}} />
                <h3>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
                <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                  <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                </div>
                <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="col-lg-6">
                <img src={Post2} style={{width: '100%', height: '60%', borderRadius: '10px'}} />
                <h3>Vix Fuisset Tibique Facilisis Cu. Justo Accusata Ius At</h3>
                <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                  <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                </div>
                <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="col-lg-6">
                <img src={Post3} style={{width: '100%', height: '60%', borderRadius: '10px'}} />
                <h3>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
                <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                  <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                </div>
                <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="col-lg-6">
                <img src={Post4} style={{width: '100%', height: '60%', borderRadius: '10px'}} />
                <h3>Vix Fuisset Tibique Facilisis Cu. Justo Accusata Ius At</h3>
                <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                  <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                </div>
                <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="col-lg-6">
                <img src={Post5} style={{width: '100%', height: '60%', borderRadius: '10px'}} />
                <h3>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
                <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                  <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                </div>
                <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="col-lg-6">
                <img src={Post6} style={{width: '100%', height: '60%', borderRadius: '10px'}} />
                <h3>Vix Fuisset Tibique Facilisis Cu. Justo Accusata Ius At</h3>
                <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                  <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                </div>
                <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-1 text-center pagination" style={{borderColor: '#83ba09'}}>1</div>
              <div className="col-1 text-center pagination">2</div>
              <div className="col-1 text-center pagination">3</div>
              <div className="col-1" style={{height: '50px', textAlign: 'center', lineHeight: '50px'}}>.....</div>
              <div className="col-1 text-center pagination">12</div>
            </div>
          </div>
          <div className="col-lg-3">
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
                  <img src={Post4} alt="" className="image" style={{width: '120%', height: '60%', borderRadius: '10px'}}/>
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
                  <img src={Post3} alt="" className="image" style={{width: '120%', height: '60%', borderRadius: '10px'}}/>
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
                  <img src={Post2} alt="" className="image" style={{width: '120%', height: '60%', borderRadius: '10px'}}/>
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
              <div className="row align-items-center hover-Posts">
                <div className="col-4 imgcontainer1 mt-3">
                  <img src={Post4} alt="" className="image" style={{width: '120%', height: '60%', borderRadius: '10px'}}/>
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
                  <img src={Post3} alt="" className="image" style={{width: '120%', height: '60%', borderRadius: '10px'}}/>
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
                  <img src={Post2} alt="" className="image" style={{width: '120%', height: '60%', borderRadius: '10px'}}/>
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
  )
}

export default BlogPage