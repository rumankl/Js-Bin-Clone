import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './components/RootLayout';
import All from './pages/All';
import MergPage from './pages/MergPage';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'html-page',
          element: <HomePage />,
        },
        {
          path: "/html-page/css-page",
          element: <HomePage />,
        },
        {
          path: "/all-page",
          element: <All />,
        },
        {
          path: "/Merg-page",
          element: <MergPage />
        },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
