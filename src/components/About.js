
import React from 'react';
import './About.css';
import profileImage from './profile.jpg'; // Pastikan ada foto profil di folder 'assets'

function About() {
  return (
    <div id="about" className="about-section container text-center">
      <h2>About Me</h2>
      <div className="about-content row">
        <div className="col-md-4">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="col-md-8">
          <h3>Fuad Fadhlil 'Azhiim</h3>
          <p className="profession">Full stack Developer & Web Designer</p>
          <p>
          I am a web developer who focuses on user interface design and user experience, besides that I am also a fullstack developer who is currently focusing on the front end. besides all that I am also a person who has a high enthusiasm for technology, especially in computer hardware and software technology.
          </p>
          <ul className="personal-info">
            <li><strong>Email:</strong> fuadpoenya77@gmail.com</li>
            <li><strong>Phone:</strong> +6281358983847</li>
            <li><strong>Location:</strong> Sleman, DIY</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
