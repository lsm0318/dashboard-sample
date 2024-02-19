import { ReactElement } from "react";
import Dashboard from "./routes/pages/Dashboard";
import Credit from "./routes/pages/Credit";
import NotFound from "./routes/pages/error/NotFound";
import DashboardTheme from "./routes/theme/dashboard/DashboardTheme";

interface Route {
  uri: string[];
  element: ReactElement;
}

export const routes: Route[] = [
  {
    uri: ['/', '/dashboard'],
    element: <DashboardTheme element={<Dashboard/>}/>
  },
  {
    uri: ['/credit'],
    element: <DashboardTheme element={<Credit/>}/>
  },
  {
    uri: ['*'],
    element: <NotFound></NotFound>,
  }
];