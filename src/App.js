import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "blog-page",
      element: <BlogPage />,
      children: [
        {
          path: "create-post", // Nested route for creating a post
          element: <BlogPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
