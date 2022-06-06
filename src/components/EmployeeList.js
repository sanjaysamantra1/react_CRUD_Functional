import React from "react";

export default function EmployeeList(props) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>EmpID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.empArr.map((emp) => (
          <tr key={emp.eId}>
            <td>{emp.eId}</td>
            <td>{emp.name}</td>
            <td>{emp.sal}</td>
            <td>
              <button className="btn btn-danger" onClick={()=>{
                  props.deleteEmployee(emp.eId)
              }}>DELETE</button> &nbsp;

              <button className="btn btn-primary" onClick={()=>{
                  props.editEmployee(emp.eId);
              }}>EDIT</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
