// import React, { useState } from "react";
// import "./Rider.css";
// import img1 from "../Assets/Rectangle 21 (2).png";
// import img2 from "../Assets/Rectangle 21 (1).png";
// import img3 from "../Assets/Rectangle 21.png";
// import img4 from "../Assets/card img-1.png";
// import img5 from "../Assets/card img-2.png";
// import img6 from "../Assets/card img-3.png";
// import { Link } from "react-router-dom";

// const Rider = ({onpageSwitch}) => {
// const [activeState, setActiveState] = useState('establishmentLogin');
  
//   return (
//     <div className="container-fluid w-100">
//       <div className="establish">
//         <div className="row justify-content-center align-items-center">
//           <div className="col-lg-8 col-md-6 col-sm-12 p-5">
//             <p className="fs-3 text-light">Buenas noches,</p>
//             <h1 className="text-light text-center fw-bold">ADMIN DE LOTERIA</h1>
//           </div>
//         </div>
//       </div>
//       <div className="row justify-content-center align-item-center">
       
//         <h1 onClick={
          
//         }>esterblish</h1>
//         <h1>rider</h1>
//        {activeState === 'establishmentLogin' && (<div className="row justify-content-center">
//           <div className="">
//             <div className="card rounded-0 border-0">
//               <div className="card-body w-100">
//                 <div>
//                   <input
//                     type="search"
//                     className="form-control rounded-pill mt-5"
//                   />
//                   <div className="row mt-5 gy-4">
//                     <div className="">
//                       <div className="rounded-5 overlay">
//                         <div class="container">
//                           <img className="w-100 image" src={img1} alt="" />
//                           <div className="middle">
//                             <div className="text">
//                               <Link to="/">
//                                 <i class="bi bi-plus-lg"></i>
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="container">
//                           <img className="w-100 image" src={img2} alt="" />

//                           <div className="middle">
//                             <div className="text">
//                               <Link to="/">
//                                 <i class="bi bi-plus-lg"></i>
//                               </Link>
//                             </div>
//                             <p>Lottery company</p>
//                           </div>
//                         </div>
//                         <div class="container">
//                           <img className="w-100 image" src={img3} alt="" />
//                           <div className="middle">
//                             <div className="text">
//                               <Link to="/">
//                                 <i class="bi bi-plus-lg"></i>
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="container">
//                           <img className="w-100 image" src={img3} alt="" />
//                           <div className="middle">
//                             <div className="text">
//                               <Link to="/Add-more">
//                                 <i class="bi bi-plus-lg"></i>
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>)}
//       </div>


//       <div className="container-fluid footer py-4 bg-light text-center mt-5 mb-0">
//         <div className="row justify-content-center ">
//           <div className="col-lg-4 col-md-12 col-sm-6">
//             <p className="mb-0">
//               <i class="bi bi-geo-alt-fill "></i>
//               Avda de Espana 2428710-EL MOLAR (MADRID)
//             </p>
//           </div>

//           <div className="col-lg-4 col-md-12 col-sm-6">
//             <i class="bi bi-telephone-fill"></i>+918410517
//           </div>

//           <div className="col-lg-4 col-md-12 col-sm-6">
//             <i class="bi bi-envelope-at-fill"></i>
//             <a href="/">loteriaelmolar@yahoo.es</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rider;

