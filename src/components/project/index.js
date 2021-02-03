import react from 'react';

import { Background, Content, Card } from './styles';

const project = () => {

  return (
    <>
      <Background>
        <h2>PROJECTS THAT I HAVE DONE:</h2>
        <Content>
          <Card>
            <div>
              <div>
                <button>More Information</button>
              </div>
            </div>
          </Card>
          <Card>
          <div>
            <div>
              <button>More Information</button>
            </div>
          </div>
          </Card>
          <Card>
          <div>
            <div>
              <button>More Information</button>
            </div>
          </div>
          </Card>
          <Card>
          <div>
            <div>
              <button>More Information</button>
            </div>
          </div>
          </Card>
          <Card>
          <div>
            <div>
              <button>More Information</button>
            </div>
          </div>
          </Card>
        </Content>
      </Background>
    </>
  );
}

export default project;
