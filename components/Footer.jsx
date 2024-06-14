"use client";
import React from "react";
import { useState } from "react";

import Link from "next/link";
import { Darker_Grotesque } from "next/font/google";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

const darker_grotesque = Darker_Grotesque({
  weight: "900",
  style: "normal",
  subsets: ["latin"],
});
const darker_grotesque_light = Darker_Grotesque({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

const darker_grotesque_semibold = Darker_Grotesque({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const Footer = () => {
  const [value, setValue] = useState("");
  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <footer>
      <div className="flex p-3 items-center justify-between">
        <div className="w-96">
          <h1 className={`${darker_grotesque_semibold.className} text-3xl`}>
            TicketX
          </h1>
          <span className="flex w-full max-w-sm items-center space-x-2">
            <Input
              value={value}
              type="email"
              label="Email"
              variant="underlined"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "black"}
              errorMessage="Please enter a valid email"
              onValueChange={setValue}
              className="max-w-xs"
            />
            <Button
              className={`${darker_grotesque_semibold.className} text-lg text-white bg-black`}
              variant="solid">
              Submit
            </Button>
          </span>
        </div>
        <div
          className={`${darker_grotesque_light.className} hidden md:grid grid-cols-3 gap-4 p-4 w-2/3 text-lg`}>
          <div className="p-6 text-left">
            <h1 className="text-gray-600">How it works</h1>
            <ul className="mt-2">
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="p-6 text-left">
            <h1 className="text-gray-600">Resources</h1>
            <ul className="mt-2">
              <li>Templates</li>
              <li>Learn</li>
              <li>Management guide</li>
            </ul>
          </div>
          <div className="p-6 text-left">
            <h1 className="text-gray-600">Company</h1>
            <ul className="mt-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${darker_grotesque_light.className} hidden md:flex items-center justify-between`}>
        <span className="flex space-x-3">
          <Avatar size="sm" src="/images/facebook.png"></Avatar>
          <Avatar size="sm" src="/images/instagram.png"></Avatar>
          <Avatar size="sm" src="/images/twitter.png"></Avatar>
          <Avatar size="sm" src="/images/linkedin.png"></Avatar>
        </span>
        <span>@2023-24 Maken. All rights reserved</span>
        <span className="space-x-3">
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Security</Link>
          <Link href={"#"}>Terms of Service</Link>
        </span>
      </div>
      <div
        className={`${darker_grotesque_light.className} md:hidden flex flex-col items-center justify-center gap-2`}>
        <span className="flex space-x-3">
          <Avatar size="sm" src="/images/facebook.png"></Avatar>
          <Avatar size="sm" src="/images/instagram.png"></Avatar>
          <Avatar size="sm" src="/images/twitter.png"></Avatar>
          <Avatar size="sm" src="/images/linkedin.png"></Avatar>
        </span>
        <span className="space-x-3">
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Security</Link>
          <Link href={"#"}>Terms of Service</Link>
        </span>
        <span>@2023-24 Maken. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
