import { useState } from "react"
import GettingStarted from "./GettingStarted"
import { Button } from "../ui/button";
import Configuration from "./Configuration";
import Kra from "./Kra";
import SkillSet from "./SkillSet";
import Goals from "./Goals";
import Competency from "./Competency";
import Feedback from "./Feedback";

function Performance() {
  const [showPage, setShowPage] = useState(false);
  const [index, setIndex] = useState(0)
  const navigationLists = [
    {
      name: "Configuration",
      id: 0
    },{
      name: "Extend Service",
      id: 1
    },{
      name: "Approvals",
      id: 2
    },{
      name: "Automation",
      id: 3
    },{
      name: "Permissions",
      id: 4
    }
  ]

  const components = [
    {
      name: "KRA",
      id: 0
    }, {
      name: "Skill Set",
      id: 1
    }, {
      name: "Goals",
      id: 2
    }, {
      name: "Competency",
      id: 3
    }, {
      name: "Feedback",
      id: 4
    }
  ]

  const changePage = () => {
    setShowPage(true);
    changingName();
  }

  const handleClick = (id) => {
    setIndex(id)
  }

  return(
    <>{/*
      (!showPage) ?
      <GettingStarted changePage={changePage}/> :
      <div>
        <div className="flex overflow-x-auto items-center h-full border-b-2 border-gray-200">
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
          <Configuration />
        </div>
      </div> */}
      
      <div>
        <div>
          <ul className="flex gap-1 lg:ml-2 overflow-y-auto">
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
          { index === 0 ? <Kra /> : index===1 ? <SkillSet /> : index===2 ? <Goals /> : index===3 ? <Competency /> : <Feedback />}
        </div>
      </div>

    </>
  )
}

export default Performance