import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AttendanceList({ employeeId, refresh }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.get(`attendance/${employeeId}/`).then((res) => {
        setRecords(res.data);
    });
  }, [employeeId, refresh]);


  return (
    <ul>
      {records.map((rec) => (
        <li key={rec.id}>
          {rec.date} – {rec.status}
        </li>
      ))}
    </ul>
  );
}
