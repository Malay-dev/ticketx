import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
