import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AttendanceList({ employeeId, refreshKey }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.get(`attendance/${employeeId}/`).then((res) => {
      setRecords(res.data);
    });
  }, [employeeId, refreshKey]);

  if (records.length === 0) {
    return <p className="empty">No attendance records found</p>;
  }

  return (
    <div>
      {records.map((rec) => (
        <div key={rec.id} className="list-item">
          <strong>{rec.date}</strong> — {rec.status}
        </div>
      ))}
    </div>
  );
}
