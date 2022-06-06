import React, { useState, useEffect } from "react";

const EditEmployee = (props) => {
  const [emp, setEmp] = useState(props.currentEmp);

  useEffect(() => {
    setEmp(props.currentEmp);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmp({ ...emp, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateEmployee(emp.eId, emp);
      }}
    >
      <h2>Edit Employee Form</h2>
      <label>eId</label>
      <input className="form-control" name="eId" value={emp.eId} onChange={handleInputChange} readonly /> <br />
      <label>name</label>
      <input className="form-control" name="name" value={emp.name} onChange={handleInputChange} />
      <br />
      <label>Sal</label>
      <input className="form-control" name="sal" value={emp.sal} onChange={handleInputChange} />
      <br />
      <button className="btn btn-secondary"
        onClick={() => {
          props.updateEmployee(emp.eId, emp);
        }}
      >
        Update emp
      </button> &nbsp;
      <button
        onClick={() => props.setIsEdit(false)}
        className="btn btn-info"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditEmployee;
