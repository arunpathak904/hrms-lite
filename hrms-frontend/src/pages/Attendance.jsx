import { useParams } from "react-router-dom";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

export default function Attendance() {
  const { employeeId } = useParams();

  return (
    <div>
      <h2>Attendance – {employeeId}</h2>
      <AttendanceForm employeeId={employeeId} />
      <AttendanceList employeeId={employeeId} />
    </div>
  );
}
