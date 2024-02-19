import React from 'react';
import { Button, Navbar, NavbarBrand } from 'react-bootstrap';
import { PRODUCT_NAME } from "../../constants/constants";

interface DefaultThemeHeaderProps {
  title?: string;
  href: (url: string) => void;
}

const DefaultThemeHeader: React.FunctionComponent<DefaultThemeHeaderProps> = ({title, href}) => {
  return (
    <Navbar className="sb-topnav bg-dark" variant="dark" expand>
      <Button id="sidebarToggle" className="mx-2 position-absolute" variant="" size="sm" onClick={sidenav_onclick}>
        <i className="fas fa-bars fa-fw" style={{fontSize: '1.6em'}}></i>
      </Button>
      <NavbarBrand className="text-center">
        {PRODUCT_NAME}
      </NavbarBrand>
    </Navbar>
  );

  function sidenav_onclick(e: any) {
    e.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
  }
};

export default DefaultThemeHeader;
