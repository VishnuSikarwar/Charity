import React from 'react'
import Post1 from '../assets/img/post-1.jpg'
import Post2 from '../assets/img/post-2.jpg'
import Post3 from '../assets/img/post-3.jpg'

const OurBlog = () => {
  return (
    <>
        <div className="container">
            <h1 className="text-center mt-5">Our Blog</h1>
            <div className="text-center mt-3" style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="row">
                <div className="col-sm-12 col-lg-4 mt-5">
                    <img src={Post1} alt="Post IMG" className="img-fluid" style={{ borderRadius: '20px' }} />
                    <h3 className="mt-3">Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
                    <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                        <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="col-sm-12 col-lg-4 mt-5">
                <img src={Post2} alt="Post IMG" className="img-fluid" style={{borderRadius: '20px'}} />
                <h3 className="mt-3">Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
                    <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                        <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 mt-5">
                <img src={Post3} alt="Post IMG" className="img-fluid" style={{borderRadius: '20px'}} />
                <h3 className="mt-3">Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h3>
                    <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
                        <span>12 November 2018</span> | <span>By John Doe</span> | <span>0 Comments</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurBlog