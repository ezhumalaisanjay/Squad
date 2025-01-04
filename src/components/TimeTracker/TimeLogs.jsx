import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import HeaderSection from "../Header";
import Sider from "antd/es/layout/Sider";
import SidebarComponent from "../Sidebar";
import TimeTracker from ".";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { NotepadText } from "lucide-react";

function TimeLogs() {

  return(
    <>
      <TimeTracker />
      <div className="flex gap-2">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Project" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <Input type="search"></Input>
              <Button variant="secondary"> Add Project </Button>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Job" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <Input type="search"></Input>
              <Button variant="secondary">Add Job</Button>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="What are you working on?" />
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Billable" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="flex flex-col items-start">
              <Button variant="secondary">Billable</Button>
              <Button variant="secondary">Non-Billable</Button>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="ghost"><NotepadText /></Button>
      </div>
    </>
  )
}


function TimeLogsIndex() {
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
            <Content><TimeLogs /></Content>
          </Layout> :
            <Layout>
              <Sider breakpoint="md">
                <SidebarComponent />
              </Sider>
              <Layout>
                <Header className="h-14 p-0 bg-blue-900">
                  <HeaderSection components={components}/>
                </Header>
                <Content><TimeLogs /></Content>
              </Layout>
            </Layout>}
        </Layout>
      </>
    )
}

export default TimeLogsIndex