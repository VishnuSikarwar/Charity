import React from 'react';
import Image23 from '../assets/img/about.jpg';

const cardStyle = {
    width: '100%', // Make cards fluid to fit the column width
    border: '1px solid lightgrey',
    transition: 'border-color 0.3s ease',
    cursor: 'pointer',
    margin: '10px 0' // Added margin for spacing between cards
};

const hoverStyle = {
    borderColor: '#83ba09'
};

const WelcomeCharity = () => {
    return (
        <div className="container mb-5">
            <div className="row mt-5">
                <div className="col-12 col-md-6 mb-4">
                    <h1>Welcome To Charity</h1>
                    <h4 className='mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h4>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className='btn btn-primary'>Read More</button>
                </div>
                <div className="col-12 col-md-6 mb-4">
                    <img
                        src={Image23}
                        style={{ width: '100%', borderRadius: '15px' }}
                        alt="About us"
                    />
                </div>
                <div className="col-12 mt-5">
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                            <div
                                style={cardStyle}
                                onMouseEnter={e => e.currentTarget.style.borderColor = hoverStyle.borderColor}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'lightgrey'}
                            >
                                <i className="bi bi-emoji-smile fs-1" style={{ color: '#83ba09' }}></i>
                                <h1>47k</h1>
                                <p style={{ color: '#83ba09' }}>Donors</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                            <div
                                style={cardStyle}
                                onMouseEnter={e => e.currentTarget.style.borderColor = hoverStyle.borderColor}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'lightgrey'}
                            >
                                <i className="bi bi-heart-pulse-fill fs-1" style={{ color: '#83ba09' }}></i>
                                <h1>154k</h1>
                                <p style={{ color: '#83ba09' }}>Children Saved</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                            <div
                                style={cardStyle}
                                onMouseEnter={e => e.currentTarget.style.borderColor = hoverStyle.borderColor}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'lightgrey'}
                            >
                                <i className="bi bi-cash fs-1" style={{ color: '#83ba09' }}></i>
                                <h1>785k</h1>
                                <p style={{ color: '#83ba09' }}>Donated</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                            <div
                                style={cardStyle}
                                onMouseEnter={e => e.currentTarget.style.borderColor = hoverStyle.borderColor}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'lightgrey'}
                            >
                                <i className="bi bi-hand-thumbs-up fs-1" style={{ color: '#83ba09' }}></i>
                                <h1>357</h1>
                                <p style={{ color: '#83ba09' }}>Volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeCharity;
