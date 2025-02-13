"use client"

import * as React from "react"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "../../../components/ui/sidebar"

import { data, navData } from "../data"
import { TeamSwitcher } from "./team-switcher"
import { NavDashboard } from "./nav-dashboard"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"



// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavDashboard projects={data.dashboard} title="Main"/>
        <NavMain items={navData} />
        <NavDashboard projects={data.others} title="Others"/>
        {/* <NavProjects projects={projectData}/> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
