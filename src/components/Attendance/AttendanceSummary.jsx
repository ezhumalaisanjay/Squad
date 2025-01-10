"use client"
import { Drawer } from "antd";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from "@fullcalendar/list"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { Button } from "../ui/button";

function AttendanceSummary() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerHeader, setDrawerHeader] = useState(null);
  const handleDateSelect = (e) => {
    console.log(e)
    
    setIsDrawerOpen(!isDrawerOpen)
  }

  const renderEventContent = (e) => {
    
  }

  const handleEventClick = (e) => {
    
  }

  const closeDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return(
    <>
      <FullCalendar className="p-2"
      plugins={[listPlugin, timeGridPlugin, dayGridPlugin, interactionPlugin]}
      headerToolbar={{start:'prev,today,next', center:"title", end:"dayGridMonth,timeGridWeek,timeGridDay"}}
      initialView="timeGridWeek"
      events={{
        title: "My Event",
        start: "2025-01-01"
      }}
      editable={true}
      selectable={true}
      selectMirror={true}
      select={handleDateSelect}
      />
      <Drawer 
      open={isDrawerOpen}
      footer={
      <>
        <Button>Add</Button>
        <Button variant="secondary" onClick={closeDrawer}>Cancel</Button>
      </>
    }
      >

      </Drawer>
    </>
  )
}

export default AttendanceSummary