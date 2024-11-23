
// import React from 'react';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import './Experiences.css';

// function Experiences() {
//   const experiences = [
//     { title: 'Experience 1', description: 'Aisyiyah university information technology students class of 2023' },
//     { title: 'Experience 2', description: 'organizers at the I-Tech comparative study event' },
//     { title: 'Experience 3', description: 'organizers at the Mataf of the information technology study program in 2024' },
//     // Tambahkan lebih banyak pengalaman di sini
//   ];

//   return (
//     <div id="experiences" className="experiences-section text-center">
//       <h2>Experiences</h2>
//       <Row>
//         {experiences.map((experience, index) => (
//           <Col md={4} key={index} className="mb-4">
//             <Card>
//               <Card.Body>
//                 <Card.Title>{experience.title}</Card.Title>
//                 <Card.Text>{experience.description}</Card.Text>
//                 <Button variant="primary">Learn More</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default Experiences;


import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Experiences.css';

// Import gambar experience
import experienceImage1 from './ctf.jpg';
import experienceImage2 from './stuban.jpg';
import experienceImage3 from './mataf.jpg';

function Experiences() {
  // State untuk melacak experience yang sedang menampilkan gambar
  const [visibleExperience, setVisibleExperience] = useState(null);

  const experiences = [
    { title: 'Experience 1', description: 'participants in the “capture the flag” workshop organized by TI unisa', image: experienceImage1 },
    { title: 'Experience 2', description: 'Organizers at the I-Tech comparative study event', image: experienceImage2 },
    { title: 'Experience 3', description: 'Organizers at the Mataf of the information technology study program in 2024', image: experienceImage3 },
  ];

  // Fungsi untuk menampilkan atau menyembunyikan gambar saat tombol diklik
  const handleLearnMore = (index) => {
    setVisibleExperience(visibleExperience === index ? null : index);
  };

  return (
    <div id="experiences" className="experiences-section text-center">
      <h2>Experiences</h2>
      <Row>
        {experiences.map((experience, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{experience.title}</Card.Title>
                <Card.Text>{experience.description}</Card.Text>
                <Button variant="primary" onClick={() => handleLearnMore(index)}>
                  Learn More
                </Button>
                {visibleExperience === index && (
                  <div className="experience-image mt-3">
                    <img src={experience.image} alt={experience.title} style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Experiences;
