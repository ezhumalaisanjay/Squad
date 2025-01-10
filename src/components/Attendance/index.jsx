"use client"
import { Button } from "../ui/button"
import { useState } from "react";
import AttendanceSummary from "./AttendanceSummary";
import AttendanceShift from "./Shift";

function Attendance() {
  const [index, setIndex] = useState(0);
  const components = [
    {
      name: "Attendance Summary",
      id: 0
    }, {
      name: "Shift",
      id: 1
    }];
  
    const handleClick = (id) => {
      setIndex(id)
    }

  return (
    <>
      <div>
        <div className="flex items-center h-[50] border-b-2 border-gray-200">
          <ul className="flex gap-1">
            {components.map((item, i) => <li key={i}>
              <Button 
              variant="secondary"
              onClick={() => handleClick(item.id)} 
              className={index===i ? "border-b-2 border-blue-900 rounded-none" : "" + "hover:border-b-2 border-opacity-70 border-blue-900 rounded-none"}>
                {item.name}
              </Button>
            </li>)}
          </ul>
        </div>
        <div>
          {(index===0) ? <AttendanceSummary /> : <AttendanceShift /> }
        </div>
      </div>
    </>
  )
}

export default Attendance