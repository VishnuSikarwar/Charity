// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './components/Home.jsx'; // Ensure this component exists
import About from './components/About.jsx'; // Ensure this component exists
import SingleCauses from './components/SingleCauses.jsx'; // Ensure this component exists
import SingleEvent from './components/SingleEvent.jsx'; // Ensure this component exists
import SingleBlog from './components/SingleBlog.jsx';
import BlogPage from './components/BlogPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/SingleCauses", element: <SingleCauses /> },
      { path: "/SingleEvent", element: <SingleEvent /> },
      { path: "/SingleBlog", element: <SingleBlog /> },
      { path: "/BlogPage", element: <BlogPage /> },
      { path: "*", element: <h1>There is no page</h1> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
