"use client"

import { Bell, Search, SquarePlus, UserPen } from "lucide-react";
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

function HeaderSection({components}) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const addLists = ["Leave", "Travel Request", "Travel Expense", "Task", "Address Proof", "Experience Letter"];

  return (
  <>
    <div className="flex justify-between items-center text-white">
      <ul className="flex items-center">
        <MobileView />
        {(components) ? components.map((item, i) => <li key={i}>
          <Button className="hover:border-b-2 p-2 lg:p-4 rounded-none" variant="Link">
            {item.name}
          </Button></li>) : 
          [{
            name: "My Space",
            link: ""
          },
          {
            name: "Organization",
            link: ""
            }].map((item, i) => <li key={i}>
              <Button className="hover:border-b-2 p-2 lg:p-4 rounded-none" variant="Link">
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
        <Popover open={isOpen3} onOpenChange={setIsOpen3}>
          <PopoverTrigger>
            <Button variant="Icon" className="text-lg size-12 hover:bg-blue-700 "> <Bell /> </Button>
          </PopoverTrigger>
          <PopoverContent>

          </PopoverContent>
        </Popover>
        <Popover open={isOpen4} onOpenChange={setIsOpen4}>
          <PopoverTrigger>
            <Button variant="Icon" className="text-lg size-12 rounded-full hover:bg-blue-700 "> <UserPen /> </Button>
          </PopoverTrigger>
          <PopoverContent>

          </PopoverContent>
        </Popover>
      </div>
    </div>
  </>
  )
}

export default HeaderSection