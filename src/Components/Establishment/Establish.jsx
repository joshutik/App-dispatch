// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "./Establish.css";
// // import img4 from "../Assets/card img-1.png";
// // // import img5 from "../Assets/card img-2.png";
// // // import img6 from "../Assets/card img-3.png";
// // import img7 from "../Assets/Rectangle 21 (3).png";
// // import { Link } from "react-router-dom";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import Example from "../Modal/Modal";

// // const Establish = () => {
// //   const [responseData, setResponseData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get("http://127.0.0.1:9090/establishment/");

// //         if (response.status === 200) {
// //           setResponseData(response.data);
// //           console.log(response.data)
// //         } else {
// //           console.error("Failed to fetch data");
// //         }
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);
// //   return (
// //     <div>
// //       <div className="row mt-5 gy-4">
// //         <div className="rounded-5 overlay">
// //         {responseData.map((item, index) => (
// //           <div key={index} class="container position-relative">
// //             <Link to="/admin-page">
// //             <img className="w-100 " src={img4} alt="" />
// //             </Link>
// //             <div className=" text-light fs-4 my-3">
// //             <Example />
// //               {/* <i class="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"></i> */}
// //             </div>
// //             <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
// //             {item.name}
// //             </div>

// //             {/* modal */}
// //             {/* {isVisible && (<div className="container-fluid modal">
// //                             <div className="overlay"></div>
// //                             <div className="row align-items-center justify-content-center overlay-1">
// //                               <div className="col-lg-6 col-md-5 col-sm-4 ">
// //                                 <div className="card text-center py-5 rounded-5 border-3 shadow modal-content">
// //                                   <div className=" my-4 mt-5">
// //                                     <a
// //                                       href="/"
// //                                       className="copy rounded-pill text-light px-5 py-4 fw-bold"
// //                                     >
// //                                       Copy manager link
// //                                     </a>
// //                                   </div>
// //                                   <div className="my-4">
// //                                     <a
// //                                       href="/"
// //                                       className="delete btn rounded-pill px-5 py-4 approved text-danger fw-bold"
// //                                     >
// //                                       Delete establishment
// //                                     </a>
// //                                   </div>
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </div>)} */}

// //             <div className="middle">
// //             </div>
// //           </div>
// //           ))}
// //           <div class="container">
// //             <img className="w-100 image" src={img7} alt="" />
// //             <div className="middle">
// //               <div className="text">
// //                 <Link to="/edit-company">
// //                   <i class="bi bi-plus-lg"></i>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Establish;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Establish.css';
// import img4 from '../Assets/card img-1.png';
// import img7 from '../Assets/Rectangle 21 (3).png';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Example from '../Modal/Modal';

// const Establish = () => {
//   const [responseData, setResponseData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:9090/establishment/');

//         if (response.status === 200) {
//           setResponseData(response.data);
//           console.log(response.data);
//         } else {
//           console.error('Failed to fetch data');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div>
//       <div className="row mt-5 gy-4">
//         <div className="rounded-5 overlay">
//           {responseData.map((item, index) => (
//             <div key={index} className="container position-relative">
//               <Link to="/admin-page">
//                 <img className="w-100 " src={img4} alt="" />
//               </Link>
//               <div className="text-light fs-4 my-3">
//                 <Example establishmentId={item.id} />
//               </div>
//               <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
//                 {item.name}
//               </div>
//               <div className="middle"></div>
//             </div>
//           ))}
//           <div className="container">
//             <img className="w-100 image" src={img7} alt="" />
//             <div className="middle">
//               <div className="text">
//                 <Link to="/edit-company">
//                   <i className="bi bi-plus-lg"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Establish;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Establish.css";
import img4 from "../Assets/card img-1.png";
import img7 from "../Assets/Rectangle 21 (3).png";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "../Modal/Modal";

const Establish = () => {
  const [responseData, setResponseData] = useState([]);
  const navigate = useNavigate();
  // const showCompany = (company) =>{
  //   console.log(company)
  //   navigate(`/company/${company.id}`)
  // }

  // const handleCompanyClick = (companyId) => {
  //   // Assuming you're using react-router-dom for navigation
  //   // navigate(`/edit-company/${companyId}`);
  //   console.log("companyId", companyId);
  // };

  const handleCompanyId = (id) => {
    console.log("company", id)
   navigate(`/company/${id}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://distachapp.onrender.com/establishment/"
        );

        console.log(response, "this is the one")

        if (response.status === 200) {
          setResponseData(response.data);
          console.log(response.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="row align-item-center justify-content-center mt-5 gy-4">
        
         <div className="rounded-5 overlay col-lg-4 col-md-4 col-sm-12">
          {responseData.map((item, index) => (
            <div key={index} className="container position-relative">
              <div onClick={() => handleCompanyId(item.id)}>
                 {/* onClick={() => showCompany(item)}  */}
                <img className="w-100 " src={img4} alt="" />
              </div>
              <Link to="edit-company">
                <i className="bi bi-plus-lg"></i>
              </Link>
              <div className="text-light fs-4 my-3">
                <Example establishmentId={item.id} />
              </div>
              <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
                {item.name}
              </div>
              <div className="middle"></div>
            </div>
          ))}
          <div className="container">
            <img className="w-100 image" src={img7} alt="" />
            <div className="middle">
              <div className="text">
                <Link to="/edit-company">
                  <i className="bi bi-plus-lg"></i>
                </Link>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Establish;
