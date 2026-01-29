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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("employees/", form);

      if (response.status === 201) {
        setForm({
          employee_id: "",
          full_name: "",
          email: "",
          department: "",
        });

        if (onSuccess) onSuccess();
      }
    } catch (err) {
      // 🔑 THIS IS THE IMPORTANT FIX
      if (err.response && err.response.data) {
        const data = err.response.data;

        // Pick the first meaningful backend validation message
        const firstError =
          data.employee_id?.[0] ||
          data.email?.[0] ||
          data.full_name?.[0] ||
          data.department?.[0];

        setError(firstError || "Unable to add employee");
      } else {
        setError("Unable to add employee");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      <ErrorMessage message={error} />

      <input
        name="employee_id"
        placeholder="Employee ID"
        value={form.employee_id}
        onChange={handleChange}
        required
      />

      <input
        name="full_name"
        placeholder="Full Name"
        value={form.full_name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}
