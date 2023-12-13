// // // import React, { useState } from "react";
// // // import Table from "react-bootstrap/Table";

// // // function ResponsiveExample() {
// // //   const columnTypes = [
// // //     "Date",
// // //     "Series",
// // //     "Quantity delivered",
// // //     "Amount paid",
// // //     "Balance",
// // //     "Discount",
// // //     "Confirmation",

// // //   ];

// // //   const [cellValues, setCellValues] = useState(
// // //     Array.from({ length: 3 }, () =>
// // //       Array.from({ length: 7 }, () => ({ value: "", type: "text" }))
// // //     )
// // //   );

// // //   // Initialize confirmationStatus state
// // //   const [confirmationStatus, setConfirmationStatus] = useState(
// // //     Array.from({ length: 3 }, () => Array.from({ length: 8 }, () => "pending"))
// // //   );

// // //   const handleInputChange = (rowIndex, colIndex, value) => {
// // //     const newCellValues = [...cellValues];
// // //     newCellValues[rowIndex][colIndex].value = value;
// // //     setCellValues(newCellValues);
// // //   };

// // //   const handleConfirmationClick = (rowIndex, colIndex) => {
// // //     const newStatus = [...confirmationStatus];
// // //     newStatus[rowIndex][colIndex] = "submitted";
// // //     setConfirmationStatus(newStatus);
// // //   };

