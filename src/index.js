import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
// import Landingpage from './Components/Landpage/Landingpage';
import Lotery from './Components/Lottry/Lotery';
import Ownerslogin from './Components/Ownerlogin/Ownerslogin';
import Ownerslog from './Components/Overview/Ownerslog';
import Adminslogin from './Components/Adminlogin/Adminslogin';
import Rider from './Components/Riderpage/Rider';
import Lottery from './Components/Lotery/Lottery';
import Addorder from './Components/Addneworder/Addorder';
import Adminpage2 from './Components/Adminpage2/Adminpage2';
import Confirmlink from './Components/Confirmastionlink/Confirmlink';
// import Approved from './Components/Pending/Approved';

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/Login",
      element: <Lotery />,
    },
 
    {
      path: "/Log-owner",
      element: <Ownerslog />,
    },
    {
      path: "/Admin-login",
      element: <Ownerslogin />,
    },
    {
      path: "/Owner-login",
      element: <Adminslogin />,
    },
    {
      path: "/Rider-login",
      element: <Rider />,
    },
    {
      path: "/Add-more",
      element: <Lottery />,
    },
    {
      path: "/pending",
      element: <pending />,
    },
    {
      path: "/add-order",
      element: <Addorder/>,
    },
    {
      path: "/edit-company",
      element: <Adminpage2/>,
    },
    {
      path: "/confirm",
      element: <Confirmlink/>,
    },
 
    
   
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
