import React, { useState } from "react";
import Modal from 'react-modal';

export default function EmployeeList(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal=()=>setIsOpen(true);
  const closeModal=()=>setIsOpen(false);
  
  const [selectedEmp,setSelectedEmp] = useState({});
  const viewEmployee=(empObj)=>{
    openModal();
    setSelectedEmp(empObj);
  }

  return (
    <>
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
              }}>EDIT</button> &nbsp;

              <button className="btn btn-secondary" onClick={()=>{viewEmployee(emp)}}>
                VIEW
              </button>
            </td>           
        </tr>
        ))}
      </tbody>
    </table>

      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Employee Details">
        <p>Employee Id: {selectedEmp.eId}</p>
        <p>Employee Name: {selectedEmp.name}</p>
        <p>Employee Salary: {selectedEmp.sal}</p>

        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
}
