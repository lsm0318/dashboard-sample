import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './router';

import './assets/css/fontawesome.css';
import './assets/css/styles.css';
import './assets/css/common.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Suspense>
      <Routes>
        {routes.map((route) =>
          route.uri.map((uri) =>
            <Route path={uri} element={route.element}/>
          )
        )}
      </Routes>
    </Suspense>
  </BrowserRouter>
);