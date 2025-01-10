"use client"
import { Settings } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

function Configuration() {
  const [selected, setSelected] = useState(0);
  const lists = [
    {
      name : "Performance Methods",
      link : "",
      id: 0
    }, {
      name : "KRA",
      link : "",
      id: 1
    }, {
      name : "Goals",
      link : "",
      id: 2
    }, {
      name : "Feedback",
      link : "",
      id: 3
    }, {
      name : "Skill Set",
      link : "",
      id: 4
    }, {
      name : "Competency",
      link : "",
      id: 5
    }, {
      name : "Salary",
      link : "",
      id: 6
    }, {
      name : "Appraisal Templates",
      link : "",
      id: 7
    }, {
      name : "Appraisal Review",
      link : "",
      id: 8
    }, {
      name : "Continuous Review",
      link : "",
      id: 9
    }, {
      name : "Reports",
      link : "",
      id: 10
    }, {
      name : "Rename Terms",
      link : "",
      id: 11
    }
  ];

  const selectedID = (id) => {
    setSelected(id)
  }

  return(
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <Card className="lg:w-[300]">
          <CardContent className=" h-[460] mt-3 overflow-y-auto">
            <ul className="flex flex-col gap-2">{
              lists.map((item, i) => <li key={i}>
                <Button 
                onClick={() => selectedID(item.id)}
                variant="secondary" 
                className={selected===i ? "font-medium bg-slate-200 w-full flex justify-start" : "" + "hover:bg-slate-300 font-light w-full flex justify-start"}>
                  {item.name} 
                </Button>
                </li>)}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="secondary"><Settings /> Go to Operations</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-xl pb-2 font-semibold">Primary evaluation methods</CardHeader>
          <CardDescription className="pl-5">
            Select the methods that you commonly use in your organization to evaluate
            your employees. These are employed during all reviews and impact the final rating calculation.
          </CardDescription>
          <CardContent className="lg:h-[400] overflow-y-auto">
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-start gap-3">
                <Switch id="kra-and-goals"/>
                <div>
                  <Label htmlFor="kra-and-goals">KRA and Goals</Label>
                  <p>
                    Select KRA, Goals, or KRA and Goals as independant method or as a linked method
                    of evaluation using KRA vs Goals
                  </p>
                  <div>Choose type</div>
                  <Card className="m-3 lg:w-max">
                    <CardContent className="p-3 flex items-center">
                      <RadioGroup >
                        <div className="m-1 rounded-lg p-2 border border-gray-500 border-opacity-25 flex items-center gap-2">
                          <RadioGroupItem value="KRA" id="kra" />
                          <div>
                            <Label htmlFor="kra">KRA</Label>
                            <p>KRA will be enabled as an independent method</p>  
                          </div>
                        </div>
                        <div className="flex items-center rounded-lg  gap-2 m-1 p-2 border border-gray-500 border-opacity-25 ">
                          <RadioGroupItem value="Goals" id="goals" />
                          <div>
                            <Label htmlFor="goals">Goals</Label>
                            <p>Goals will be enabled as an independent method</p>  
                          </div>
                        </div>
                        <div className="m-1 p-2 border border-gray-500 rounded-lg  border-opacity-25 flex items-center gap-2">
                          <RadioGroupItem value="KRA and Goals" id="kra-and-goals" />
                          <div>
                            <Label htmlFor="kra-and-goals">KRA and Goals</Label>
                            <p>KRA and Goals will be enabled as an independent method</p>  
                          </div>
                        </div>
                        <div className="m-1 p-2 border border-gray-500 border-opacity-25 rounded-lg  flex items-center gap-2">
                          <RadioGroupItem value="KRA vs Goals" id="kra-vs-goals" />
                          <div>
                            <Label htmlFor="kra-vs-goals">KRA vs Goals(KRA vs GOALS)</Label>
                            <p>Goals will be associated with KRAs as a linked method</p>  
                          </div>
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Switch id="feedback"/>
                <div>
                  <Label htmlFor="feedback">Feedback</Label>
                  <p>
                    Receive Feedback from employees, managers or peers to aid in the continous improvement of
                    individuals and your organization as the whole
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Switch id="skill-set"/>
                <div>
                  <Label htmlFor="skill-set">Skill Set</Label>
                  <p>
                    Skills Sets are particular abilties that help an employee perform the job. Example:
                    accounting, computer languages.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Switch id="competency"/>
                <div>
                  <Label htmlFor="competency">Competency</Label>
                  <p>
                    Competency is the combination of knowledge, skills, abilities, and personal attributes that
                    contribute to enhanced employee performance. Examples: leadership, problem solving.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Switch id="summary"/>
                <div>
                  <Label htmlFor="summary">Summary</Label>
                  <p>
                    Summary is a questionnaire that the reviewer can respond about various aspects of their 
                    employee's performance along with a final rating
                  </p>
                </div>
              </div>  
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Configuration