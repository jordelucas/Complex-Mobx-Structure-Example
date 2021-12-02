import { EmployeesList } from "examples/constants";

import Employee from "./components/Employee";

function App() {
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
          <button>Add</button>
        </div>

        <ul>
          <Employee data={EmployeesList[6]} />
        </ul>
      </div>
    </div>
  );
}

export default App;
