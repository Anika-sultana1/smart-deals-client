import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './Components/Home/Home.jsx';
import AllProducts from './Components/AllProducts/AllProducts.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import CreateProduct from './Components/CreateProduct/CreateProduct.jsx';
import MyBids from './Components/MyBids/MyBids.jsx';
import MyProducts from './Components/MyProducts/MyProducts.jsx';
import PrivateRoutes from './Components/PrivateRoutes.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index:true,
        element: <PrivateRoutes><Home></Home></PrivateRoutes>,
      },
      {
        path: '/allProducts',
        Component: AllProducts,
      },
      {
        path: '/myProducts',
        Component: MyProducts,
      },
      {
        path: '/myBids',
        Component: MyBids,
      },
      {
        path: '/createProduct',
        Component: CreateProduct,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
   // route setup
{
  path: '/productsDetails/:id',
  loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
 Component: ProductDetails,
}

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />,
    </AuthProvider>
   
  </StrictMode>,
)
