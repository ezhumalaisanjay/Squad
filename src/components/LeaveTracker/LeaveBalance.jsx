"use client"
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import HeaderSection from "../Header";
import Sider from "antd/es/layout/Sider";
import SidebarComponent from "../Sidebar";
import LeaveTracker from ".";

function LeaveBalance() {
  return (
    <>
      <LeaveTracker />
      <div className="h-[500] flex items-center justify-center">No Data Found</div>
    </>
  )
}

function LeaveBalanceIndex() {
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
            <Content><LeaveBalance /></Content>
          </Layout> :
            <Layout>
              <Sider breakpoint="md">
                <SidebarComponent />
              </Sider>
              <Layout>
                <Header className="h-14 p-0 bg-blue-900">
                  <HeaderSection components={components}/>
                </Header>
                <Content><LeaveBalance /></Content>
              </Layout>
            </Layout>}
        </Layout>
      </>
)}

export default LeaveBalanceIndex