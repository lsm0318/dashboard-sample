import React from 'react';
import { DefaultThemeProps } from './DefaultTheme';
import DefaultThemeMenu from './DefaultThemeMenu';
import DefaultThemeMain from './DefaultThemeMain';

interface DefaultThemeBodyProps extends DefaultThemeProps {
  href: (url: string) => void;
}

const DefaultThemeBody: React.FunctionComponent<DefaultThemeBodyProps> = ({ element, component, href }) => {
  return (
    <div id="layoutSidenav" className={component ? 'full-height' : ''}>
      <DefaultThemeMenu href={href}/>
      <DefaultThemeMain element={element} component={component}/>
    </div>
  );
};

export default DefaultThemeBody;
