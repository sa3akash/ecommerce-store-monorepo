"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme, UseThemeProps } from "next-themes"

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}



export const ThemeProviderLayout = ({children}:React.PropsWithChildren) => {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
  )
}


export const useThemes = () => {
  return useTheme() as UseThemeProps
}