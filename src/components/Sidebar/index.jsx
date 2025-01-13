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
import Image from "next/image";
import logo from '../Images/logo.png';
function SidebarComponent({isActive}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false)
  const components = [
    {
      name : "Home",
      link : "/home/",
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

  const addLists = [
    {
      name: "Perfomance",
      icon: Trophy,
      link: "/performance/"
    }, {
      name: "Files",
      icon: File,
      link: "/files/"
    }, {
      name: "Employee Engagement",
      icon: Award,
      link: "/employeengagement/"
    }, {
      name: "Cases",
      icon: Aperture,
      link: "/cases/"
    }, {
      name: "HR Letters",
      icon: Star,
      link: "/hrletters/"
    },{
      name: "Travel",
      icon: Navigation,
      link: "/travel/"
    }, {
      name: "Tasks",
      icon: CalendarCheck,
      link: "/tasks/"
    }, {
      name: "Compensation",
      icon: Component,
      link: "/compensation/"
    }, {
      name: "General",
      icon: Puzzle,
      link: "/general/"
    }
  ];
  const showEnable = () => {
    setIsShow(true);
    isActive=null;
  }
  
  return (
    <>
      <SidebarProvider>
        <Sidebar className="w-[200] text-white" >
          <SidebarHeader className="font-bold text-white text-xl bg-blue-900">
            <div className="flex gap-2">
<<<<<<< HEAD
              <div className="w-auto"><Image src={logo} alt="Logo" width={100} height={100} /></div>
=======
              <div className="w-auto"><img src="/images/logo.png" alt="logo" /></div>
>>>>>>> fc3876c5959b09a899d5523f15b515ba338e1a87
            </div>
            </SidebarHeader>
          <SidebarContent className="bg-blue-900">
            <SidebarGroup className="text-white">
              <SidebarGroupLabel className="text-white">Pages</SidebarGroupLabel>
              <SidebarMenu>
                {components.map((item, i) => 
                <SidebarMenuItem key={i} id={i} className="hover:bg-opacity-35">
                  <SidebarMenuButton asChild className={i===isActive && (!isShow) ? "bg-white text-black" : "" + "hover:bg-slate-300" }>
                    <Link to={item.link}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={showEnable} className={isShow ? "bg-white text-black" : "" + "hover:bg-slate-300"}>
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
                            {addLists.map((list, i) => <div className="w-full bg-white" key={i}>
                              <Link to={list.link}>
                                <Button variant="ghost" 
                                className="w-full flex justify-start hover:bg-slate-300"
                                onClick={showEnable}
                                >
                                  <list.icon />{list.name}
                                </Button>
                              </Link>
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