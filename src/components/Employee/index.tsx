import Dependent from "components/Dependent";

const Employee = () => {
  return (
    <li style={{ display: "grid", marginBottom: "20px" }}>
      <strong>Name: <small style={{ fontWeight: 400 }} /></strong>
      <strong>Role: <small style={{ fontWeight: 400 }} /></strong>
      <strong>Admission: <small style={{ fontWeight: 400 }} /></strong>
      <div>
        <strong>Dependents:</strong>
        <button>Add</button>

        <ul style={{ marginTop: "16px" }}>
         <Dependent />
        </ul>

      </div>
    </li>
  )
};

export default Employee;
