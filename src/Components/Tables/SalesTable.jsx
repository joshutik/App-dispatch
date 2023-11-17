// // EntryFieldTable.js

// import React, { useState } from "react";
// import "./SalesTable.css";

// const SalesTable = () => {
//   const [tableData, setTableData] = useState([
//     { name: "", value: "" },
//     { name: "", value: "" },
//     { name: "", value: "" },
//     { name: "", value: "" },
//     { name: "", value: "" },
//     // Add more rows as needed
//   ]);

  

 

//   // const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (id, field, value) => {
//     const updatedData = tableData.map(row =>
//       row.id === id ? { ...row, [field]: value } : row
//     );
//     setTableData(updatedData);
//   };

//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const openPopup = () => {
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//   };

//   // const handleSearch = (e) => {
//   //   setSearchTerm(e.target.value.toLowerCase());
//   // };
//   return (
    

//     <div className="container-fluid">
//        <div>
//       <button onClick={openPopup}>Save</button>

//       {isPopupVisible && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={closePopup}>&times;</span>
//             <p>This is your popup content.</p>
//           </div>
//         </div>
//       )}
//     </div>
    
//       {/* <div className="">
//         <table className="m-5">
//           <thead className="">
//             <tr className="text-center">
//               <th></th>
//               <th>Date</th>
//               <th>Number</th>
//               <th>Series</th>
//               <th>Quantity Delivered</th>
//               <th>Amount paid</th>
//               <th>Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((row) => (
//               <tr key={row.id}>
//                 <td>{row.id}</td>
//                 <td>
//                   <input className=""
//                     type="date"
//                     value={row.name}
//                     onChange={(e) =>
//                       handleInputChange(row.id, "name", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td className="">
//                   <input
//                     type="number"
//                     value={row.value}
//                     onChange={(e) =>
//                       handleInputChange(row.id, "value", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="Number"
//                     value={row.value}
//                     onChange={(e) =>
//                       handleInputChange(row.id, "value", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="Number"
//                     value={row.value}
//                     onChange={(e) =>
//                       handleInputChange(row.id, "value", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={row.value}
//                     onChange={(e) =>
//                       handleInputChange(row.id, "value", e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={row.value}
//                     onChange={(e) =>
//                       handleInputChange(row.id, "value", e.target.value)
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div> */}
//     </div>
//   );
// };

// export default SalesTable;
