import React from 'react';
import { Nav } from 'react-bootstrap';
import { Categories } from "../../constants/menus";

interface DefaultThemeMenuProps {
  href: (url: string) => void;
}

const DefaultThemeMenu: React.FunctionComponent<DefaultThemeMenuProps> = ({href}) => {
  return (
    <div id="layoutSidenav_nav">
      <Nav className="accordion sb-sidenav sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <Nav>
            {Categories.map((category, i) => (
              <div key={i}>
                <div className="sb-sidenav-menu-heading">{category.name}</div>
                {category.menus.map((menu, j) => (
                  <Nav.Link key={j} onClick={() => href(menu.path)} active={isActive(menu.path)}>
                    <div className="sb-nav-link-icon"><i className={`fa-solid ${menu.icon} fa-fw`}></i></div>
                    <span className={'' + menu.color}>{menu.name}</span>
                  </Nav.Link>
                ))}
              </div>
            ))}
          </Nav>
        </div>
      </Nav>
    </div>
  );

  function isActive(match: string) {
    return window.location.pathname.startsWith(match);
  }
};

export default DefaultThemeMenu;
