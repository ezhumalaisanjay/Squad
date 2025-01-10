"use client"
import { Drawer } from "antd";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../ui/select";
import { Input } from "../ui/input";

function TimeSheets() {
  const [isOpen, setIsOpen] = useState(false);
  const closeDrawer = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <div className="m-3">
        <FullCalendar
        height={300}
        plugins={[listPlugin]}
        customButtons={{
          selectView : {
            text: "All",
            click: () => {
              console.log("Clicked the All");
            }
          },
        timeSheetView : {
          text: "Create Timesheet",
          click: ()=>{
            setIsOpen(!isOpen)
          }
        }
        }}
        headerToolbar={{start:"", center:"prev,today,next", end:"selectView timeSheetView"}}
        initialView="listMonth"
        />
        <Drawer
        open={isOpen}
        title="Create Timesheet"
        footer={
          <>
            <Button>Next</Button>
            <Button variant="Secondary" onClick={closeDrawer}>Cancel</Button>
          </>
        }
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <Label>Period</Label>
              <Select>
                <SelectTrigger>
                  This Week
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="this week">This Week</SelectItem>
                    <SelectItem value="this month">This Month</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="last week">Last Week</SelectItem>
                    <SelectItem value="last month">Last Month</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Clients</Label>
              <Input type="search" placeholder="All Clients"/>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Projects</Label>
              <Input type="search" placeholder="All Projects"/>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Jobs</Label>
              <Input type="search" placeholder="All Jobs"/>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Billable Status</Label>
              <Select>
                <SelectTrigger>
                  All
                </SelectTrigger>
                <SelectContent>
                  <SelectItem>All</SelectItem>
                  <SelectItem>Billable</SelectItem>
                  <SelectItem>Non-billable</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  )
}

export default TimeSheets