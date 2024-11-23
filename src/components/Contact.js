import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { jsPDF } from 'jspdf'; // Import jsPDF
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState([]);

  // Data Dummy untuk Home, About, Projects, Experiences
  const homeData = {
    name: "Fuad Fadhlil 'Azhiim",
    description: "I am a Full Stack Developer with experience in creating websites, UI/UX design, and more."
  };

  
  const aboutData = {
    personalInfo: {
      name: "Fuad Fadhlil 'Azhiim",
      email: "fuadpoenya77@gmail.com.com",
      phone: "081358983847",
      address: "Sleman, DIY"
    },
    aboutMe: "a web developer who focuses on user interface design and user experience, besides that I am also a fullstack developer who is currently focusing on the front end. besides all that I am also a person who has a high enthusiasm for technology, especially in computer hardware and software technology."
  };


  
  const projectsData = [
    { title: "Project A", description: "A web app fkgkaskhfkhafkhsvhkvkhor managing tasks." },
    { title: "Project B", description: "A mobile app for tracking fitness goals." }
  ];

  const experiencesData = [
    { jobTitle: "Software Developer", company: "XYZ Corp", duration: "2021 - Present" },
    { jobTitle: "Front-end Developer", company: "ABC Ltd", duration: "2019 - 2021" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, message };
    setContacts([...contacts, newContact]);
    setName('');
    setMessage('');
    Swal.fire('Thank you!', 'Your message has been submitted', 'success');
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts); // Update state with new data
    Swal.fire('Deleted!', 'Your message has been deleted.', 'success');
  };

  
  return (
    <div id="contact" className="contact-section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
  
      {/* Display the messages entered */}
      <div className="submitted-contacts">
        {contacts.length > 0 && (
          <div className="contact-messages">
            <h3>Messages Sent:</h3>
            <ul>
              {contacts.map((contact, index) => (
                <li key={index} className="message-item">
                  <strong>{contact.name}</strong>: {contact.message}
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-btn"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
  
      {/* Tombol Unduh CV */}
      <a
        href="/CV_Fuad_Fadhlil_Azhiim.pdf" // Path ke file PDF
        download="CV_Fuad_Fadhlil_Azhiim.pdf" // Nama file yang diunduh
        className="btn btn-success"
      >
        Download CV (PDF)
      </a>
      {/* WhatsApp Button */}
      <div className="whatsapp-container">
        <a
          href="https://wa.me/6281358983847"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <i className="fab fa-whatsapp whatsapp-icon"></i> Chat with me on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Contact;
