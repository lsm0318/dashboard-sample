import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface DashboardThemeHeaderProps {
  toggle: () => void;
}

const DashboardThemeHeader: React.FunctionComponent<DashboardThemeHeaderProps> = ({ toggle }) => {
  const navigate = useNavigate();

  function Name () {
    return (
      <span>홍길동 </span>
    );
  }

  return (
    <Navbar variant="light" bg="light" className="border-bottom">
      <Container fluid>
        <Button variant="" onClick={toggle}>
          <i className="fa-solid fa-bars fa-fw"></i>
        </Button>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {/*
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
            */}
            <NavDropdown title={Name()} align="end">
              <NavDropdown.Item onClick={() => navigate('/user/profile')}>내 프로필</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/user/settings')}>설정</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/user/help')}>도움말</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item onClick={() => navigate('/login')}>로그아웃</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashboardThemeHeader;
