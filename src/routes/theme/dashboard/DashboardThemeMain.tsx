import React, { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

interface DashboardThemeMainProps {
  element?: ReactElement;
  component?: ReactElement;
}

const DashboardThemeMain: React.FunctionComponent<DashboardThemeMainProps> = ({
  element, component
}) => {
  return (
    <Container className="p-3" fluid>
      {element}
      {component}
    </Container>
  );
};

export default DashboardThemeMain;
