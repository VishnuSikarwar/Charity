import React from 'react';
import '../assets/css/Volunteer.css'; // Assuming the path is correct for the CSS file
import UpcomingEvent from './UpcomingEvent';
import Causes from './Causes';

const Volunteer = () => {
  return (
    <>
      <Causes />
      <div className="bannerImage">
        <div id="cta" className="section">
          <div className="cta-content text-center">
            <h1>Become A Volunteer</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-primary">
              Join Us Now!
            </button>
          </div>
        </div>
      </div>

      <UpcomingEvent />
    </>
  );
};

export default Volunteer;
