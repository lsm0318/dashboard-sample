import React, { ReactElement } from 'react';
import DashboardThemeHeader from './DashboardThemeHeader';
import DashboardThemeMain from './DashboardThemeMain';
import DashboardThemeMenu from './DashboardThemeMenu';

interface DashboardThemeProps {
  element?: ReactElement;
  component?: ReactElement;
}

const DashboardTheme: React.FunctionComponent<DashboardThemeProps> = ({
  element, component
}) => {

  function toggle() {
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', String(document.body.classList.contains('sb-sidenav-toggled')));
  }

  return (
    <div className="d-flex" id="wrapper">
      <DashboardThemeMenu />
      <div id="page-content-wrapper">
        <DashboardThemeHeader toggle={toggle} />
        <DashboardThemeMain element={element} component={component} />
      </div>
    </div>
  );
};

export default DashboardTheme;
