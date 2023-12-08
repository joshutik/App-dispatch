import React, { useState } from "react";
import Table from "react-bootstrap/Table";

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

  // Initialize confirmationStatus state
  const [confirmationStatus, setConfirmationStatus] = useState(
    Array.from({ length: 3 }, () => Array.from({ length: 8 }, () => "pending"))
  );

  const handleInputChange = (rowIndex, colIndex, value) => {
    const newCellValues = [...cellValues];
    newCellValues[rowIndex][colIndex].value = value;
    setCellValues(newCellValues);
  };

  const handleConfirmationClick = (rowIndex, colIndex) => {
    const newStatus = [...confirmationStatus];
    newStatus[rowIndex][colIndex] = "submitted";
    setConfirmationStatus(newStatus);
  };

  return (
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
                    <input
                      type={columnTypes[colIndex]}
                      value={cell.value}
                      onChange={(e) =>
                        handleInputChange(rowIndex, colIndex, e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                    <p
                      onClick={() =>
                        handleConfirmationClick(rowIndex, colIndex)
                      }
                      disabled={
                        confirmationStatus[rowIndex][colIndex] === "submitted"
                      }
                    >
                      {confirmationStatus[rowIndex][colIndex]}
                    </p>
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
  );
}

export default ResponsiveExample;
