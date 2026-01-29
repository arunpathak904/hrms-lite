import { useState } from "react";
import api from "../api/axios";

export default function AttendanceForm({ employeeId }) {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [error, setError] = useState("");

  const submitAttendance = async (e) => {
    e.preventDefault();
    setError("");

    try {
        await api.post("attendance/", {
        employee_id: employeeId,
        date,
        status,
        });

        setDate("");
        setStatus("Present");
        onSuccess && onSuccess();
        alert("Attendance saved successfully");
    } catch (err) {
        setError("Attendance already marked or invalid data");
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

        <button type="submit">Mark</button>
    </form>
  );
}
