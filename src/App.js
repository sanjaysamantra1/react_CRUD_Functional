import { useEffect, useState } from "react";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  const employeesData = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 },
  ];
  const initialFormState = { eId: null, name: "", sal: null };

  const [empArr, setEmpArr] = useState(employeesData);
  const [currentEmp, setCurrentEmp] = useState(initialFormState);
  const [isEdit, setIsEdit] = useState(false);

  const addNewEmployee = (empObj) => {
    setEmpArr([...empArr, empObj]);
  };
  const deleteEmployee = (eId) => {
    setIsEdit(false);
    const filteredArr = empArr.filter((emp) => emp.eId !== eId);
    setEmpArr([...filteredArr]);
  };
  const editEmployee = (eId) => {
    setIsEdit(true);
    const selectedEmp = empArr.find((emp) => emp.eId === eId);
    setCurrentEmp(selectedEmp);
  };
  const updateEmployee = (eId, updatedEmpObj) => {
    setIsEdit(false);
    setEmpArr(empArr.map((emp) => (emp.eId === eId ? updatedEmpObj : emp)));
  };

  return (
    <>
      <h1 className="text-center well bg-dark text-white">Employee CRUD</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <EmployeeList
              empArr={empArr}
              deleteEmployee={deleteEmployee}
              editEmployee={editEmployee}
            ></EmployeeList>
          </div>
          <div className="col-sm-4">
            {isEdit ? (
              <EditEmployee
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                currentEmp={currentEmp}
                updateEmployee={updateEmployee}
              />
            ) : (
              <AddEmployee addNewEmployee={addNewEmployee} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
