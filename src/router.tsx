import { ReactElement } from "react";
import DefaultTheme from "./routes/theme/DefaultTheme";
import Dashboard from "./routes/pages/Dashboard";
import Credit from "./routes/pages/Credit";
import NotFound from "./routes/pages/error/NotFound";

interface Route {
  uri: string[];
  element: ReactElement;
}

export const routes: Route[] = [
  {
    uri: ['/', '/dashboard'],
    element: <DefaultTheme element={<Dashboard/>}/>
  },
  {
    uri: ['/credit'],
    element: <DefaultTheme element={<Credit/>}/>
  },
  {
    uri: ['*'],
    element: <NotFound></NotFound>,
  }
];