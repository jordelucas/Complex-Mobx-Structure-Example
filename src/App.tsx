import { useContext } from "react";
import { observer } from "mobx-react";

import { EmployeeStoreContext } from "store";

import { EmployeesList } from "examples/constants";


import Employee from "./components/Employee";

const App = observer(() => {
  const EmployeeStore = useContext(EmployeeStoreContext);

  const handleOnClick = () => {
    const random = Math.floor(Math.random() * 10) + 1;

    const selectedEmployee = EmployeesList[random];

    EmployeeStore.addEmployee(
      selectedEmployee.name, 
      selectedEmployee.role, 
      selectedEmployee.created_at,
    );
  }

  return (
    <div style={{ width: "680px", margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ margin: "0 auto" }}>Complex MobX Structure</h1>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h2>List of Employees</h2>
          <button onClick={handleOnClick}>Add</button>
        </div>

        <ul>
          {EmployeeStore.employees.map(employee => (
            <Employee key={employee.id} data={employee} />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default App;
