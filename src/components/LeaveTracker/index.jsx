import { Button } from "../ui/button";
import LeaveRequest from "./LeaveRequest";
import LeaveSummary from "./LeaveSummary";


function LeaveTracker() {
  const components = ["Leave Summary", "Leave Balance", "Leave Requests", "Shift"];

  return (
    <div>
      <div className="flex items-center h-[50] border-b-2 border-gray-200">
        <ul className="flex gap-1">
          {components.map((item, i) => <li key={i}><Button variant="secondary" className="hover:border-b-2 border-blue-900 rounded-none">{item}</Button></li>)}
        </ul>
      </div>
    </div>
  );
}

export default LeaveTracker