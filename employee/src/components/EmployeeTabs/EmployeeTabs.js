import React from 'react';

const EmployeeTabs = (props) => {
  console.log(props.employees)
  window.debugprops = props
  return (
    <ul className = "list-group">
      {props.employees.map(employee => (
        <div key={employee.id.value} className="card">

          <li className="list-group-item" >
            <strong>Email:</strong> {employee.email}
            <div className="img-container"></div>
            <img alt={employee.name} className="img-fluid" src={employee.picture.large} />
            <strong>Name:</strong>{employee.name.first.last}
            <strong>Phone:</strong>{employee.phone}
          </li>
          <span className="remove" onClick={() => props.handleRemove(employee.id.value)}>X</span>
        </div>
      ))}
    </ul>
  )
}
export default EmployeeTabs;