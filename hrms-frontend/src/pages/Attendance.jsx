import { useParams } from "react-router-dom";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

export default function Attendance() {
  const { employeeId } = useParams();

  return (
  <div className="container">
    <div className="card">
      <h2>Attendance – {employeeId}</h2>
      <AttendanceForm employeeId={employeeId} />
    </div>

    <div className="card">
      <AttendanceList employeeId={employeeId} />
    </div>
  </div>
);
}
