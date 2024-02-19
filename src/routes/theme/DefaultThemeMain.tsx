import React from 'react';
import { Container } from 'react-bootstrap';
import { DefaultThemeProps } from './DefaultTheme';

const DefaultThemeMain: React.FunctionComponent<DefaultThemeProps> = ({ element, component }) => {
  if (element) {
    return (
      <div id="layoutSidenav_content">
        <Container fluid className="p-3">
          {element}
        </Container>
      </div>
    );
  }

  if (component) {
    return (
      <div id="layoutSidenav_content" className="full-height">
        <Container fluid className="p-3 h-100">
          {component}
        </Container>
      </div>
    );
  }

  return <></>;
};

export default DefaultThemeMain;
