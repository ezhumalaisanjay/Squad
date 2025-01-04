"use client"
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function LeaveTracker() {
  const components = [
    {
      name : "Leave Summary",
      link: "/leavetracker/"
    },{
      name : "Leave Balance",
      link: "/leavetracker/leavebalance/"
    }, {
      name: "Leave Requests",
      link: "/leavetracker/leaverequest/"
    }, {
      name: "Shift",
      link: "/leavetracker/shift/" 
    }];

  return (
    <div>
      <div className="flex items-center h-full border-b-2 border-gray-200">
        <ul className="flex gap-1 overflow-y-auto">
          {components.map((item, i) => <li key={i}>
            <Link to={item.link}>
            <Button variant="secondary" className="hover:border-b-2 border-blue-900 rounded-none">
              {item.name}
            </Button>
          </Link></li>)}
        </ul>
      </div>
    </div>
  );
}

export default LeaveTracker