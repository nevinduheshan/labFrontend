import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

function EmployeeCreate() {
  const [employee, setEmployee] = useState({
    empName: "",
    empAddress: "",
    empMNumber: "",
  });

  const navigate = useNavigate(); // Use useNavigate hook here

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    const data = {
      empName: employee.empName,
      empAddress: employee.empAddress,
      empMNumber: employee.empMNumber,
    };

    axios.post(`http://localhost:8080/api/employee/saveEmployee`, data)
      .then((res) => {
        alert(res.data.message);
        navigate("/employee"); // Use navigate to redirect
      })
      .catch((error) => {
        console.error("There was an error saving the employee:", error);
        alert("Failed to save employee.");
      });
  };

  return (
    <div>
      <div className="container mx-auto my-auto">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <h4 className="text-lg font-medium text-gray-900">
                Add Employee
                <Link
                  to="/employee"
                  className="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Back
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <form className="max-w-sm mx-auto" onSubmit={saveEmployee}>
                {/* Adjusted form fields to match your input data keys */}
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                  <input
                    name="empName"
                    value={employee.empName}
                    onChange={handleInput}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                  <input
                    name="empMNumber"
                    value={employee.empMNumber}
                    onChange={handleInput}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                  <input
                    name="empAddress"
                    value={employee.empAddress}
                    onChange={handleInput}
                    type="text"
                    className="block w-full p-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Save Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCreate;
