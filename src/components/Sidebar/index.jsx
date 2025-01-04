"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Aperture, Award, CalendarCheck, CalendarDays, CircleEllipsis, Component, File, GaugeCircle, Handshake, House, LogOut, Navigation, Puzzle, Settings, SettingsIcon, Star, TimerReset, Trophy } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandInput } from "../ui/command";
import { Button } from "../ui/button";

const components = [
  {
    name : "Home",
    link : "/",
    icon : House,
  },{
    name : "Onboarding",
    link : "/onboarding",
    icon : Handshake
  },{
    name : "Leave Tracker",
    link : "/leavetracker",
    icon : GaugeCircle,
  },{
    name : "Time Tracker",
    link : "/timetracker",
    icon : TimerReset,
  },{
    name : "Attendance",
    link : "/attendance",
    icon : CalendarDays,
  }
]

function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const addLists = [
    {
      name: "Perfomance",
      icon: Trophy
    }, {
      name: "Files",
      icon: File
    }, {
      name: "Employee Engagement",
      icon: Award
    }, {
      name: "Cases",
      icon: Aperture
    }, {
      name: "HR Letters",
      icon: Star
    },{
      name: "Travel",
      icon: Navigation
    }, {
      name: "Tasks",
      icon: CalendarCheck
    }, {
      name: "Compensation",
      icon: Component
    }, {
      name: "General",
      icon: Puzzle
    }
  ];

  return (
    <>

      <SidebarProvider>
        <Sidebar className="w-[200] text-white" >
          <SidebarHeader className="font-bold text-white text-xl bg-blue-900">
            <div className="flex gap-2">
              <div className="w-auto"><img src="/images/logo.png" alt="logo" /></div>
            </div>
            </SidebarHeader>
          <SidebarContent className="bg-blue-900">
            <SidebarGroup className="text-white">
              <SidebarGroupLabel className="text-white">Pages</SidebarGroupLabel>
              <SidebarMenu>
                {components.map((item, i) => 
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild >
                    <Link to={item.link}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
                <SidebarMenuItem>
                  <SidebarMenuButton className="hover:bg-white">
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                      <PopoverTrigger className="flex gap-2 items-center w-full">
                        <CircleEllipsis className="size-4"/>
                        <span>More</span>
                      </PopoverTrigger>
                      <PopoverContent side="right" className="ml-2 w-[400] h-[400]">
                        <Command className="">
                          <CommandInput placeholder="Search" />
                          <div className="flex justify-between m-1 text-sm items-center">
                            <div className="font-bold">More Services</div>
                            <Button variant="link" className="flex gap-1 text-blue-500 hover:no-underline"><SettingsIcon className="size-4"/> Preferences</Button>
                          </div>
                          <ul className="flex items-start gap-4 flex-col mt-1 overflow-y-scroll">
                            {addLists.map((list, i) => <div className="flex bg-white" key={i}>
                              <Button variant="ghost" className="">
                              <list.icon />{list.name}
                              </Button>
                              </div>)}
                          </ul>
                        </Command>
                      </PopoverContent>
                    </Popover>            
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="bg-blue-900 text-white">
          <SidebarMenu> 
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="">
                  <Settings />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </>
  )
}

export default SidebarComponent