import { useContext } from "react";

import { EmployeeStoreContext } from "store";

import { DependentsList } from "examples/constants";

interface DependentProps {
  data: {
    id: string;
    name: string;
    relationship: string;
  }
  idEmployee: string;
}

const Dependent = ({ data, idEmployee }: DependentProps) => {
  const EmployeeStore = useContext(EmployeeStoreContext);

  const handleOnClickToUpdate = () => {
    const random = Math.floor(Math.random() * 10);

    const selectedDependent = DependentsList[random];

    EmployeeStore.updateDependent(
      idEmployee,
      data.id,
      selectedDependent.name,
      selectedDependent.relationship,
    );
  };

  return (
    <li style={{ display: "grid", marginBottom: "24px" }}>
      <strong>
        Name: <small style={{ fontWeight: 400 }}>{data.name}</small>
      </strong>
      
      <strong>
        Relationship: <small style={{ fontWeight: 400 }}>{data.relationship}</small>
      </strong>

      <div>
        <button onClick={handleOnClickToUpdate}>update</button>
        <button>delete</button>
      </div>
    </li>
  )
};

export default Dependent;
