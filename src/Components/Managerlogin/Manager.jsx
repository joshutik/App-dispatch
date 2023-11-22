import React from "react";
import "./Manager.css";
import ResponsiveExample from "../Tables/Responsivetable";

const Manager = () => {
  // const [tableData, setTableData] = useState([
  //   { name: "", value: "" },
  //   { name: "", value: "" },
  //   { name: "", value: "" },
  //   { name: "", value: "" },
  //   { name: "", value: "" },
  //   // Add more rows as needed
  // ]);
  // const handleInputChange = (id, field, value) => {
  //   const updatedData = tableData.map((row) =>
  //     row.id === id ? { ...row, [field]: value } : row
  //   );
  //   setTableData(updatedData);
  // };
  return (
    <div>
      <div className="container-fluid ">
        <div className="row manager justify-content-center">
          <div className="col-lg-8 col-md-6 col-sm-12 p-5">
            <p className="fs-3 text-light ml-5 w-50">Buenas noches,</p>
            <h1 className="text-light text-center fw-bold">ADMIN DE LOTERIA</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <form action="/" className="w-75">
            <input
              className="rounded-pill w-100 py-3 px-3 mt-5"
              type="search"
            />
          </form>
          <div>
          <div className="row justify-content-center align-items-center mt-5">
            {/* Table */}
            {/* <div className=" w-75">
              <table className="table table-bordered table-responsive align-middle w-100">
                <thead>
                  <tr>
                    <th scope="col" className="p-4">
                      Numero
                    </th>
                    <th scope="col" className="p-4">
                      Series
                    </th>
                    <th scope="col" className="p-4">
                      Quantity reserved
                    </th>
                    <th scope="col" className="p-4">
                      Quantity returned
                    </th>
                    <th scope="col" className="p-4">
                      Quantity charged
                    </th>
                    <th scope="col" className="p-4">
                      Quantity sold
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="p-4 text-center">3356</td>
                    <td className="p-4 text-center">24-46</td>
                    <td className="p-4 text-center">$200</td>
                    <td className="p-4 text-center">$200</td>
                    <td className="p-4 text-center">$500</td>
                    <td className="p-4 text-center">$200</td>
                  </tr>
                  <tr className="text-center">
                    <td className="p-4">3356</td>
                    <td className="p-4">24-46</td>
                    <td className="p-4">$200</td>
                    <td className="p-4">$200</td>
                    <td className="p-4">$500</td>
                    <td className="p-4">$200</td>
                  </tr>
                  <tr>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                  </tr>
                  <tr>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div> */}
             {/* <table className="table table-bordered px-5 align-middle table-responsive w-100">
              <thead className="">
                <tr className="text-center">
                  <th></th>
                  <th>Date</th>
                  <th>Number</th>
                  <th>Series</th>
                  <th>Quantity Delivered</th>
                  <th>Amount paid</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                      <input
                        className=""
                        type="date"
                        value={row.name}
                        onChange={(e) =>
                          handleInputChange(row.id, "name", e.target.value)
                        }
                      />
                    </td>
                    <td className="">
                      <input
                        type="number"
                        value={row.value}
                        onChange={(e) =>
                          handleInputChange(row.id, "value", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="Number"
                        value={row.value}
                        onChange={(e) =>
                          handleInputChange(row.id, "value", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="Number"
                        value={row.value}
                        onChange={(e) =>
                          handleInputChange(row.id, "value", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.value}
                        onChange={(e) =>
                          handleInputChange(row.id, "value", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.value}
                        onChange={(e) =>
                          handleInputChange(row.id, "value", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <ResponsiveExample/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
