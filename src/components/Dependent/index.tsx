interface DependentProps {
  data: {
    name: string;
    relationship: string;
  }
}

const Dependent = ({ data }: DependentProps) => {
  return (
    <li style={{ display: "grid", marginBottom: "24px" }}>
      <strong>
        Name: <small style={{ fontWeight: 400 }}>{data.name}</small>
      </strong>
      
      <strong>
        Relationship: <small style={{ fontWeight: 400 }}>{data.relationship}</small>
      </strong>
    </li>
  )
};

export default Dependent;
