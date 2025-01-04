import { Link } from "react-router-dom";
import { Button } from "../ui/button"

function TimeTracker() {
  const components = [
    {
      name: "Time Logs",
      link: "/timetracker/"
    },{
      name: "Timesheets",
      link: ""
    },{
      name: "Jobs",
      link: ""
    },{
      name: "Projects",
      link: ""
    },{
      name: "Job Schedule",
      link: ""
    }
  ];
  
  return (
    <>
      <div>
        <div className="flex items-center h-full border-b-2 border-gray-200">
          <ul className="flex overflow-y-auto gap-1">
            {components.map((item, i) => <li key={i}>
              <Link to={item.link}>
                <Button variant="secondary" className=" hover:border-b-2 border-blue-900 rounded-none">
                  {item.name}
                </Button>
              </Link>
            </li>)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default TimeTracker