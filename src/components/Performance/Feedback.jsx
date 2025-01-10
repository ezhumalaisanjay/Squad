"use client"
import { Award, Eye, ListFilter, Star, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"
import { DialogTitle } from "../ui/dialog"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"

function Feedback() {
  const [selected, setSelected] = useState(false);

  return(
    <>
      <div className="flex justify-between m-4">
        <div className="flex">
          <Button 
          onClick={() => setSelected(false)}
          variant="secondary" 
          className={(!selected) ? "border border-blue-500" : "" + "bg-slate-200 hover:bg-slate-200 text-slate-400"}
          >Received Feedback</Button>
          <Button
          onClick={() => setSelected(true)}
          variant="secondary" 
          className={(selected) ? "border border-blue-500" : "" + "bg-slate-200 hover:bg-slate-200 text-slate-400"}
          >Given Feedback</Button>
        </div>
        <div className="flex gap-1">
          <Button variant="secondary" className="bg-blue-500 text-white hover:bg-blue-400">Provide Feedback</Button>
          <Sheet>
            <SheetTrigger>
              <Button variant="outline"><ListFilter /></Button>
            </SheetTrigger>
            <SheetContent className="lg:m-12 h-[550]">
              <DialogTitle>Filter</DialogTitle>
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex flex-col gap-3">
                  <Label>Period</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Feedback" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Feedback">All Feedback</SelectItem>
                      <SelectItem value="This week">This week</SelectItem>
                      <SelectItem value="Last Week">Last Week</SelectItem>
                      <SelectItem value="This Month">This Month</SelectItem>
                      <SelectItem value="Last Month">Last Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <SheetFooter className="fixed bottom-14">
                  <Button className="bg-blue-500 hover:bg-blue-400">Apply</Button>
                  <Button variant="secondary">Reset</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <Button className="flex flex-col items-start h-full">
            <div>All Feedback</div>
            <div>0</div>
          </Button>
        </div>
        <div>
          <Button className="flex flex-col items-start h-full">
            <div>Positive</div>
            <div><ThumbsUp /> 0</div>
          </Button>
        </div>
        <div>
          <Button className="flex flex-col items-start h-full">
            <div>Negative</div>
            <div><ThumbsDown /> 0</div>
          </Button>
        </div>
        <div>
          <Button className="flex flex-col items-start h-full">
            <div>Training</div>
            <div><Star /> 0</div>
          </Button>
        </div>
        <div>
          <Button className="flex flex-col items-start h-full">
            <div>Observation</div>
            <div><Eye /> 0</div>
          </Button>
        </div>
        <div>
          <Button className="flex flex-col items-start h-full">
            <div>Reward</div>
            <div><Award /> 0</div>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Feedback