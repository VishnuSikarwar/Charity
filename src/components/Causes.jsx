import React from 'react';
import CausesImg1 from '../assets/img/post-1.jpg';
import CausesImg2 from '../assets/img/post-2.jpg';
import CausesImg3 from '../assets/img/post-3.jpg';
import CausesImg4 from '../assets/img/post-4.jpg';
import CausesImg5 from '../assets/img/post-5.jpg';
import CausesImg6 from '../assets/img/post-6.jpg';

const Causes = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Our Causes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="row g-4 mt-2">
        <div className="col-sm-12 col-lg-4 mt-5 mb-5">
          <img src={CausesImg1} className="img-fluid" style={{ borderRadius: '20px' , width: '100%'}} alt="Cause 1" />
          <div className="progress mt-3">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '87%' }}
                aria-valuenow="87"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                87%
            </div>
          </div>
          <div className="row mt-2">
            <span className="col-6" style={{ textAlign: 'left', fontSize: '12px' }}>Raised: 52.000$</span>
            <span className="col-6" style={{ textAlign: 'right', fontSize: '12px' }}>Goal: 90,000$</span>
          </div>
          <h3 style={{ textAlign: 'left'}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
          <p style={{ textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span
            className="btn float-start"
            style={{
                background: '#83ba09',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'inline-block',
                textAlign: 'center'
            }}
            >
                Donate Now
          </span>
        </div>
        <div className="col-sm-12 col-lg-4 mt-5 mb-5">
          <img src={CausesImg2} className="img-fluid" style={{ borderRadius: '20px', width: '100%' }} alt="Cause 2" />
          <div className="progress mt-3">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '53%' }}
                aria-valuenow="53"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                53%
            </div>
          </div>
          <div className="row mt-2">
            <span className="col-6" style={{ textAlign: 'left', fontSize: '12px' }}>Raised: 52.000$</span>
            <span className="col-6" style={{ textAlign: 'right', fontSize: '12px' }}>Goal: 90,000$</span>
          </div>
          <h3 style={{ textAlign: 'left'}}>Vix Fuisset Tibique Facilisis Cu. Justo Accusata Ius At</h3>
          <p style={{ textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span
            className="btn float-start"
            style={{
                background: '#83ba09',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'inline-block',
                textAlign: 'center'
            }}
            >
                Donate Now
          </span>
        </div>
        <div className="col-sm-12 col-lg-4 mt-5 mb-5">
          <img src={CausesImg3} className="img-fluid" style={{ borderRadius: '20px', width: '100%' }} alt="Cause 3" />
          <div className="progress mt-3">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '72%' }}
                aria-valuenow="72"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                72%
            </div>
          </div>
          <div className="row mt-2">
            <span className="col-6" style={{ textAlign: 'left', fontSize: '12px' }}>Raised: 52.000$</span>
            <span className="col-6" style={{ textAlign: 'right', fontSize: '12px' }}>Goal: 90,000$</span>
          </div>
          <h3 style={{ textAlign: 'left'}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
          <p style={{ textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span
            className="btn float-start"
            style={{
                background: '#83ba09',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'inline-block',
                textAlign: 'center'
            }}
            >
                Donate Now
          </span>
        </div>
        <div className="col-sm-12 col-lg-4 mt-5 mb-5">
          <img src={CausesImg4} className="img-fluid" style={{ borderRadius: '20px' , width: '100%'}} alt="Cause 3" />
          <div className="progress mt-3">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '64%' }}
                aria-valuenow="64"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                64%
            </div>
          </div>
          <div className="row mt-2">
            <span className="col-6" style={{ textAlign: 'left', fontSize: '12px' }}>Raised: 52.000$</span>
            <span className="col-6" style={{ textAlign: 'right', fontSize: '12px' }}>Goal: 90,000$</span>
          </div>
          <h3 style={{ textAlign: 'left'}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
          <p style={{ textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span
            className="btn float-start"
            style={{
                background: '#83ba09',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'inline-block',
                textAlign: 'center'
            }}
            >
                Donate Now
          </span>
        </div>
        <div className="col-sm-12 col-lg-4 mt-5 mb-5">
          <img src={CausesImg5} className="img-fluid" style={{ borderRadius: '20px' , width: '100%'}} alt="Cause 3" />
          <div className="progress mt-3">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '72%' }}
                aria-valuenow="72"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                72%
            </div>
          </div>
          <div className="row mt-2">
            <span className="col-6" style={{ textAlign: 'left', fontSize: '12px' }}>Raised: 52.000$</span>
            <span className="col-6" style={{ textAlign: 'right', fontSize: '12px' }}>Goal: 90,000$</span>
          </div>
          <h3 style={{ textAlign: 'left'}}>Vix Fuisset Tibique Facilisis Cu. Justo Accusata Ius At</h3>
          <p style={{ textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span
            className="btn float-start"
            style={{
                background: '#83ba09',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'inline-block',
                textAlign: 'center'
            }}
            >
                Donate Now
          </span>
        </div>
        <div className="col-sm-12 col-lg-4 mt-5 mb-5">
          <img src={CausesImg6} className="img-fluid" style={{ borderRadius: '20px', width: '100%' }} alt="Cause 3" />
          <div className="progress mt-3">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '53%' }}
                aria-valuenow="53"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                53%
            </div>
          </div>
          <div className="row mt-2">
            <span className="col-6" style={{ textAlign: 'left', fontSize: '12px' }}>Raised: 52.000$</span>
            <span className="col-6" style={{ textAlign: 'right', fontSize: '12px' }}>Goal: 90,000$</span>
          </div>
          <h3 style={{ textAlign: 'left'}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
          <p style={{ textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span
            className="btn float-start"
            style={{
                background: '#83ba09',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'inline-block',
                textAlign: 'center'
            }}
            >
                Donate Now
          </span>
        </div>
      </div>

    </div>
  );
}

export default Causes;
