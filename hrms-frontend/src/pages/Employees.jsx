import { useEffect, useState } from "react";
import api from "../api/axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await api.get("employees/");
      setEmployees(res.data);
    } catch (err) {
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
  <div className="container">
    <div className="card">
      <h2>Employee Management</h2>
      <EmployeeForm onSuccess={fetchEmployees} />
    </div>

    <div className="card">
      {loading && <Loader />}
      <ErrorMessage message={error} />
      <EmployeeList employees={employees} onDelete={fetchEmployees} />
    </div>
  </div>
);
}
