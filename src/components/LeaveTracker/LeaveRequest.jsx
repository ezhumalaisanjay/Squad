"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ListFilter, MoreHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import { Layout } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import HeaderSection from "../Header"
import Sider from "antd/es/layout/Sider"
import SidebarComponent from "../Sidebar"
import LeaveTracker from "."
import LeaveDrawer from "./LeaveDrawer"

function LeaveRequest() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openDrawer = () => {
    setIsOpen(true);
  }
  
  const closeDrawer = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <LeaveTracker />
      <div className="grid grid-cols-2 justify-between items-center ">
        <div className="m-5 flex">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Leave"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>
                  <Input type="search" placeholder="Search" />
                </SelectLabel>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex">
        <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Requests">All</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="flex flex-col items-start">
                <Button variant="ghost">All Requests</Button>
                <Button variant="ghost">Approved</Button>
                <Button variant="ghost">Rejected</Button>
                <Button variant="ghost">Pending</Button>
                <Button variant="ghost">Cancelled</Button>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="secondary" className="hover:text-blue-500"><ListFilter /></Button>
          <Button variant="secondary"><MoreHorizontal /></Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-blue-500 hover:bg-blue-600" onClick={openDrawer}>Add Request</Button>
        <LeaveDrawer open={isOpen} close={closeDrawer}/>
      </div>
    </>
  )
}

function LeaveRequestIndex() {
  const[width, setWidth] = useState(window.innerWidth);
  const components = [
    {
      name: "My Data",
      link: ""
    },
    {
      name: "Team",
      link: ""
    },
    {
      name: "Holidays",
      link: ""
    }
  ];
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize);
  
      return ()=>  window.removeEventListener('resize', handleResize);
    }, [])
  
    return(
      <>
        <Layout>
          { width < 768 ? 
          <Layout>
            <Header className="h-14 p-0 bg-blue-900">
              <HeaderSection components={components}/>
            </Header>
            <Content><LeaveRequest /></Content>
          </Layout> :
            <Layout>
              <Sider breakpoint="md">
                <SidebarComponent />
              </Sider>
              <Layout>
                <Header className="h-14 p-0 bg-blue-900">
                  <HeaderSection components={components}/>
                </Header>
                <Content><LeaveRequest /></Content>
              </Layout>
            </Layout>}
        </Layout>
      </>
    )
}


export default LeaveRequestIndex