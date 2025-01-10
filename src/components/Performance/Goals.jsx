import { ArrowUpFromLine, Download, Ellipsis, History, ListFilter } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { Drawer } from "antd";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { DialogTitle } from "../ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

function Goals() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const date = new Date()
  console.log(date);
  return(
    <>
      <div className="m-3 flex justify-between">
        <div>
          <Button variant="secondary" className="hover:border hover:border-blue-500">All In-Progress Goals <span className="text-green-500">0</span></Button>
          <Button variant="secondary" className="hover:border hover:border-blue-500">This Week <span className="text-red-500">0</span></Button>
          <Button variant="secondary" className="hover:border hover:border-blue-500">Last Week <span className="text-green-600">0</span></Button>
          <Button variant="secondary" className="hover:border hover:border-blue-500">This Month <span className="text-green-300">0</span></Button>
          <Button variant="secondary" className="hover:border hover:border-blue-500">Last Month <span className="text-black">0</span></Button>
        </div>
        <div>
          <Button 
          onClick={() => setOpenDrawer(true)}
          variant="secondary" 
          className="bg-blue-600 hover:bg-blue-400 text-white">Add Goals</Button>
          <Sheet>
            <SheetTrigger>
              <Button variant="outline"><ListFilter /></Button>
            </SheetTrigger>
            <SheetContent className="m-12 h-[550]">
              <DialogTitle>Filter</DialogTitle>
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex flex-col gap-3">
                  <Label>Goals Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="In-Progress" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="In-Progress">In-Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Overdue">Overdue</SelectItem>
                      <SelectItem value="Delayed">Delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Checkbox />
                  <Label>Set By Default</Label>
                </div>
                <div className="flex flex-col gap-3">
                  <Label>From Date</Label>
                  <Input type="date"/>
                </div>
                <div className="flex flex-col gap-3">
                  <Label>To Date</Label>
                  <Input type="date"/>
                </div>
              </div>
              <SheetFooter className="fixed bottom-14">
                  <Button className="bg-blue-500 hover:bg-blue-400">Apply</Button>
                  <Button variant="secondary">Reset</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Popover>
            <PopoverTrigger>
            <Button variant="outline"><Ellipsis /></Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-start">
              <Button variant="ghost" className="w-full flex justify-start hover:bg-slate-300"> <Download /> Import</Button>
              <Button variant="ghost" className="w-full flex justify-start hover:bg-slate-300"> <History /> Appraisal</Button>
              <Button variant="ghost" className="w-full flex justify-start hover:bg-slate-300"> <ArrowUpFromLine /> Export</Button>
            </PopoverContent>
          </Popover>
        </div>
        <Drawer
        open={openDrawer}
        className="rounded-lg m-2"
        title="Add Goals"
        placement="top"
        height={620}
        footer={
          <>
            <Button variant="secondary" className="bg-blue-600 hover:bg-blue-400 text-white">Submit</Button>
            <Button variant="secondary" onClick={() => setOpenDrawer(false)}>Cancel</Button>
          </>
        }>
          <Card>
            <CardHeader className="font-semibold text-lg">Goal Details</CardHeader>
            <CardDescription></CardDescription>
            <CardContent className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <Label className="text-nowrap">Start Date</Label>
                <Input type="date" />
              </div>
              <div className="flex gap-3 items-center">
                <Label className="text-nowrap">Goal Name</Label>
                <Input type="text" />
              </div>
              <div className="flex gap-3 items-center">
                <Label className="text-nowrap">Due Date</Label>
                <Input type="date" />
              </div>
              <div className="flex gap-3 items-center">
                <Label>Priority</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select</SelectLabel>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="highest">Highest</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 items-start">
                <Label>Description</Label>
                <Input className="h-[80]" />
              </div>
              <div className="flex gap-3 items-center">
                <Label>Progress</Label>
                <Input />
              </div>
            </CardContent>
          </Card>
        </Drawer>
      </div>
    </>
  )
}

export default Goals