import { useParams } from "react-router-dom";
import { useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

export default function Attendance() {
  const { employeeId } = useParams();
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h2>Attendance – {employeeId}</h2>

        <AttendanceForm
          employeeId={employeeId}
          onSuccess={() => setRefreshKey((prev) => prev + 1)}
        />
      </div>

      <div className="card">
        <AttendanceList
          employeeId={employeeId}
          refreshKey={refreshKey}
        />
      </div>
    </div>
  );
}
