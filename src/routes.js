import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import LeaveManagementPage from './pages/LeaveManagement';
import Message from './pages/message';
import JobDescription from './pages/JobDescription';
import Performance from './pages/Performance';
import TargetView from './pages/TargetView';
import TargetSetup from './pages/TargetSetup';
// import { Register } from './sections/auth/Register';
// import RegisterForm from './sections/auth/login/Register';
import RegisterForm from './sections/auth/login/Register';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'message', element: <Message /> },
        { path: 'leavemgmt', element: <LeaveManagementPage /> },
        { path: 'JobDesc', element: <JobDescription /> },
        { path: 'performance', element: <Performance /> },
        { path: 'target-view', element: <TargetView /> },
        { path: 'target-setup', element: <TargetSetup /> },
        // { path: 'Register', element: <Register /> },

      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
     
    },
    {
      path: 'Register',
      element: <RegisterForm />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
