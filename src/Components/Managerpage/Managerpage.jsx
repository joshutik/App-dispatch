import React from "react";
import "./Managerpage.css";
import { Link } from "react-router-dom";
import ResponsiveExample from "../Tables/Responsivetable";

const Managerpage = () => {
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
      <div className="container-fluid">
        <div className="manager-page">
          <div className="pt-3 ps-5">
            <Link className="text-light text-decoration-none fs-5 ml-4" to="/Rider-login">
              <i className="bi bi-chevron-left"></i> Go Back
            </Link>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 col-md-6 col-sm-12 p-5">
              <h1 className="text-light text-center fw-bold">
                Lottery Company
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="my-5 w-75">
            <input
              type="search"
              className="form-control rounded-pill py-4"
              placeholder="Search orders...."
            />
          </div>
          <div className="row justify-content-between mb-3 gy-3 w-75">
            <div className="fs-5 icon col-lg-6 col-md-6 col-sm-12">
              <Link to="/add-order" className="icon text-decoration-none">
                {" "}
                <i class="bi bi-plus-lg"></i>Add new order
              </Link>
            </div>
            <div className="fs-5 col-lg-6 col-md-6 col-sm-12 text-end">
              <Link to="/edit-company" className="icon text-decoration-none ">
                <i class="bi bi-plus-lg fw-bolder fs-4"></i>Edit Company details
              </Link>
            </div>
          </div>
          {/* Table */}
          <div className="px-5">
            {/* <table className="table table-bordered table-responsive align-middle w-100">
              <thead>
                <tr>
                  <th scope="col" className="p-4">
                    Date
                  </th>
                  <th scope="col" className="p-4">
                    Series
                  </th>
                  <th scope="col" className="p-4">
                    Quantity delivered
                  </th>
                  <th scope="col" className="p-4">
                    Amount paid
                  </th>
                  <th scope="col" className="p-4">
                    Balance
                  </th>
                  <th scope="col" className="p-4">
                    Discount
                  </th>
                  <th scope="col" className="p-4">
                    <Link to="/pending">
                      Pending <i class="bi bi-chevron-down"></i>
                    </Link>
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
            </table> */}
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
            </table>  */}
            <ResponsiveExample />
          </div>
        </div>
        <div className="container-fluid footer py-4 bg-light text-center mt-5 mb-0">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-12 col-sm-6">
              <p className="mb-0">
                <i class="bi bi-geo-alt-fill "></i>
                Avda de Espana 2428710-EL MOLAR (MADRID)qwertyuqwertyu
              </p>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-6">
              <i class="bi bi-telephone-fill"></i>+918410517
            </div>

            <div className="col-lg-4 col-md-12 col-sm-6">
              <i class="bi bi-envelope-at-fill"></i>
              <a href="/">loteriaelmolar@yahoo.es12345678</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managerpage;
