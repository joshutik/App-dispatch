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
import Confirmpage from './Components/Confirmation/Confirmpage';
import Establish from './Components/Establishment/Establish';
import Adminregister from './Components/Register/Adminregister.jsx'
// import Managerpage from './Components/Managerpage/Managerpage';
import Riderlogin from './Components/Riderlogin/Riderlogin';
import Managmentlog from './Components/Managementlog/Managmentlog';
import Managerpage from './Components/Managerpage/Managerpage';
import Ridercompo from './Components/Ridercomponent/Ridercompo';
import Managerlinkmodal from './Components/Copymanagermodal/Managerlinkmodal.jsx';
import Ownerregister from './Components/Ownerregister/Ownerregister.jsx';
// import Confirmlink from './Components/Confirmastionlink/Confirmlink';
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
      path: "/log-owner",
      element: <Ownerslog />,
    },
    {
      path: "/admin-login",
      element: <Adminslogin />,
    },
    {
      path: "/Owner-login",
      element: <Ownerslogin />,
     
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
      path: "/add-order",
      element: <Addorder/>,
    },
    {
      path: "/edit-company",
      element: <Adminpage2/>,
    },
    {
      path: "/confirm",
      element: <Confirmpage/>,
    },
    {
      path: "/rider-page",
      element: <Rider/>,
    },
    {
      path: "/rider-page-1",
      element: <Establish/>,
    },
    {
      path: "/rider-page-2",
      element: <Rider/>,
    },
    {
      path: "/manager-page",
      element: <Managmentlog/>,
    },
  
    {
      path: "/riders-details",
      element: <Riderlogin/>,
    },
    {
      path: "/riders-form",
      element: <Lottery/>,
    },
    {
      path: "/admin-page/:id",
      element: <Managerpage/>,
    },
    {
      path: "/slide-rider",
      element: <Ridercompo/>,
    },
    {
      path: "/admin-register",
      element: <Adminregister/>,
    },
    {
      path: "/owner-register",
      element: <Ownerregister/>,
    },
    {
      path: "/managercopy-modal",
      element: <Managerlinkmodal/>,
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
