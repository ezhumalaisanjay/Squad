"use client"
import { Layout } from "antd";
import LeaveTracker from "."
import { Content, Header } from "antd/es/layout/layout";
import HeaderSection from "../Header";
import Sider from "antd/es/layout/Sider";
import SidebarComponent from "../Sidebar";
import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid'

function Shift() {

  return(
    <>
      <LeaveTracker />
      <div className="m-3">
        <FullCalendar 
        plugins={[ timeGridPlugin ]}
        initialView='timeGridWeek'
        />
      </div> 
    </>
  )
}

function ShiftIndex() {
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
            <Content><Shift /></Content>
          </Layout> :
            <Layout>
              <Sider breakpoint="md">
                <SidebarComponent />
              </Sider>
              <Layout>
                <Header className="h-14 p-0 bg-blue-900">
                  <HeaderSection components={components}/>
                </Header>
                <Content><Shift /></Content>
              </Layout>
            </Layout>}
        </Layout>
      </>
)
}
export default ShiftIndex