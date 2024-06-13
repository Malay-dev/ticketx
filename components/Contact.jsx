import React from "react";
import Footer from "./Footer";
import { Button } from "@nextui-org/react";
import { Darker_Grotesque } from "next/font/google";
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

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1
          className={`mt-10 text-4xl lg:text-9xl font-bold ${darker_grotesque.className}`}>
          Boost your Experience
        </h1>
        <p
          className={`${darker_grotesque.className} text-xs lg:text-xl text-wrap text-center`}>
          Accelerate your business by effectively managing customer issues and
          enhancing satisfaction.
        </p>
        <div className="w-2/3">
          <Button
            variant="shadow"
            className={`${darker_grotesque.className} h-16 text-white bg-black rounded-full w-full text-2xl tracking-wider`}>
            Try TicketX for free
          </Button>
          <div className="flex mt-1">
            <Button
              variant="bordered"
              className={`${darker_grotesque.className} h-16 rounded-full w-full text-2xl tracking-wider`}>
              Book a demo
            </Button>
            <Button
              variant="bordered"
              className={`${darker_grotesque.className} h-16  rounded-full w-full text-2xl tracking-wider`}>
              {"Let's talk"}
            </Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
