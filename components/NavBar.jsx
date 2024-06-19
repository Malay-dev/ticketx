"use client";
import React from "react";
import { Darker_Grotesque } from "next/font/google";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const darker_grotesque = Darker_Grotesque({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const nav_items = [
    { name: "Product", route: "/product" },
    { name: "Features", route: "#features" },
    { name: "About", route: "/about" },
    { name: "Pricing", route: "#pricing" },
    { name: "Documentation", route: "/documentation" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <Navbar
      className="shadow-lg bg-[#FBFFEF] dark:bg-black "
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <span className={`text-3xl ${darker_grotesque.className}`}>
            Ticket
            <span className={`text-4xl ${darker_grotesque.className}`}>X</span>
          </span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <span
            className={`md:text-2xl lg:text-3xl ${darker_grotesque.className}`}>
            Ticket
            <span
              className={`md:text-3xl lg:text-4xl ${darker_grotesque.className}`}>
              X
            </span>
          </span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className={`hidden w-full sm:flex items-center justify-center gap-6 xl:gap-10 ${darker_grotesque.className}`}
        justify="center">
        {nav_items.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className="text-2xl">
            <Link
              color="foreground"
              href={item.route}
              className="text-lg xl:text-xl">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className={`${darker_grotesque.className} rounded-full  text-lg lg:text-xl  text-center align-text-top lg:px-12 xl:px-16 py-2`}
            href="#"
            variant="bordered">
            Log in
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            className={`${darker_grotesque.className} rounded-full text-xl bg-black text-white text-center align-text-top lg:px-8 xl:px-10 py-2`}
            href="#"
            variant="solid">
            Try for free
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {nav_items.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === nav_items.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.route}
              size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
