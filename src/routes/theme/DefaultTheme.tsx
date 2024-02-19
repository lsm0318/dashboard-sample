import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import DefaultThemeHeader from './DefaultThemeHeader';
import DefaultThemeBody from './DefaultThemeBody';

export interface DefaultThemeProps {
  title?: string;
  element?: JSX.Element;
  component?: JSX.Element;
}

const DefaultTheme: React.FunctionComponent<DefaultThemeProps> = ({ title, element, component }) => {
  const navigate = useNavigate();

  function href (url: string) {
    if (document.body.classList.contains('sb-sidenav-toggled')) {
      document.body.classList.toggle('sb-sidenav-toggled');
    }

    if (url.startsWith('http')) {
      window.open(url, '_blank');
      return;
    }

    navigate(url, { replace: true });
  }

  return (
    <>
      <DefaultThemeHeader title={title} href={href}/>
      <DefaultThemeBody element={element} component={component} href={href}/>
    </>
  );
};

export default DefaultTheme;
