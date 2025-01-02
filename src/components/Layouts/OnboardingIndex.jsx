"use client"

import HeaderSection from "@/components/Header";
import "../../app/globals.css";
import Layout, { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SidebarComponent from "@/components/Sidebar";
import {useEffect, useState } from "react";
import Onboarding from "@/components/Onboarding";

export default function OnboardingIndex() {
  const[width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);

    return ()=>  window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <Layout>
      { width < 768 ? 
      <Layout>
        <Header className="h-14 bg-blue-900">
          <HeaderSection />
        </Header>
        <Content><Onboarding /></Content>
      </Layout> :
        <Layout>
          <Sider breakpoint="md">
            <SidebarComponent />
          </Sider>
          <Layout>
            <Header className="h-14 bg-blue-900">
              <HeaderSection />
            </Header>
            <Content><Onboarding /></Content>
          </Layout>
        </Layout>}
    </Layout>
  );
}
