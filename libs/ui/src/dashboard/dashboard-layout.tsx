import React, { PropsWithChildren } from 'react'
import { SidebarInset, SidebarProvider } from '../components/ui/sidebar';
import { AppSidebar } from './components/navbar/app-sidebar';
import SidebarHeader from './components/navbar/sidebar-header';

const DashboardLayout = ({children}:PropsWithChildren) => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <SidebarHeader />
      {children}
    </SidebarInset>
  </SidebarProvider>
  )
}

export default DashboardLayout