import React from 'react';
import './style.css';

const EmployeeTabs = (props) => {
  console.log(props.employees)
  window.debugprops = props
  return (
    <ul className = "list-group">
      {props.employees.map(employee => (
        <div key={`${employee.name.first}-${employee.name.last}`} className="card">

          <li className="list-group-item" >
            <div className="img-container"></div>
            <img alt={employee.name.first} className="img-fluid" src={employee.picture.large} />
            <br></br>
            <p><strong>{employee.name.first} {employee.name.last}</strong></p>
          
            <p><strong>Email: </strong> {employee.email}</p>
      
            <p><strong>Phone: </strong>{employee.phone}</p>

            <p><strong>Location: </strong>{employee.location.city}</p>
          </li>
          <span className="remove" onClick={() => props.handleRemove(employee.id.value)}>X</span>
        </div>
      ))}
    </ul>
  )
}
export default EmployeeTabs;