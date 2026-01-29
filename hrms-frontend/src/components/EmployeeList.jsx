import { Link } from "react-router-dom";
import api from "../api/axios";

export default function EmployeeList({ employees, onDelete }) {
  if (employees.length === 0) {
    return <p>No employees found</p>;
  }

  const handleDelete = async (id) => {
    await api.delete(`employees/${id}/`);
    onDelete();
  };

  return (
    <ul>
      {employees.map((emp) => (
        <li key={emp.id}>
          {emp.full_name} ({emp.employee_id})
          <Link to={`/attendance/${emp.employee_id}`}> Attendance</Link>
          <button onClick={() => handleDelete(emp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
