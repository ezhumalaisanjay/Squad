"use client"
import { Drawer } from "antd";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectTrigger } from "../ui/select";
import { Input } from "../ui/input";

function AttendanceShift() {
  const [open, setOpen] = useState(false)
  const closeDrawer = () => {
    setOpen(!open)
  }

  return(
    <>
      <div className="m-3">
        <FullCalendar 
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        customButtons={{
          myAssignShift: {
            text: "Assign Shift",
            click: () => {
              setOpen(!open);
            }
          }
        }}
        headerToolbar={{start:'', center:"prev,today,next", end:"dayGridMonth,timeGridWeek myAssignShift"}}
        initialView='timeGridWeek'
        editable={true}
        selectable={true}
        selectMirror={true}
        />
      </div>
      <Drawer 
        open={open}
        title="Assign Shift"
        footer={
        <>
          <Button>Submit</Button>
          <Button variant='secondary' onClick={closeDrawer}>Cancel</Button>
        </>
        }
        >
          <Card>
            <CardDescription></CardDescription>
            <CardContent className="grid gap-4 p-3">
              <div className="flex flex-col gap-3">
                <Label>Shift name</Label>
                <Select>
                  <SelectTrigger>
                    Select
                  </SelectTrigger>
                  <SelectContent>
                    <Input type="search" />
                    <div className="flex justify-between">
                      <div>General</div>
                      <div>09:00 AM - 6:00PM</div>
                    </div>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">  
                <Label>Dates</Label>
                <div className="flex gap-2">
                  <Input type='date'/>
                  <Input type='date'/>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Reason</Label>
                <Input type="text" placeholder="Reason"/>
              </div>
            </CardContent>
          </Card>
        </Drawer>
    </>
  )
}

export default AttendanceShift