// // //   return (
// // //     <Table responsive>
// // //       <thead>
// // //         <tr className="text-center">
// // //           {columnTypes.map((type, index) => (
// // //             <th key={index}>{type}</th>
// // //           ))}
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         {cellValues.map((row, rowIndex) => (
// // //           <tr key={rowIndex}>
// // //             {row.map((cell, colIndex) => (
// // //               <td key={colIndex}>
// // //                 {colIndex === 6 && (
// // //                   <>
// // //                     <input
// // //                       type={columnTypes[colIndex]}
// // //                       value={cell.value}
// // //                       onChange={(e) =>
// // //                         handleInputChange(rowIndex, colIndex, e.target.value)
// // //                       }
// // //                       onClick={(e) => e.stopPropagation()}
// // //                     />
// // //                     <p
// // //                       onClick={() =>
// // //                         handleConfirmationClick(rowIndex, colIndex)
// // //                       }
// // //                       disabled={
// // //                         confirmationStatus[rowIndex][colIndex] === "submitted"
// // //                       }
// // //                     >
// // //                       {confirmationStatus[rowIndex][colIndex]}
// // //                     </p>
// // //                   </>
// // //                 )}
// // //                 {colIndex !== 6 && (
// // //                   <input
// // //                     type={columnTypes[colIndex]}
// // //                     value={cell.value}
// // //                     onChange={(e) =>
// // //                       handleInputChange(rowIndex, colIndex, e.target.value)
// // //                     }
// // //                     onClick={(e) => e.stopPropagation()}
// // //                   />
// // //                 )}
// // //               </td>
// // //             ))}
// // //           </tr>
// // //         ))}
// // //       </tbody>
// // //     </Table>
// // //   );
// // // }

// // // export default ResponsiveExample;

// // import React, { useState } from "react";
// // import Table from "react-bootstrap/Table";
// // // import Approvedmodal from "../Aprrovedmodal/Approvedmodal";

// // function ResponsiveExample() {
// //   const columnTypes = [
// //     "Date",
// //     "Series",
// //     "Quantity delivered",
// //     "Amount paid",
// //     "Balance",
// //     "Discount",
// //     "Confirmation",
// //   ];

// //   const [cellValues, setCellValues] = useState(
// //     Array.from({ length: 3 }, () =>
// //       Array.from({ length: 7 }, () => ({ value: "", type: "text" }))
// //     )
// //   );

// //   const [confirmationStatus, setConfirmationStatus] = useState(
// //     Array.from({ length: 3 }, () => Array.from({ length: 8 }, () => "pending"))
// //   );

// //   const handleInputChange = (rowIndex, colIndex, value) => {
// //     const newCellValues = [...cellValues];
// //     newCellValues[rowIndex][colIndex].value = value;
// //     setCellValues(newCellValues);

// //     // Save the input to the backend (you need to replace the URL with your actual API endpoint)
// //     saveDataToBackend(rowIndex, colIndex, value);
// //   };

// //   const handleConfirmationClick = (rowIndex, colIndex) => {
// //     const newStatus = [...confirmationStatus];
// //     newStatus[rowIndex][colIndex] = "Approved";
// //     setConfirmationStatus(newStatus);

// //     // Save the confirmation status to the backend (you need to replace the URL with your actual API endpoint)
// //     saveConfirmationToBackend(rowIndex, colIndex);
// //   };

// //   // Function to save data to the backend
// //   const saveDataToBackend = async (rowIndex, colIndex, value) => {
// //     const url = "your_backend_api_url";
// //     const data = {
// //       rowIndex,
// //       colIndex,
// //       value,
// //     };

// //     try {
// //       const response = await fetch(url, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(data),
// //       });

// //       if (!response.ok) {
// //         throw new Error("Failed to save data to the backend");
// //       }

// //       // Handle successful response if needed
// //     } catch (error) {
// //       console.error("Error saving data to the backend:", error);
// //     }
// //   };

// //   // Function to save confirmation status to the backend
// //   const saveConfirmationToBackend = async (rowIndex, colIndex) => {
// //     const url = "your_backend_api_url";
// //     const data = {
// //       rowIndex,
// //       colIndex,
// //       confirmationStatus: "submitted",
// //     };

// //     try {
// //       const response = await fetch(url, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(data),
// //       });

// //       if (!response.ok) {
// //         throw new Error("Failed to save confirmation status to the backend");
// //       }

// //       // Handle successful response if needed
// //     } catch (error) {
// //       console.error("Error saving confirmation status to the backend:", error);
// //     }
// //   };

// //   return (
// //     <Table responsive>
// //       <thead>
// //         <tr className="text-center">
// //           {columnTypes.map((type, index) => (
// //             <th key={index}>{type}</th>
// //           ))}
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {cellValues.map((row, rowIndex) => (
// //           <tr key={rowIndex}>
// //             {row.map((cell, colIndex) => (
// //               <td key={colIndex}>
// //                 {colIndex === 6 && (
// //                   <>
// //                     <input
// //                       type={columnTypes[colIndex]}
// //                       value={cell.value}
// //                       onChange={(e) =>
// //                         handleInputChange(rowIndex, colIndex, e.target.value)
// //                       }
// //                       onClick={(e) => e.stopPropagation()}
// //                     />
// //                     <p
// //                       onClick={() =>
// //                         handleConfirmationClick(rowIndex, colIndex)
// //                       }
// //                       disabled={
// //                         confirmationStatus[rowIndex][colIndex] === "submitted"
// //                       }
// //                     >
// //                       {confirmationStatus[rowIndex][colIndex]}
// //                     </p>
// //                   </>
// //                 )}
// //                 {colIndex !== 6 && (
// //                   <input
// //                     type={columnTypes[colIndex]}
// //                     value={cell.value}
// //                     onChange={(e) =>
// //                       handleInputChange(rowIndex, colIndex, e.target.value)
// //                     }
// //                     onClick={(e) => e.stopPropagation()}
// //                   />
// //                   )}
// //               </td>
// //             ))}
// //           </tr>
// //         ))}
// //       </tbody>
// //     </Table>
// //   );
// // }

// // export default ResponsiveExample;
// import React, { useState } from "react";
// import Table from "react-bootstrap/Table";

// function ResponsiveExample() {
//   const columnTypes = [
//     "Date",
//     "Series",
//     "Quantity delivered",
//     "Amount paid",
//     "Balance",
//     "Discount",
//     "Confirmation",
//   ];

//   const [cellValues, setCellValues] = useState(
//     Array.from({ length: 3 }, () =>
//       Array.from({ length: 7 }, () => ({ value: "", type: "text" }))
//     )
//   );

//   const [confirmationStatus, setConfirmationStatus] = useState(
//     Array.from({ length: 3 }, () => Array.from({ length: 8 }, () => "pending"))
//   );

//   const handleInputChange = (rowIndex, colIndex, value) => {
//     const newCellValues = [...cellValues];
//     newCellValues[rowIndex][colIndex].value = value;
//     setCellValues(newCellValues);
//   };

//   const handleConfirmationClick = (rowIndex, colIndex, status) => {
//     const newStatus = [...confirmationStatus];
//     newStatus[rowIndex][colIndex] = status;
//     setConfirmationStatus(newStatus);
//   };

//   return (
//     <Table responsive>
//       <thead>
//         <tr className="text-center">
//           {columnTypes.map((type, index) => (
//             <th key={index}>{type}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {cellValues.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {row.map((cell, colIndex) => (
//               <td key={colIndex}>
//                 {colIndex === 6 && (
//                   <>
//                     <input
//                       type={columnTypes[colIndex]}
//                       value={cell.value}
//                       onChange={(e) =>
//                         handleInputChange(rowIndex, colIndex, e.target.value)
//                       }
//                       onClick={(e) => e.stopPropagation()}
//                     />
//                     <button
//                       onClick={() =>
//                         handleConfirmationClick(
//                           rowIndex,
//                           colIndex,
//                           "Pending"
//                         )
//                       }
//                       disabled={
//                         confirmationStatus[rowIndex][colIndex] === "submitted"
//                       }
//                     >
//                       Pending
//                     </button>
//                     <button
//                       onClick={() =>
//                         handleConfirmationClick(
//                           rowIndex,
//                           colIndex,
//                           "Approved"
//                         )
//                       }
//                       disabled={
//                         confirmationStatus[rowIndex][colIndex] === "submitted"
//                       }
//                     >
//                       Approve
//                     </button>
//                   </>
//                 )}
//                 {colIndex !== 6 && (
//                   <input
//                     type={columnTypes[colIndex]}
//                     value={cell.value}
//                     onChange={(e) =>
//                       handleInputChange(rowIndex, colIndex, e.target.value)
//                     }
//                     onClick={(e) => e.stopPropagation()}
//                   />
//                 )}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// }

// export default ResponsiveExample;

import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ResponsiveExample() {
  const columnTypes = [
    "Date",
    "Series",
    "Quantity delivered",
    "Amount paid",
    "Balance",
    "Discount",
    "Confirmation",
  ];

  const [cellValues, setCellValues] = useState(
    Array.from({ length: 3 }, () =>
      Array.from({ length: 7 }, () => ({ value: "", type: "text" }))
    )
  );

  const [confirmationStatus, setConfirmationStatus] = useState(
    Array.from({ length: 3 }, () => "pending")
  );

  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [modalRowIndex, setModalRowIndex] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (action, rowIndex) => {
    setModalAction(action);
    setModalRowIndex(rowIndex);
    setShowModal(true);
  };

  const handleInputChange = async (rowIndex, colIndex, value) => {
    const newCellValues = [...cellValues];
    newCellValues[rowIndex][colIndex].value = value;
    setCellValues(newCellValues);

    // Save the data to the backend
    const url = "your_backend_api_url";
    const data = {
      rowIndex,
      colIndex,
      value,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to save data to the backend");
      }
        // Check if the current row is the last one
        if (rowIndex === cellValues.length - 1) {
          // Add a new row to cellValues
          const newRow = Array.from({ length: 7 }, () => ({ value: "", type: "text" }));
          setCellValues([...cellValues, newRow]);
        }
    } catch (error) {
      console.error("Error saving data to the backend:", error);
    }
     // Fetch the updated data from the backend and update the state
     const fetchDataResponse = await fetch("your_backend_fetch_url");
     if (fetchDataResponse.ok) {
       const fetchedData = await fetchDataResponse.json();
       setCellValues(fetchedData.cellValues);
       setConfirmationStatus(fetchedData.confirmationStatus);
     } else {
       throw new Error("Failed to fetch updated data from the backend");
     }
  };

  const handleConfirmationClick = async (rowIndex, status) => {
    const newStatus = [...confirmationStatus];
    newStatus[rowIndex] = status;
    setConfirmationStatus(newStatus);

    // Save the confirmation status to the backend
    const url = "your_backend_api_url";
    const data = {
      rowIndex,
      confirmationStatus: status,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to save confirmation status to the backend");
      }
    } catch (error) {
      console.error("Error saving confirmation status to the backend:", error);
    }
  };

  const handleModalAction = () => {
    if (modalAction === "Approve") {
      handleConfirmationClick(modalRowIndex, "Approved");
    } else if (modalAction === "Pending") {
      handleConfirmationClick(modalRowIndex, "Pending");
    }

    handleCloseModal();
  };

  useEffect(() => {
    // Load data from the backend, including confirmation statuses
    const loadDataFromBackend = async () => {
      try {
        const url = "your_backend_api_url";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data from the backend");
        }

        const data = await response.json();
        setConfirmationStatus(data.confirmationStatus);
        setCellValues(data.cellValues);
      } catch (error) {
        console.error("Error loading data from the backend:", error);
      }
    };

    loadDataFromBackend();
  }, []);

  return (
    <>
      <Table responsive>
        <thead>
          <tr className="text-center">
            {columnTypes.map((type, index) => (
              <th key={index}>{type}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cellValues.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {colIndex === 6 && (
                    <>
                      {confirmationStatus[rowIndex] === "Pending" && (
                        <Button
                          onClick={() =>
                            handleShowModal("Approve", rowIndex)
                          }
                        >
                          Approve
                        </Button>
                      )}
                      {confirmationStatus[rowIndex] === "Approved" && (
                        <Button
                          onClick={() =>
                            handleShowModal("Pending", rowIndex)
                          }
                        >
                          Pending
                        </Button>
                      )}
                      {confirmationStatus[rowIndex] !== "Approved" &&
                        confirmationStatus[rowIndex] !== "Pending" && (
                          <>
                            <Button
                              onClick={() =>
                                handleShowModal("Pending", rowIndex)
                              }
                              disabled={
                                confirmationStatus[rowIndex] === "Approved"
                              }
                            >
                              Pending
                            </Button>
                            <Button
                              onClick={() =>
                                handleShowModal("Approve", rowIndex)
                              }
                              disabled={
                                confirmationStatus[rowIndex] === "Pending"
                              }
                            >
                              Approve
                            </Button>
                          </>
                        )}
                    </>
                  )}
                  {colIndex !== 6 && (
                    <input
                      type={columnTypes[colIndex]}
                      value={cell.value}
                      onChange={(e) =>
                        handleInputChange(rowIndex, colIndex, e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Are you sure you want to ${modalAction.toLowerCase()} this item?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleModalAction}>
            {modalAction}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResponsiveExample;
