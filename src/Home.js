import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  const [location, setLocation] = useState(null);


  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ lat, lon });
      }, (error) => {
        alert("Error fetching location: " + error.message);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleEmergencyClick = () => {
   
    getLocation();

  
    if (location) {
      const { lat, lon } = location;
      const message = `Emergency! Please help. My location is: https://www.google.com/maps?q=${lat},${lon}`;

      
      window.open(`https://wa.me/918885918232?text=${encodeURIComponent(message)}`);
    } else {
      alert('Location not available yet!');
    }
  };

  return (
    <>
      <div className="home">
        <Navbar />
        <div className="home-page">
          <div className="content">
            <h1>Women Empowerment & Safety</h1>
            <p>
              Empowering women is not only essential for gender equality but is also
              crucial for the well-being of society. Let’s work together to ensure the
              safety, respect, and opportunities for all women.
            </p>
          </div>
          <button className="emergency-button" onClick={handleEmergencyClick}>
            Emergency
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
