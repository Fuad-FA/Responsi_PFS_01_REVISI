
// import React from 'react';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import './Projects.css';

// function Projects() {
//   const projects = [
//     { title: 'Project 1', description: 'Creating a patient search game' },
//     { title: 'Project 2', description: 'Creating UI design for INS.CO' },
//     { title: 'Project 3', description: 'Creating a personal portfolio website' },
//     // Tambahkan project lainnya
//   ];

//   return (
//     <div id="projects" className="projects-section text-center">
//       <h2>Projects</h2>
//       <Row>
//         {projects.map((project, index) => (
//           <Col md={4} key={index} className="mb-4">
//             <Card>
//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Text>{project.description}</Card.Text>
//                 <Button variant="primary">View Project</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default Projects;



import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Projects.css';

// Import gambar project
import projectImage1 from './project1.jpg';
import projectImage2 from './project2.jpg';
import projectImage3 from './project2.jpg';

function Projects() {
  // State untuk melacak project yang sedang menampilkan foto
  const [visibleProject, setVisibleProject] = useState(null);

  const projects = [
    { title: 'Project 1', description: 'Creating a patient search game', image: projectImage1 },
    { title: 'Project 2', description: 'Creating UI design for INS.CO', image: projectImage2 },
    { title: 'Project 3', description: 'Creating a personal portfolio website', image: projectImage3 },
  ];

  // Fungsi untuk menampilkan atau menyembunyikan foto saat tombol diklik
  const handleViewProject = (index) => {
    setVisibleProject(visibleProject === index ? null : index);
  };

  return (
    <div id="projects" className="projects-section text-center">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" onClick={() => handleViewProject(index)}>
                  View Project
                </Button>
                {visibleProject === index && (
                  <div className="project-image mt-3">
                    <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '8px' }} />
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

export default Projects;
