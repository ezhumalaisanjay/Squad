"use client"
import { Button } from "../ui/button"
import TimeLogs from "./TimeLogs";
import TimeSheets from "./TimeSheets";
import Jobs from "./Jobs";
import Projects from "./Projects";
import JobsSchedule from "./JobsSchedule";
import { useState } from "react";

function TimeTracker() {
  const [index, setIndex] = useState(0)
  const components = [
    {
      name: "Time Logs",
      id: 0
    },{
      name: "Timesheets",
      id: 1
    },{
      name: "Jobs",
      id: 2
    },{
      name: "Projects",
      id: 3
    },{
      name: "Job Schedule",
      id: 4
    }
  ];
  
  const handleClick = (id) => {
    setIndex(id)
  }

  return (
    <>
      <div>
        <div className="flex items-center h-full border-b-2 border-gray-200">
          <ul className="flex overflow-y-auto gap-1">
            {components.map((item, i) => <li key={i}>
              <Button 
              variant="secondary" 
              onClick={() => handleClick(item.id)}
              className={index===i ? "border-b-2 border-blue-900 rounded-none": "" + "hover:border-b-2 border-blue-900 border-opacity-70 rounded-none"}>
                {item.name}
              </Button>
            </li>)}
          </ul>
        </div>
        <div>
          {(index===0) ? <TimeLogs /> : (index===1) ? <TimeSheets /> : (index===2) ? <Jobs /> : (index===3) ? <Projects /> : <JobsSchedule />}
        </div>
      </div>
    </>
  )
}

export default TimeTracker