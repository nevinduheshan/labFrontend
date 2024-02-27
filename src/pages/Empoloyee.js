import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
  .get("http://localhost:8080/api/employee/getAllEmployees")
  .then((res) => {
    console.log(res.data.content); // This will now correctly log the array of employees
    setEmployees(res.data.content); // Adjusted from res.data.employees to res.data.content
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  }, []);

  const deleteEmployee = (empID) => {
    axios
      .delete(`http://localhost:8080/api/employee/${empID}`)
      .then(() => {
        // Remove the deleted employee from the state to update the UI
        setEmployees(employees.filter(employee => employee.empID !== empID));
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
        // Optionally, update your UI to show an error message
      });
  };

  return (
    <div className="container mx-auto my-auto">
      <div className="row">
        <div className="card">
          <div className="card-header">
            <h4>
              Employee List
              <Link to="/add" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Add Employee
              </Link>
            </h4>
          </div>
          <div className="card-body">
            {error && <p>{error}</p>}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((item) => (
                  <tr key={item.empID}>
                    <td>{item.empID}</td>
                    <td>{item.empName}</td>
                    <td>{item.empAddress}</td>
                    <td>{item.empMNumber}</td>
                    <td>
                      <Link to={`/edit/${item.empID}`} className="mr-4">
                        Edit
                      </Link>
                      <button onClick={() => deleteEmployee(item.empID)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
