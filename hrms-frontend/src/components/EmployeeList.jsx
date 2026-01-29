import { Link } from "react-router-dom";
import api from "../api/axios";

export default function EmployeeList({ employees, onDelete }) {
  if (employees.length === 0) {
  return <p className="empty">No employees found</p>;
}

  const handleDelete = async (id) => {
    await api.delete(`employees/${id}/`);
    onDelete();
  };

  return (
  <div>
    {employees.map((emp) => (
      <div className="list-item" key={emp.id}>
        <div>
            <strong>{emp.full_name}</strong>
            <div>{emp.employee_id} • {emp.department}</div>
            <div>
                <strong>Present Days:</strong> {emp.present_days}
            </div>
        </div>

        <div>
          <Link className="link" to={`/attendance/${emp.employee_id}`}>
            Attendance
          </Link>
          <button
            className="danger"
            onClick={() => handleDelete(emp.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);
}
