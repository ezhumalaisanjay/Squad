"use client"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Aperture, Award, CalendarCheck, CalendarDays, CircleEllipsis, Component, File, GaugeCircle, Handshake, House, Menu, Navigation, Puzzle, SettingsIcon, Star, TimerReset, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandInput } from "../ui/command";
import { useState } from "react";

function MobileView() { 
  const [isOpen, setIsOpen] = useState(false);
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
  ];
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
    <Sheet key="left">
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden m-0 hover:bg-blue-700"><Menu /></Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-blue-800 p-2 text-white w-[200]">
        <SheetHeader>
          <SheetTitle className="text-white p-4 pl-0">
            <div className="flex gap-2">
                <div><img src="/_next/static/media/logo.c3cc4a2b.png" alt="logo" /></div> 
              </div>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-5">
          <ul className="flex flex-col gap-3 ">
          {components.map((item, i) => 
            <li className="flex hover:bg-white hover:text-black p-1 rounded-sm" key={i}>
              <Link to={item.link} className="flex gap-3">
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </li>
          )}
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className="flex gap-3 rounded-sm items-center p-1 hover:bg-white hover:text-black">
              <CircleEllipsis className="size-6"/>
              <span>More</span>
            </PopoverTrigger>
            <PopoverContent side="right" className=" lg:w-[400] h-[400]">
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
          </ul>
          
        </div>
      </SheetContent>
    </Sheet>
  </>)
}

export default MobileView