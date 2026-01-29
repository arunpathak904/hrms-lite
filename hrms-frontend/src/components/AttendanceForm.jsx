import { useState } from "react";
import api from "../api/axios";

export default function AttendanceForm({ employeeId, onSuccess }) {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [error, setError] = useState("");

  const submitAttendance = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("attendance/", {
        employee_id: employeeId,
        date,
        status,
      });

      if (response.status === 200 || response.status === 201) {
        setDate("");
        setStatus("Present");
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      setError("Attendance could not be saved");
    }
  };

  return (
    <form onSubmit={submitAttendance}>
      {error && <p className="error">{error}</p>}

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button type="submit">Mark Attendance</button>
    </form>
  );
}
