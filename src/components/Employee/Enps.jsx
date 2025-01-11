"use client"
import { ListFilter } from "lucide-react"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet"
import { DialogTitle } from "../ui/dialog"
import { Label } from "../ui/label"
import { Command, CommandInput } from "../ui/command"
import { Input } from "../ui/input"
import { Checkbox, Drawer } from "antd"
import { useState } from "react"

function ENps() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
    <div className="flex justify-between items-center m-3">
      <div className="lg:w-1/2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Ongoing">Ongoing</SelectItem>
              <SelectItem value="Upcoming">Upcoming</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white hover:bg-blue-400">Create eNPS Survey</Button>
        <Sheet>
          <SheetTrigger>
            <Button variant="secondary"><ListFilter /></Button>
          </SheetTrigger>
          <SheetContent className="m-12 h-[550]">
            <DialogTitle>Filter</DialogTitle>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex flex-col gap-3">
                <Label>Survey Name</Label>
                <Command>
                  <CommandInput placeholder="Enter the Survey name" />
                </Command>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Metrics</Label>
                <Command>
                  <CommandInput placeholder="Select" />
                </Command>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="Ongoing">Ongoing</SelectItem>
                      <SelectItem value="Upcoming">Upcoming</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Period</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="This Month(1 Jan - 10 Jan)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="This Month">This Month(1 Jan - 10 Jan)</SelectItem>
                      <SelectItem value="Last Month">Last Month(1 Dec - 31 Dec)</SelectItem>
                      <SelectItem value="Last Three Months">Last Three months(1 Oct - 31 Dec)</SelectItem>
                      <SelectItem value="Last Six Months">Last Six months(1 Jul - 31 Dec)</SelectItem>
                      <SelectItem value="Custom Period">Custom Period</SelectItem>
                    </SelectGroup>
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
    <div className="flex justify-center items-center text-center">
      <Card>
        <CardContent className=" h-[300] items-center flex flex-col justify-center gap-2">
          <div>No surveys to display</div>
          <p className="lg:w-1/2">Employee Net Promoter Score(eNPS) Survey is a tool to measure your employee's satisfaction
            levels in the organization . Create an eNPS survey to find out!
          </p>
          <Button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white w-max hover:bg-blue-400">Create eNPS Survey</Button>
        </CardContent>
      </Card>
    </div>
    <Drawer
    title="eNPS Survey"
    height={630}
    open={isOpen}
    placement="top"
    footer={
      <div className="flex justify-end">
        <Button 
        className="bg-blue-500 text-white w-max hover:bg-blue-400" 
        onClick={() => setIsOpen(false)}
        >Next</Button>
      </div>
    }>
      <div>
        <div className="flex justify-center lg:gap-20 items-center gap-4">
          <div className="flex flex-col gap-1 items-center">
            <Button className="rounded-full pl-4 pr-5 w-max">1</Button>
            <Button variant="secondary">Setup</Button>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Button className="rounded-full w-max">2</Button>
            <Button variant="secondary">Applicability</Button>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Button className="rounded-full w-max">3</Button>
            <Button variant="secondary">Notifications</Button>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Button className="rounded-full w-max">4</Button>
            <Button variant="secondary">Publish</Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-1/3 flex-col items-start">
            <Button variant="ghost" className="border-0 w-full flex justify-start border-l-2 border-l-black rounded-none">Basic Details</Button>
            <Button variant="ghost" className="border-0 border-l-2 w-full flex justify-start border-l-slate-300 rounded-none">Question</Button>
            <Button variant="ghost" className="border-0 border-l-2 w-full flex justify-start border-l-slate-300 rounded-none">Schedule</Button>
          </div>
          <div>
            <Card>
              <CardHeader>Details</CardHeader>
              <CardDescription>Give your survey a name and a description</CardDescription>
              <CardContent className="h-[293] overflow-y-auto">
                <div>
                  <Label>Name</Label>
                  <Input />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input />
                </div>
                <div>
                  <Checkbox />
                  <Label>Description</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Drawer>
    </>
  )
}

export default ENps