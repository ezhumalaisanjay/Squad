"use client"

import HeaderSection from "@/components/Header";
import "../../app/globals.css";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SidebarComponent from "@/components/Sidebar";
import {useEffect, useState } from "react";
import HomePage from "@/components/Home";

export default function HomeIndex() {
  const[width, setWidth] = useState(window.innerWidth);
  const components = [
    {
      name: "My Organization",
      link: "",
      id: 0
    }
  ];

  useEffect(() => {
    const handleResize = () => setWidth(1200)
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
        <Content><HomePage /></Content>
      </Layout> :
        <Layout>
          <Sider breakpoint="md">
            <SidebarComponent isActive={0}/>
          </Sider>
          <Layout>
            <Header className="h-14 p-0 bg-blue-900">
              <HeaderSection components={components}/>
            </Header>
            <Content><HomePage /></Content>
          </Layout>
        </Layout>}
    </Layout>
  );
}
