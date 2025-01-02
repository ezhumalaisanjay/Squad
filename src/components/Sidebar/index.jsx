import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { CalendarDays, CircleEllipsis, GaugeCircle, Handshake, House, Settings, TimerReset } from "lucide-react"
import { Link } from "react-router-dom"

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
    link : "/",
    icon : TimerReset,
  },{
    name : "Attendance",
    link : "/",
    icon : CalendarDays,
  },{
    name : "More",
    link : "/",
    icon : CircleEllipsis,
  }
]

function SidebarComponent() {
  return (
    <SidebarProvider>
      <Sidebar className="w-[200] text-white" collapsible="icon">
        <SidebarHeader className="font-bold text-white text-xl bg-blue-900">Squad</SidebarHeader>
        <SidebarContent className="bg-blue-900">
          <SidebarGroup className="text-white">
            <SidebarGroupLabel className="text-white">Pages</SidebarGroupLabel>
            <SidebarMenu>
              {components.map((item, i) => 
              <SidebarMenuItem key={i}>
                <SidebarMenuButton asChild >
                  <Link to={item.link}>
                    <item.icon />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="bg-blue-900 text-white">
        <SidebarMenu> 
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="">
                <Settings />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarTrigger/>
    </SidebarProvider>
  )
}

export default SidebarComponent