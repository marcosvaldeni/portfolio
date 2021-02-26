import React from 'react';

import { projects } from '../../services/db.json'
import { Background, Content, Card } from './styles';

const Project = ({ showModal, setShowModal, setProjectModal }) => {
  const bg = [];
  const openModal = (id) => {
    setProjectModal(id);
    setShowModal(prev => !prev);
  }

  projects.map((project) => (
    bg.push(require(`../../assets/projects/${project.img}`).default)
  ));

  return (
    <>
      <Background id="project">
        <h2>PROJECTS THAT I HAVE DONE:</h2>
        <Content>
          {projects.map((project, index) => (

            <Card key={project.id} style={{ background: `url(${bg[index]}) no-repeat center center / cover` }}>
              <div key={project.id}>
                <button key={project.id} onClick={() => {openModal(project.id - 1)}}>More Information</button>
              </div>
            </Card>
          ))}
        </Content>

        {/* <Button>MORE</Button> */}
      </Background>
    </>
  );
}

export default Project;
