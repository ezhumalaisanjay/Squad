"use client"

import { Bell, Info, LogOut, Search, SquarePlus, User, UserPen } from "lucide-react";
import { Button } from "../ui/button";
import {
  Command,
  CommandInput
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import MobileView from "../Sidebar/MobileView";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Link } from "react-router-dom";

function HeaderSection({components}) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [index, setIndex] = useState(0);
  const addLists = ["Leave", "Travel Request", "Travel Expense", "Task", "Address Proof", "Experience Letter"];

  const handleClick = (id) => {
    setIndex(id)
  }
  return (
  <>
    <div className="flex justify-between items-center text-white">
      <ul className="flex items-center">
        <MobileView />
        {(components) ? components.map((item, i) => <li key={i}>
          <Button 
          onClick={() => {
            handleClick(item.id)
            item.func(item.id)
          }}
          className={index===i ? "border-b-2 rounded-none ml-1" : "" + "hover:border-b-2 ml-2 p-2 lg:p-4 rounded-none"} 
          variant="Link">
            {item.name}
          </Button></li>) : 
          [{
            name: "My Organization",
            link: ""
            }].map((item, i) => <li key={i}>
              <Button 
              onClick={() => handleClick(item.id)}
              className={index===i ? "border-b-2 rounded-none ml-1" : "" + "hover:border-b-2 p-2 ml-2 lg:p-4 rounded-none"} 
              variant="Link">
                {item.name}
            </Button></li>)}
      </ul>
      <div className="flex">
        <Popover open={isOpen1} onOpenChange={setIsOpen1}>
          <PopoverTrigger>
            <Button variant="Icon" className="text-lg size-12 hover:bg-blue-700 "> <SquarePlus /> </Button>
          </PopoverTrigger>
          <PopoverContent className="h-[200]">
            <Command>
              <CommandInput placeholder="Search"/>
              <ul className="flex gap-4 flex-col mt-1 overflow-y-scroll">
                {addLists.map((list, i) => <li className="list-none hover:bg-slate-200" key={i}>{list}</li>)}
              </ul>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={isOpen2} onOpenChange={setIsOpen2}>
          <PopoverTrigger>
            <Button variant="Icon" className="text-lg size-12 hover:bg-blue-700 "> <Search /> </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Command>
                <CommandInput placeholder="Search" />
              </Command>
            </PopoverContent>
        </Popover>
        <Sheet key="right">
          <SheetTrigger>
            <Button variant="Icon" className="text-lg size-12 hover:bg-blue-700 "> <Bell /> </Button>
          </SheetTrigger>
          <SheetContent side="right" className="h-[600] p-2 lg:w-full mt-3 mr-1 lg:mr-3 rounded-lg">
            <SheetHeader>
              <SheetTitle>
                <div className="flex gap-1 items-center">
                  <div className="font-semibold">Notifications</div>
                <a href="" className="text-sm text-blue-500">Mark all as read</a>
                </div>
              </SheetTitle>
              <SheetDescription>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet key="left">
          <SheetTrigger asChild className="mt-1">
            <Button variant="Icon" className="text-lg size-12 rounded-full hover:bg-blue-700 "> <UserPen /> </Button>
          </SheetTrigger>
          <SheetContent side="right" className="h-[600] p-2 lg:w-full mt-3 mr-3 rounded-lg">
            <SheetHeader>
              <SheetTitle className="text-black p-4 pl-0 text-sm">
                <div>
                  <div className="flex justify-start gap-2 items-start">
                    <img src={null} alt="logo" />
                    <div className="text-left">
                      <div>NAME</div>
                      <div className="flex gap-2 items-center font-light">USER ID: 12345678 <Info className="w-4"/></div>
                      <div>example@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex mt-3 justify-between">
                    <Button className="p-1 bg-white hover:bg-white hover:text-blue-400 text-blue-600 border-blue-600 border">My Account</Button>
                    <Link to="/"><Button variant="ghost" className="text-amber-700 p-0 m-0 hover:text-amber-700"><LogOut /> Sign Out</Button></Link>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <SheetDescription>
            </SheetDescription>
            <div className="overflow-y-scroll h-[420]">
              <Card className="mt-3 border-gray-500 border-opacity-50">
                <CardContent className="h-[100]">
                  <div className="flex justify-between items-center">
                    <div className=" text-sm font-semibold">Manage Account</div>
                    <Button variant="ghost" className="text-blue-500 ">Manage Organization</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-1 border-gray-500 border-opacity-50">
                <CardContent className="mt-3 h-[200]">
                  <div className="text-sm font-semibold">People Options</div>
                </CardContent>
              </Card>
              <Card className="mt-1 border-gray-500 border-opacity-50">
                <CardContent className="mt-3 h-[100]">
                  <div className="text-sm font-semibold">Zoho People on your mobile and stay connected</div>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </>
  )
}

export default HeaderSection