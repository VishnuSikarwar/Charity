import React from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import Background from '../assets/img/background-2.jpg';
import Avatar1 from '../assets/img/avatar-1.jpg';
import Avatar2 from '../assets/img/avatar-2.jpg';
// import '../assets/css/Volunteer2.css'; 

const Volunteer2 = () => {
  return (
    <div
      className="parallax mt-5"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        height: '473px',
        position: 'relative',
      }}
    >
      <div className="container-fluid">
        <div className="row title" style={{ marginBottom: '20px' }}>
          <div className="col-sm-12 btn">
            {/* Owl Carousel In React Application */}
          </div>
        </div>

        <div className="container-fluid">
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            margin={4}
            responsive={{
              0: {
                items: 1, 
              },
              768: {
                items: 1, 
              },
              1024: {
                items: 2, 
              },
            }}
          >
            {/* First Slide */}
            <div style={{
              backgroundImage: 'url(your-background-image-url.jpg)',
              backgroundSize: 'cover',
              padding: '20px',
              borderRadius: '10px',
              color: '#fff',
              textAlign: 'left',
              width: '300px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative' }}>
                <img
                  src={Avatar1}
                  alt="Avatar"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>John Doe</span><br />
                  <span style={{ color: '#7ED321', fontSize: '14px' }}>VOLUNTEER</span>
                </div>
              </div>
              <blockquote 
              style={{
                background: '#fff',
                padding: '15px',
                borderRadius: '10px',
                color: '#333',
                fontSize: '14px',
                position: 'relative',
                lineHeight: '1.5',
                width: '200%'
              }}>
                <p style={{ margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  color: '#7ED321',
                  fontSize: '24px',
                }}>
                  <i className="fa fa-quote-right" style={{ fontSize: '60px', position: 'absolute', top: '-20px', left: '-40px' }}></i>
                </div>
              </blockquote>
            </div>

            {/* Second Slide */}
            <div style={{
              backgroundImage: 'url(your-background-image-url.jpg)',
              backgroundSize: 'cover',
              padding: '20px',
              borderRadius: '10px',
              color: '#fff',
              textAlign: 'left',
              width: '300px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative' }}>
                <img
                  src={Avatar2}
                  alt="Avatar"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Jane Doe</span><br />
                  <span style={{ color: '#7ED321', fontSize: '14px' }}>VOLUNTEER</span>
                </div>
              </div>
              <blockquote style={{
                background: '#fff',
                padding: '15px',
                borderRadius: '10px',
                color: '#333',
                fontSize: '14px',
                position: 'relative',
                lineHeight: '1.5',
                width: '200%'
              }}>
                <p style={{ margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  color: '#7ED321',
                  fontSize: '24px',
                }}>
                  <i className="fa fa-quote-right" style={{ fontSize: '60px', position: 'absolute', top: '-20px', left: '-40px' }}></i>
                </div>
              </blockquote>
            </div>

            {/* Third Slide */}
            <div style={{
              backgroundImage: 'url(your-background-image-url.jpg)',
              backgroundSize: 'cover',
              padding: '20px',
              borderRadius: '10px',
              color: '#fff',
              textAlign: 'left',
              width: '300px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative' }}>
                <img
                  src={Avatar1}
                  alt="Avatar"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>John Doe</span><br />
                  <span style={{ color: '#7ED321', fontSize: '14px' }}>VOLUNTEER</span>
                </div>
              </div>
              <blockquote style={{
                background: '#fff',
                padding: '15px',
                borderRadius: '10px',
                color: '#333',
                fontSize: '14px',
                position: 'relative',
                lineHeight: '1.5',
                width: '200%'
              }}>
                <p style={{ margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  color: '#7ED321',
                  fontSize: '24px',
                }}>
                  <i className="fa fa-quote-right" style={{ fontSize: '60px', position: 'absolute', top: '-20px', left: '-40px' }}></i>
                </div>
              </blockquote>
            </div>

            {/* Fourth Slide */}
            <div style={{
              backgroundImage: 'url(your-background-image-url.jpg)',
              backgroundSize: 'cover',
              padding: '20px',
              borderRadius: '10px',
              color: '#fff',
              textAlign: 'left',
              width: '300px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', position: 'relative' }}>
                <img
                  src={Avatar2}
                  alt="Avatar"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                />
                <div>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Jane Doe</span><br />
                  <span style={{ color: '#7ED321', fontSize: '14px' }}>VOLUNTEER</span>
                </div>
              </div>
              <blockquote style={{
                background: '#fff',
                padding: '15px',
                borderRadius: '10px',
                color: '#333',
                fontSize: '14px',
                position: 'relative',
                lineHeight: '1.5',
                width: '200%'
              }}>
                <p style={{ margin: '0' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  color: '#7ED321',
                  fontSize: '24px',
                }}>
                  <i className="fa fa-quote-right" style={{ fontSize: '60px', position: 'absolute', top: '-20px', left: '-40px' }}></i>
                </div>
              </blockquote>
            </div>
            

          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Volunteer2;
