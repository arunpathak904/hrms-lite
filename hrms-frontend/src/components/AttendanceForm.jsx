import { useState } from "react";
import api from "../api/axios";

export default function AttendanceForm({ employeeId }) {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitAttendance = async (e) => {
    e.preventDefault();

    // clear previous messages
    setError("");
    setSuccess("");

    try {
        await api.post("attendance/", {
        employee_id: employeeId,
        date,
        status,
        });

        setDate("");
        setStatus("Present");

        setSuccess("Attendance saved successfully");
        onSuccess && onSuccess();
    } catch (err) {
        setError("Attendance could not be saved");
    }
  };

  return (
    <form onSubmit={submitAttendance}>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

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
