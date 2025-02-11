import type { Metadata } from "next";
import { Poppins,Roboto } from "next/font/google";
import "@ecommerce/ui/src/app/globals.css";
import {ThemeProviderLayout} from "@ecommerce/ui/components/providers/theme-provider"

const geistSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300" , "400" , "500" , "700" , "900"]
});

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300" , "400" , "500" , "700" , "900"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${robotoFont.variable} antialiased`}
      >
        <ThemeProviderLayout>
        {children}
        </ThemeProviderLayout>
      </body>
    </html>
  );
}
