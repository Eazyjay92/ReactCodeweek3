
import React, { useState } from 'react';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({ id: '', name: '', position: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('employeeData', JSON.stringify(employee));
    alert('Employee data saved!');
  };

  const clearData = () => {
    localStorage.removeItem('employeeData');
    alert('Employee data cleared!');
  };

  const displayData = () => {
    const data = JSON.parse(localStorage.getItem('employeeData'));
    alert(`Retrieved data: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={employee.id} onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={employee.name} onChange={handleChange} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={employee.position} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
      <button onClick={clearData}>Clear Data</button>
      <button onClick={displayData}>Display Data</button>
    </div>
  );
};

export default EmployeeForm;
