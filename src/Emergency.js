import React from 'react';
import './Emergency.css';
import Navbar from './Navbar'; // Import the CSS for styling

const Emergency = () => {
  return (
    <>
    <Navbar/>
    <div className="emergency-container">
      <h1 className="heading">Emergency Numbers for Women and Children</h1>
      <div className="numbers-container">
        {/* Card for Women in Distress */}
        <div className="emergency-card">
          <img
            src="https://www.khaskhabar.com/s3-storage/khaskhabar/khaskhabarimages/img500/5-57-1516079015-286885-khaskhabar.jpg"
            alt="Women in Distress"
            className="card-image"
          />
          <h3>1091</h3>
          <p>Women in Distress</p>
          <a href="tel:+1091" className="call-button">Call Now</a>
        </div>

        {/* Card for Women Helpline Domestic Abuse */}
        <div className="emergency-card">
          <img
            src="https://reach.org.in/wp-content/uploads/2018/10/mithra1812.jpg"
            alt="Domestic Abuse"
            className="card-image"
          />
          <h3>181</h3>
          <p>Women Helpline for Domestic Abuse</p>
          <a href="tel:+181" className="call-button">Call Now</a>
        </div>

        {/* Card for Police Emergency */}
        <div className="emergency-card">
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_kthb_8UFAkN_8IQGaIQgT5XC_DkdqsgvK_1YAfXBSuHw=s900-c-k-c0x00ffffff-no-rj"
            alt="Police Emergency"
            className="card-image"
          />
          <h3>112</h3>
          <p>Police Emergency</p>
          <a href="tel:+112" className="call-button">Call Now</a>
        </div>

        <div className="emergency-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-6DOwvjRki1nRO2Mwhzwyx2MxcHSlKTXqg&s"
            alt="Police Emergency"
            className="card-image"
          />
          <h3>10920</h3>
          <p>Shakthi Shalini</p>
          <a href="tel:+112" className="call-button">Call Now</a>
        </div>

        {/* Card for Child Helpline */}
        <div className="emergency-card">
          <img
            src="https://media.umangapp.in/app/ico/service/D_1550124360316optimizedchildline.png"
            alt="Child Helpline"
            className="card-image"
          />
          <h3>1098</h3>
          <p>Child Helpline</p>
          <a href="tel:+1098" className="call-button">Call Now</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Emergency;
