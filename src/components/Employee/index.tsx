import { useContext } from "react";
import { observer } from "mobx-react";

import Dependent from "components/Dependent";

import { DependentsList } from "examples/constants";

import { EmployeeStoreContext } from "store";

interface EmployeeProps {
  data: {
    id: string;
    name: string;
    role: string;
    created_at: string;
  }
}

const Employee = observer(({ data }: EmployeeProps) => {
  const EmployeeStore = useContext(EmployeeStoreContext);

  console.log('updating: ', data.id)

  const handleOnClick = () => {
    const random = Math.floor(Math.random() * 10);

    const selectedDependent = DependentsList[random];

    EmployeeStore.addDependent(
      data.id,
      selectedDependent.name,
      selectedDependent.relationship,
    );
  }

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
        <button onClick={handleOnClick}>Add</button>

        <ul style={{ marginTop: "16px" }}>
          {EmployeeStore.getEmployee(data.id)?.dependentsList.map(dependent => (
            <Dependent key={dependent.id} data={dependent} />
          ))}
        </ul>
      </div>
    </li>
  )
});

export default Employee;
