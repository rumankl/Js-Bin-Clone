
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RootLayout from './components/RootLayout';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children :[
        {
          index:true,
          element: <HomePage />

        },
        {
          path: 'about-page',
          element: <AboutPage />
        },
        {
          path: 'contact-page',
          element: <ContactPage />
        }
      ]
    },
  
  ]);
  return <RouterProvider router={router} />
}

export default App