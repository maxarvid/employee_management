import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    setEmployees(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <li key={employee.id} className="employee-item">
        <p>
          {employee.first_name} {employee.last_name}
        </p>
      </li>
    );
  });

  return <ul id="employee-list">{employeeList}</ul>;
};

export default EmployeeList;
