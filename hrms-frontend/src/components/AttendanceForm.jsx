import { useState } from "react";
import api from "../api/axios";

export default function AttendanceForm({ employeeId }) {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");

  const submitAttendance = async (e) => {
    e.preventDefault();
    await api.post("attendance/", {
      employee: employeeId,
      date,
      status,
    });
  };

  return (
    <form onSubmit={submitAttendance}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button type="submit">Mark</button>
    </form>
  );
}
