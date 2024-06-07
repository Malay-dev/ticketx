import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "TicketX",
  description: "Product by Maken",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <NavBar></NavBar>
          {children}
        </NextUIProvider> 
      </body>
    </html>
  );
}
