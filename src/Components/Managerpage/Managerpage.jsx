import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Managerpage.css";
import { Link } from "react-router-dom";
import ResponsiveExample from "../Tables/Responsivetable";

const Managerpage = () => {
  const [company, setCompany] = useState({});
  const {id} = useParams();

  const navigate = useNavigate();
 
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://distachapp.onrender.com/establishment/${id}`);
        if (response.status === 200) {
          // setResponseData(response.data);
          setCompany(response.data)
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);


  const editCompany = (company) =>{
    // console.log(company);
    localStorage.setItem('currentCompany', JSON.stringify(company));
    navigate('/edit-company');
    }
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
              <div onClick={() => editCompany(company)} className="icon text-decoration-none">
                <i class="bi bi-plus-lg fw-bolder fs-4"></i>Edit Company details
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="px-5">
            <ResponsiveExample />
          </div>
        </div>
        <div className="container-fluid footer py-4 bg-light text-center mt-5 mb-0">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-12 col-sm-6">
              <p className="mb-0">
                <i class="bi bi-geo-alt-fill "></i>
                Avda de Espana 2428710-EL MOLAR (MADRID)
              </p>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-6">
              <i class="bi bi-telephone-fill"></i>+918410517
            </div>

            <div className="col-lg-4 col-md-12 col-sm-6">
              <i class="bi bi-envelope-at-fill"></i>
              <a href="/">loteriaelmolar@yahoo.es</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managerpage;
