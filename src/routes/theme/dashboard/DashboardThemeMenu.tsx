import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { Categories } from '../../../constants/menus';
import { PRODUCT_NAME } from "../../../constants/constants";

const DashboardThemeMenu = () => {
  const navigate = useNavigate();

  function move(url: string) {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
      return;
    }
    navigate(url, {replace: true});
  }

  function isActive(uri: string) {
    return window.location.href.endsWith(uri);
  }

  return (
    <div className="border-end" id="sidebar-wrapper">
      <div className="sidebar-heading pointer" onClick={() => move('/')} style={{width: '240px'}}>
        <small>{PRODUCT_NAME}</small>
      </div>
      {Categories.map((category, i) =>
        <div key={'category-' + i}>
          <div className="mt-4 mb-2">
            <span className="text-muted px-3">{category.name}</span>
          </div>
          <ListGroup variant="flush">
            {category.menus.map((menu, i) =>
              <ListGroup.Item key={'menu-' + i} className="px-3 py-2 border-0" action active={isActive(menu.path)}
                              onClick={() => move(menu.path)}>
                <i className={menu.icon + ' fa-fw me-2'}></i> {menu.name}
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default DashboardThemeMenu;
