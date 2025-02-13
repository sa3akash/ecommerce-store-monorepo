import React, { PropsWithChildren } from 'react'
import DashboardLayoutRoot from '@ui/dashboard/dashboard-layout'

const DashboardLayout = ({children}:PropsWithChildren) => {
  return (
    <DashboardLayoutRoot>
      {children}
    </DashboardLayoutRoot>
  )
}

export default DashboardLayout