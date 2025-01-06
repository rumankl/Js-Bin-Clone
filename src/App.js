import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './components/RootLayout';
import BlogPage from './pages/BlogPage';


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
      ],

    },
    {
      path: 'blog-page',
      element: <BlogPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
