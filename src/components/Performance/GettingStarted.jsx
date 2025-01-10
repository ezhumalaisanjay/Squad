"use client"
import { ChevronLeft, ChevronRight, Crosshair, KeyRound, Lightbulb, Target } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { useState } from "react";

function GettingStarted({changePage}) {
  const [content, setContent] = useState(0);

  const showContentIn = () => {
    setContent(c => c + 1);
  }

  const showContentDec = () => {
    setContent(c => c - 1);
  }
  return(
    <>
      <div className="grid lg:grid-cols-2 m-3">
        <div className="p-2">
          <h1 className="text-2xl font-semibold mb-2">Performance Service</h1>
          <p className="w-3/4 font-semibold text-slate-800">
            The Performance Management service helps you assess and enhance employee Performance
accurately with intuitive metrics and employee-centric practices. From setting goals to running appraisals,
manage performance with ease and step up your organization's productivity
          </p>
        </div>
        <div>{
          (content === 0) ?
          <Card>
            <CardHeader className="text-2xl font-semibold pb-2">Review Methods</CardHeader>
            <CardDescription className="font-semibold pl-6 mb-6">
              A range of performance evalution methods tailored to enhance employee performance suitable
              for organizations of any size and type
            </CardDescription>
            <CardContent className="h-[330] overflow-y-auto mt-4">
              <div className="flex flex-col gap-2 ">
                <Card className="h-[100] flex items-center">
                  <CardContent className="flex items-center gap-4">
                    <div className="p-1 text-blue-500 rounded-lg border border-blue-500"><KeyRound /></div>
                    <div className="mt-2">
                      <h2 className="font-semibold">Key Result Areas(KRA)</h2>
                      <p className="text-sm">KRAs represent of responsibility or focus. KRAs can help employees 
                        understand their role in the organization.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-[100] flex items-center">
                <CardContent className="flex items-center gap-4">
                    <div className="p-1 text-blue-500 rounded-lg border border-blue-500"><Target /></div>
                    <div className="mt-2">
                      <h2 className="font-semibold">Goals</h2>
                      <p className="text-sm">
                        Specific, measurable objectives that employees are expected to handle. Goals
                        serve as performance targets.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-[100]">
                <CardContent className="flex items-center gap-4">
                    <div className="p-1 text-violet-500 rounded-lg border border-violet-500"><Crosshair /></div>
                    <div className="mt-2">
                      <h2 className="font-semibold">Skill Set</h2>
                      <p className="text-sm">
                        Skill sets are abilities required to perform tasks or functions within a role.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-[100]">
                  <CardContent className="flex items-center gap-4">
                    <div className="p-1 text-red-500 rounded-lg border border-red-500"><Lightbulb /></div>
                    <div className="mt-2">
                      <h2 className="font-semibold">Competency</h2>
                      <p className="text-sm">
                        A combination of abilities or skills that enable employees to perform effectively in
                        a specific role or job
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div>STEP 1 OF 3</div>
              <div className="flex gap-2">
                <Button variant="secondary" className="border cursor-default opacity-45 p-3 border-blue-400 rounded-full text-blue-500"><ChevronLeft /></Button>
                <Button 
                onClick={showContentIn}
                variant="secondary" 
                className="border p-3 border-blue-400 rounded-full text-blue-500"><ChevronRight /></Button>
              </div>
            </CardFooter>
          </Card> : (content === 1) ?

          <Card>
            <CardHeader className="text-2xl font-semibold pb-2">Review Types</CardHeader>
            <CardDescription className="font-semibold pl-6 mb-6">
              Use different review methods to facilitate a more comprehensive evaluation of employee
              performance and development needs.
            </CardDescription>
            <CardContent className="h-[320] overflow-y-auto mt-4">
              <div className="flex flex-col gap-2 ">
                <Card className="h-full flex items-center">
                  <CardContent className="flex items-center gap-4">
                    <div className="p-1 text-blue-500 rounded-lg border border-blue-500"><KeyRound /></div>
                    <div className="mt-2">
                      <h2 className="font-semibold">Self Review</h2>
                      <p className="text-sm">
                        Employees can access their own performance, stength, and areas for improvement.
                        It encourages self-awareness, accountability, and proactive engagement.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full flex items-center">
                <CardContent className="flex items-center gap-4">
                    <div className="p-1 text-blue-500 rounded-lg border border-blue-500"><Target /></div>
                    <div className="mt-2">
                      <h2 className="font-semibold">Multi-Rater Review</h2>
                      <p className="text-sm">
                        Collect ratings from varied sources, which can include people from the same 
                        team, different departments, or even different reporting structures. It promotes
                        transparency, fairness and promotes collaboration.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full">
                <CardContent className="flex items-center gap-4">
                    <div className="p-1 text-violet-500 rounded-lg border border-violet-500"><Crosshair /></div>
                    <div className="mt-2">
                      <h2 className="font-semibold">Manager Review</h2>
                      <p className="text-sm">
                        A more direct review type, where the employee's manager handles the performance evaluation.
                        This method aims to provide structured feedback, align employee performance with 
                        organizational objectives, identity development areas, and establish clear goals for
                        continous improvement and career growth.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardContent className="flex items-center gap-4">
                    <div className="p-1 text-red-500 rounded-lg border border-red-500"><Lightbulb /></div>
                    <div className="mt-2">
                      <h2 className="font-semibold">Continous Review</h2>
                      <p className="text-sm">
                        Recurring reviewa that focus on continued employee improvement by having reviews at regular
                        intervals. It can include self and manager ratings.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div>STEP 2 OF 3</div>
              <div className="flex gap-2 m-4">
                <Button 
                onClick={showContentDec}
                variant="secondary" 
                className="border p-3 border-blue-400 rounded-full text-blue-500"><ChevronLeft /></Button>
                <Button 
                onClick={showContentIn}
                variant="secondary" 
                className="border p-3 border-blue-400 rounded-full text-blue-500"><ChevronRight /></Button>
              </div>
            </CardFooter>
          </Card> :

          <Card>
            <CardHeader className="text-2xl font-semibold pb-2">
              How to use performance management in Zoho People? 
            </CardHeader>
            <CardDescription className="">
            </CardDescription>
            <CardContent className="h-[330] overflow-y-auto mt-4">
              <div className="flex flex-col gap-2 ">
                <Card className="h-full border border-dotted border-green-500 flex items-center">
                  <CardContent className="flex items-center gap-4">
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold">Create an appraisal template</h2>
                      <p className="text-sm">
                        Create an appraisal template, include self-review, manager review, 
                        multi-rater review, normalization and salary hikes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full border border-dotted border-yellow-500 flex items-center">
                  <CardContent className="flex items-center gap-4">
                    <div className="mt-2">
                      <h2 className="text-lg text-yellow-500 font-semibold">Specify review parameters</h2>
                      <p className="text-sm">
                        Include quantative and qualitative parameters such as Goals, KRA. Review questions to 
                        your review
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full border border-dotted border-orange-500 flex items-center">
                  <CardContent className="flex items-center gap-4">
                    <div className="mt-2">
                      <h2 className="text-lg text-orange-500 font-semibold">Select reviewers and customize review</h2>
                      <p className="text-sm">
                        Customize the review forms, and select the appropriate reviewers for manager reviews.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full border border-dotted border-red-500 flex items-center">
                  <CardContent className="flex items-center gap-4">
                    <div className="mt-2">
                      <h2 className="text-lg text-red-500 font-semibold">Setup rating and normalization</h2>
                      <p className="text-sm">
                        Define rating terms and define ideal rating distribution for normalization
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full border border-dotted border-blue-500 flex items-center">
                  <CardContent className="flex items-center gap-4">
                    <div className="mt-2">
                      <h2 className="text-lg font-semibold text-blue-500">Initiate appraisal cycle</h2>
                      <p className="text-sm">
                        Configure applicability for the appraisal review and setup the review timeline
                        and start the cycle
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div>STEP 3 OF 3</div>
              <Button 
              onClick={()=> changePage()}
              variant="secondary" 
              className="bg-blue-700 text-white hover:bg-blue-500">Getting Started</Button>
              <div className="flex gap-2 m-4">
                <Button 
                onClick={showContentDec}
                variant="secondary" 
                className="border p-3 border-blue-400 rounded-full text-blue-500"><ChevronLeft /></Button>
                <Button variant="secondary" className="border p-3 opacity-45 cursor-default border-blue-400 rounded-full text-blue-500"><ChevronRight /></Button>
              </div>
            </CardFooter>
          </Card>}
        </div>
      </div>
    </>
  )
}

export default GettingStarted