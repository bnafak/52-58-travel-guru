import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Navbar from './components/header/Navbar';
import Banner from './components/header/Banner';
import Home from './components/home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    childred:[
      {
        path: '/',
        element:<Home></Home>,
      },
       {
        path: '/navbar',
        element:<Navbar></Navbar>,
       },
       {
        path: '/banner',
        element: <Banner></Banner>
       },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
