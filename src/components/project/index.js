import React from 'react';

import { Background, Content, Card, Button } from './styles';

const project = () => {

  return (
    <>
      <Background>
        <h2>PROJECTS THAT I HAVE DONE:</h2>
        <Content>
          <Card>
            <div>
              <button>More Information</button>
            </div>
          </Card>
          <Card>
            <div>
              <button>More Information</button>
            </div>
          </Card>
          <Card>
            <div>
              <button>More Information</button>
            </div>
          </Card>
          <Card>
            <div>
              <button>More Information</button>
            </div>
          </Card>
          <Card>
            <div>
              <button>More Information</button>
            </div>
          </Card>
        </Content>

        <Button>MORE</Button>
      </Background>
    </>
  );
}

export default project;
