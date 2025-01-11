import { useState } from "react"
import { Button } from "../ui/button"
import ENps from "./Enps"

function SurveySection() {
  const [index, setIndex] = useState(0)
  const components = [
    {
      name: "eNPS",
      id: 0
    },{
      name: "Engagement Survey",
      id: 1
    }
  ]

  const handleClick = (id) => {
    setIndex(id)
  }

  return(
    <>
      <div>
        <div>
          <ul className="flex gap-1 lg:ml-2 overflow-y-auto">
            {components.map((item, i) => <li key={i}>
              <Button 
              variant="secondary"
              onClick={() => handleClick}
              className={index===i ? "border-b-2 border-blue-900 rounded-none": "" + "hover:border-b-2 border-blue-900 border-opacity-70 rounded-none"}>
                {item.name}
              </Button>
            </li>)}
          </ul>
        </div>
        <div>
          <ENps />
        </div>
      </div>
    </>
  )
}

export default SurveySection