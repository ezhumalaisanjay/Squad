"use client"
import { Button } from "../ui/button";
import Overview from "./Overview";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import { useState } from "react";

function HomePage() {
  const [index, setIndex] = useState(0)
  const components = [{
    id : 0,
    name : "Overview"
    }, {
    id : 1,
    name : "Dashboard"
    }, {
    id : 2,
    name : "Calendar"
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
                className={index == i ? "border-b-2 border-blue-900 rounded-none" : "" + " hover:border-b-2 border-blue-700 rounded-none"}>
                  {item.name}
                </Button>
            </li>)}
          </ul>
        </div>
        <div>
          {(index===0) ? <Overview /> : (index===1) ? <Dashboard /> : <Calendar />}
        </div>
      </div>
    </>
  )
}

export default HomePage