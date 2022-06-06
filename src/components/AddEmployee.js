import React, { useState } from "react";

export default function AddEmployee(props) {
  const [eId, setEId] = useState(0);
  const [name, setName] = useState("");
  const [sal, setSal] = useState(0);

  return (
    <>
        <h2>Add Employee Form</h2>
        
        Eid: <input className="form-control" onChange={(e)=>{setEId(e.target.value)}} /> <br/>
        Name: <input className="form-control" onChange={(e)=>{setName(e.target.value)}} /><br/>
        Salary: <input className="form-control" onChange={(e)=>{setSal(e.target.value)}}/> <br />
        
        <button className='btn btn-primary' onClick={() => {
            const empObj ={eId,name,sal};
            props.addNewEmployee(empObj);
          }}>Add New Emp</button>
    </>
  );
}
