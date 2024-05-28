import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Cart from './components/Cart.jsx';
import Error from './components/Error.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResMenu from './components/ResMenu.jsx';
import About from './components/About.jsx';
import AddedCart from './components/AddedCart.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Cart/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path:"restaurants/:id",
        element:<ResMenu/>
      },
      {
        path:"/cart",
        element:<AddedCart/>
      }
    ],
    errorElement:<Error/>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
