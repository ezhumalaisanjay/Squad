"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import LeaveBalance from "./LeaveBalance";
import LeaveRequest from "./LeaveRequest";
import LeaveSummary from "./LeaveSummary";
import Shift from "./Shift";

function LeaveTracker() {
  const [index, setIndex] = useState(0);
  const components = [
    {
      name : "Leave Summary",
      id: 0
    },{
      name : "Leave Balance",
      id: 1
    }, {
      name: "Leave Requests",
      id: 2
    }, {
      name: "Shift",
      id: 3 
    }];

    const handleClick = (id) => {
      setIndex(id)
    }
  return (
    <div>
      <div className="flex items-center h-full border-b-2 border-gray-200">
        <ul className="flex gap-1 overflow-y-auto">
          {components.map((item, i) => <li key={i}>
            <Button 
            variant="secondary"
            onClick={() => handleClick(item.id)} 
            className={index === i ? "border-b-2 border-blue-900 rounded-none" : "" + "hover:border-b-2 border-blue-900 border-opacity-70 rounded-none"}>
              {item.name}
            </Button>
          </li>)}
        </ul>
      </div>
      <div>
      {(index===0) ? <LeaveSummary /> : (index===1) ? <LeaveBalance /> : (index===2) ? <LeaveRequest /> : <Shift />}
      </div>
    </div>
  );
}

export default LeaveTracker