"use client"

import HeaderSection from "@/components/Header";
import "../../app/globals.css";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SidebarComponent from "@/components/Sidebar";
import {useEffect, useState } from "react";
import EmployeeEngagement from "../Employee";
import SurveySection from "../Employee/SurveySection";

function EmployeeEngagementIndex() {
  const[width, setWidth] = useState(1200);
  const [index, setIndex] = useState(0);
  const changingId = (id) => {
    setIndex(id)
  }
  const components = [
    {
      name: "My Data",
      func: changingId,
      id: 0
    },{
      name: "Surveys",
      func: changingId,
      id: 1
    }
  ];

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);

    return ()=>  window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <Layout>
      { width < 768 ? 
      <Layout>
        <Header className="h-14 p-0 bg-blue-900">
          <HeaderSection components={components}/>
        </Header>
        <Content>
          {index ===0 ? <EmployeeEngagement /> : <SurveySection />}
        </Content>
      </Layout> :
        <Layout>
          <Sider breakpoint="md">
            <SidebarComponent isActive={0}/>
          </Sider>
          <Layout>
            <Header className="h-14 p-0 bg-blue-900">
              <HeaderSection components={components}/>
            </Header>
            <Content>
              {index ===0 ? <EmployeeEngagement /> : <SurveySection />}
            </Content>
          </Layout>
        </Layout>}
    </Layout>
  );
}

export default EmployeeEngagementIndex