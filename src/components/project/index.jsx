import { projects } from '../../services/db.json'
import { Background, Content, Card } from './styles';

const Project = ({ showModal, setShowModal, setProjectModal }) => {
  const openModal = (id) => {
    setProjectModal(id);
    setShowModal(prev => !prev);
  }

  return (
    <>
      <Background id="project">
        <h2>PROJECTS THAT I HAVE DONE:</h2>
        <Content>
          {projects && projects.map((project) => (

            <Card key={project.id} img={project.img}>
              <div key={project.id}>
                <button key={project.id} onClick={() => {openModal(project.id - 1)}}>More Information</button>
              </div>
            </Card>
          ))}
        </Content>
      </Background>
    </>
  );
}

export default Project;
