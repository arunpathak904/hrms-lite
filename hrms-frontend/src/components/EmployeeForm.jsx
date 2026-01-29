import { useState } from "react";
import api from "../api/axios";
import ErrorMessage from "./ErrorMessage";

export default function EmployeeForm({ onSuccess }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("employees/", form);
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: "",
      });
      onSuccess();
    } catch (err) {
      setError("Failed to add employee");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      <ErrorMessage message={error} />

      <input name="employee_id" placeholder="Employee ID" value={form.employee_id} onChange={handleChange} required />
      <input name="full_name" placeholder="Full Name" value={form.full_name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />

      <button type="submit">Add</button>
    </form>
  );
}
