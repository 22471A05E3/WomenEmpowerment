import React from 'react';
import './About.css';
import Navbar from './Navbar';

function About() {
  return (
    <>
      <Navbar />
      <section className="about">
        <h2>About EmpowerSafe</h2>
        <p>
          EmpowerSafe is dedicated to empowering women by providing them with the tools, knowledge, and support they need to stay safe and confident in their daily lives.
          Our mission is to create a world where women feel secure, valued, and empowered to achieve their fullest potential.
        </p>

        <div className="card-container1">
        
          <div className="card1">
            <img src="https://img.freepik.com/free-vector/flat-international-women-s-day-background_23-2149286059.jpg?t=st=1736072000~exp=1736075600~hmac=8af2b7969d1ca594fc8445bae7c4f2628c34b6857e226bdeefd188c83d4951fa&w=996" alt="Mission" className="card-img" />
            <h3>Our Mission</h3>
            <p>
              Our mission is to raise awareness around women's safety and health, offer practical resources for handling emergencies, and encourage women to take charge of their physical and emotional well-being.
              We aim to provide information on topics such as self-defense, emergency contacts, health tips, and more.
            </p>
          </div>

          <div className="card1">
            <img src="https://as1.ftcdn.net/v2/jpg/05/70/91/94/1000_F_570919440_mBlQvCKP0q8R54ottYakcWy1yVsGRPlK.jpg" alt="Vision" className="card-img" />
            <h3>Our Vision</h3>
            <p>
              Our vision is to create a society where every woman feels confident, secure, and free to pursue her dreams without fear.
              We believe that through education, support, and community, we can make the world a safer place for women everywhere.
            </p>
          </div>

          <div className="card1">
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20240322/pngtree-women-empower-background-image_15637769.jpg" alt="Safety" className="card-img" />
            <h3>Why Women’s Safety Matters</h3>
            <p>
              Women’s safety is a critical issue in every society. With the increase in violence, harassment, and discrimination against women, it is important to equip women with the resources to defend themselves, recognize risky situations, and have an action plan when faced with danger.
            </p>
          </div>

          <div className="card1">
            <img src="https://as2.ftcdn.net/v2/jpg/05/78/11/43/500_F_578114387_50zWcFaCeHPixBC9dKncNtobagjMHGeb.jpg" alt="Get Involved" className="card-img" />
            <h3>Get Involved</h3>
            <p>
              You can make a difference by educating yourself and others on women’s safety.
              Join the conversation, volunteer, donate to women’s organizations, and support movements that aim to improve women’s rights and protection.
            </p>
          </div>
        </div>

        <div className="team-container">
          <h2>Meet Our Team</h2>
          <div className="card-container1">
            <div className="card1">
              <img src="https://imgcdn.stablediffusionweb.com/2024/11/11/cdbc2aab-91c6-441b-afcc-12ae115b5a97.jpg" alt="Teammate 1" className="card-img" />
              <h3>A Keerthisree</h3>
            </div>

            <div className="card1">
              <img src="https://imgcdn.stablediffusionweb.com/2024/10/1/098a9df0-cffa-466d-97a7-64a6d32ecf8a.jpg" alt="Teammate 2" className="card-img" />
              <h3>K Thanmai</h3>
            </div>

            <div className="card1">
              <img src="https://files.idyllic.app/files/static/3967880?width=640&optimizer=image" alt="Teammate 3" className="card-img" />
              <h3>S Vineela</h3>
              
            </div>
          </div>

        </div>

        
<div className="guides-container">
  <h2>Meet Our Guides</h2>
  <div className="card-container1">
    <div className="card1">
     
      <h3>Dr.S.N.Thirumala Rao Sir</h3>
      
    </div>

    <div className="card1">
      
      <h3>M.Mounika Mam</h3>
     
    </div>

    <div className="card1">
      
    
      <h3>G.Saranya Mam</h3>
     
    </div>
  </div>
</div>

      </section>
    </>
  );
}

export default About;
