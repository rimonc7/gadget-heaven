import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';
import WishList from './Components/WishList/WishList';
import Blogs from './Components/Blogs/Blogs';
import Statistics from './Components/Statistics/Statistics';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products.json")
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
            loader: () => fetch("/products.json")
          },
          {
            path: "wishlist",
            element: <WishList></WishList>,
            loader: () => fetch("/products.json")
          },
        ]
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
        loader: () => fetch('/blogs.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
