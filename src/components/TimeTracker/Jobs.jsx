"use client"
import { Drawer } from "antd";
import TimeTracker from "."
import { useState } from "react";
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select";
import { Command, CommandInput } from "../ui/command";
import { Button } from "../ui/button";
import { ArrowUpFromLine, Download, Ellipsis, Expand, ListFilter, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

function Jobs() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(!isOpen);
  }

  const closeDrawer = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
      <div className="flex justify-between items-center m-3">
        <div className="w-1/2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Jobs"/>
            </SelectTrigger>
            <SelectContent>
              <Command>
                <CommandInput/>
              </Command>
              <div className="m-2">Public Views</div>
              <Button variant="secondary" className="border border-blue-600">Create View</Button>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <div>
          <Button variant="secondary" className="selection:border selection:border-blue-500">Employee</Button>
          <Button variant="secondary" className="selection:border selection:border-blue-500">Department</Button>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-400" onClick={openDrawer}>Add Job</Button>
          <Button variant="secondary" className=" hover:text-blue-500"><Expand /></Button>
          <Popover>
            <PopoverTrigger>
              <Button variant="secondary" className="hover:text-blue-500"><ListFilter /></Button>
            </PopoverTrigger>
            <PopoverContent>
              <Card>
                <CardHeader className="font-bold">Filter</CardHeader>
                <CardDescription></CardDescription>
                <CardContent className="rounded-lg">
                  <div className="flex flex-col gap-2">
                    <Label>Job Name</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All"/>
                      </SelectTrigger>
                      <SelectContent>
                        <div>All</div>
                        <div>Is</div>
                        <div>Is Not</div>
                        <div>Starts With</div>
                        <div>Ends With</div>
                        <div>Contains</div>
                      </SelectContent>
                    </Select>
                    <Label>Clients</Label>
                    <Input placeholder="All Clients"/>
                    <Label>Projects</Label>
                    <Input placeholder="All Projects" />
                    <Label>Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="In-Progress"/>
                      </SelectTrigger>
                      <SelectContent>
                        <div>All</div>
                        <div>In-Progress</div>
                        <div>Completed</div>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Apply</Button>
                  <Button variant="secondary">Reset</Button>
                </CardFooter>
              </Card>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
             <Button variant="secondary" className="hover:text-blue-500"><Ellipsis /></Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col">
              <Button variant="ghost"> <Download /> Import</Button>
              <Button variant="ghost"> <ArrowUpFromLine /> Export</Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div>
        <Card className="h-[300] justify-center flex items-center">
          <CardDescription></CardDescription>
          <CardContent>
            No Jobs Added Currently. To add new Jobs, click Add Job
          </CardContent>
        </Card>
        <Drawer
        className="rounded-lg mt-2"
        open={isOpen}
        title="Add Job"
        placement="top"
        height={620}
        footer={
          <>
            <Button className="bg-blue-500 hover:bg-blue-400 text-white">Submit</Button>
            <Button variant="secondary" onClick={closeDrawer}>Cancel</Button>
          </>
        }
        >
          <Card>
            <CardHeader className="font-bold">Job Configuration Details</CardHeader>
            <CardDescription></CardDescription>
            <CardContent className="flex flex-col gap-6">
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">Job Name</Label>
                <Input />
              </div>
              <div className="flex gap-16 items-center">
                <Label className="lg:text-nowrap">Project</Label>
                <div className="flex w-full gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select"/>
                    </SelectTrigger>
                    <SelectContent>
                      <Command>
                        <CommandInput />
                      </Command>
                    </SelectContent>
                  </Select>
                  <Button variant="secondary"><Plus /></Button>
                </div>
              </div>
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">Start Date</Label>
                <Input type="date"/>
              </div>
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">End Date</Label>
                <Input type="date"/>
              </div>
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">Hours</Label>
                <Input />
              </div>
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">Assignees</Label>
                <Input />
              </div>
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">Rate Per Hour</Label>
                <Input />
              </div>
              <div className="flex gap-11 items-start">
                <Label className="lg:text-nowrap">Description</Label>
                <Input className="h-[100]"/>
              </div>
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">Attachent</Label>
                <Input type="file"/>
              </div>
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">Reminder</Label>
                <Checkbox />
              </div>
              <div className="flex gap-11 items-center">
                <Label className="lg:text-nowrap">Billable Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <div>Billable</div>
                    <div>Non-billable</div>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </Drawer>
      </div>
    </>
  )
}

export default Jobs