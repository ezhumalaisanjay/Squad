"use client"
import { Award, Eye, ListFilter, Star, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"
import { DialogTitle } from "../ui/dialog"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Command } from "../ui/command"
import { CommandInput } from "cmdk"

function Feedback() {
  const [selected, setSelected] = useState(false);

  return(
    <>
      <div className="flex lg:flex-row gap-2 flex-col justify-between m-4">
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
          <Sheet>
            <SheetTrigger>
              <Button variant="secondary" className="bg-blue-500 text-white hover:bg-blue-400">Provide Feedback</Button>
            </SheetTrigger>
            <SheetContent className="lg:m-12 h-[550]">
              <DialogTitle>Provide Feedback</DialogTitle>
              <div className="flex flex-col gap-3 mt-6">
                <div className="">
                  <Label>Select Employee</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <Command>
                        <CommandInput />
                      </Command>
                      <SelectItem value="Select">Select</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <SheetFooter className="fixed bottom-14">
                <SheetClose>
                  <Button variant="secondary">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

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
      <div className="lg:ml-2 flex gap-2 overflow-y-auto">
        <div>
          <Button 
          variant="secondary"
          className="flex flex-col hover:border hover:border-blue-500 items-start h-full">
            <div>All Feedback</div>
            <div>0</div>
          </Button>
        </div>
        <div>
          <Button 
          variant="secondary"
          className="flex flex-col hover:border hover:border-green-500 items-start h-full">
            <div>Positive</div>
            <div className="flex gap-2 items-center"><ThumbsUp className="text-green-500"/> 0</div>
          </Button>
        </div>
        <div>
          <Button 
          variant="secondary"
          className="flex flex-col items-start hover:border hover:border-red-500 h-full">
            <div>Negative</div>
            <div className="flex gap-2 items-center"><ThumbsDown className="text-red-500"/> 0</div>
          </Button>
        </div>
        <div>
          <Button 
          variant="secondary"
          className="flex flex-col items-start hover:border hover:border-orange-500 h-full">
            <div>Training</div>
            <div className="flex gap-2 items-center"><Star className="text-orange-500"/> 0</div>
          </Button>
        </div>
        <div>
          <Button 
          variant="secondary"
          className="flex flex-col items-start hover:border hover:border-purple-500 h-full">
            <div>Observation</div>
            <div className="flex gap-2 items-center"><Eye className="text-purple-500"/> 0</div>
          </Button>
        </div>
        <div>
          <Button 
          variant="secondary"
          className="flex flex-col items-start hover:border hover:border-yellow-500 h-full">
            <div>Reward</div>
            <div className="flex gap-2 items-center"><Award className="text-yellow-500"/> 0</div>
          </Button>
        </div>
      </div>
      <div>
        {(!selected) ? 
        <Card className="flex justify-center items-center h-[300] m-2">
          <CardContent>No Feedback given yet</CardContent>
        </Card> :
        <Card className="flex justify-center items-center h-[300] m-2">
        <CardContent>No Feedback </CardContent>
      </Card>}
      </div>
    </>
  )
}

export default Feedback