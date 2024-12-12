import React from 'react'
import Galery2 from '../assets/img/galery-2.jpg'
import Galery5 from '../assets/img/galery-5.jpg'
import Galery1 from '../assets/img/galery-1.jpg'
import Galery6 from '../assets/img/galery-6.jpg'

const UpcomingEvent = () => {
  return (
    <>
        <div className="container text-center mt-5">
            <h1>Upcoming Events</h1>
            <span style={{ fontSize: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-2 mt-4">
                    <img src={Galery2} alt="Gallery" className="img-fluid"style={{ borderRadius: '20px',width: '100%',height: 'auto'}} />
                </div>
                <div className="col-sm-12 col-md-7 col-lg-4 mt-4">
                    <h3 style={{textAlign: 'left'}}>Possit nastro aeterno <br />eu vis, ut cum quem 
                    <br />reque</h3>
                    <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                        <i className="bi bi-clock" style={{ marginRight: '5px' }}></i>
                        24 October, 2018 | 8:00AM - 11:00PM
                    </div>
                    <div style={{ textAlign: 'left', marginBottom: '10px'  }}>
                        <i className="bi bi-geo-alt-fill" style={{ marginRight: '5px' }}></i>
                        2736 Hinkle Deegan Lake Road
                    </div>

                    <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-2 mt-4">
                    <img src={Galery6} alt="Gallery" className="img-fluid"style={{ borderRadius: '20px',width: '100%',height: 'auto'}} />
                </div>
                <div className="col-sm-12 col-md-7 col-lg-4 mt-4">
                    <h3 style={{textAlign: 'left'}}>Vix fuisset tibique <br/>facilisis cu. Justo <br/>accusata ius at</h3>
                    <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                        <i className="bi bi-clock" style={{ marginRight: '5px' }}></i>
                        24 October, 2018 | 8:00AM - 11:00PM
                    </div>
                    <div style={{ textAlign: 'left', marginBottom: '10px'  }}>
                        <i className="bi bi-geo-alt-fill" style={{ marginRight: '5px' }}></i>
                        2736 Hinkle Deegan Lake Road
                    </div>
                    <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-2 mt-4">
                    <img src={Galery5} alt="Gallery" className="img-fluid"style={{ borderRadius: '20px',width: '100%',height: 'auto'}} />
                </div>
                <div className="col-sm-12 col-md-7 col-lg-4 mt-4">
                    <h3 style={{textAlign: 'left'}}>Possit nastro aeterno <br />eu vis, ut cum quem 
                    <br />reque</h3>
                    <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                        <i className="bi bi-clock" style={{ marginRight: '5px' }}></i>
                        24 October, 2018 | 8:00AM - 11:00PM
                    </div>
                    <div style={{ textAlign: 'left', marginBottom: '10px'  }}>
                        <i className="bi bi-geo-alt-fill" style={{ marginRight: '5px' }}></i>
                        2736 Hinkle Deegan Lake Road
                    </div>

                    <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-2 mt-4">
                    <img src={Galery1} alt="Gallery" className="img-fluid"style={{ borderRadius: '20px',width: '100%',height: 'auto'}} />
                </div>
                <div className="col-sm-12 col-md-7 col-lg-4 mt-4">
                    <h3 style={{textAlign: 'left'}}>Vix fuisset tibique <br/>facilisis cu. Justo <br/>accusata ius at</h3>
                    <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                        <i className="bi bi-clock" style={{ marginRight: '5px' }}></i>
                        24 October, 2018 | 8:00AM - 11:00PM
                    </div>
                    <div style={{ textAlign: 'left', marginBottom: '10px'  }}>
                        <i className="bi bi-geo-alt-fill" style={{ marginRight: '5px' }}></i>
                        2736 Hinkle Deegan Lake Road
                    </div>
                    <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default UpcomingEvent