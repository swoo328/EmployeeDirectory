import React from "react";

function Employee(props){
    return (
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Department:</strong> {props.dept}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>Phone:</strong> {props.phone}
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Employee;