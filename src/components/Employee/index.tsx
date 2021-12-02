import Dependent from "components/Dependent";
import { DependentsList } from "examples/constants";

interface EmployeeProps {
  data: {
    name: string;
    role: string;
    created_at: string;
  }
}

const Employee = ({ data }: EmployeeProps) => {
  return (
    <li style={{ display: "grid", marginBottom: "20px" }}>
      <strong>
        Name: <small style={{ fontWeight: 400 }}>{data.name}</small>
      </strong>

      <strong>
        Role: <small style={{ fontWeight: 400 }}>{data.role}</small>
      </strong>

      <strong>
        Admission: <small style={{ fontWeight: 400 }}>{data.created_at}</small>
      </strong>

      <div>
        <strong>Dependents:</strong>
        <button>Add</button>

        <ul style={{ marginTop: "16px" }}>
         <Dependent data={DependentsList[7]} />
        </ul>

      </div>
    </li>
  )
};

export default Employee;
