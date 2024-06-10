import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { Darker_Grotesque } from "next/font/google";
import GoalCard from "@/components/GoalCard";
import WordRotate from "./WordRotate";
const darker_grotesque = Darker_Grotesque({
  weight: "900",
  style: "normal",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-between gap-5">
        <div className="flex mt-10 w-full  lg:h-[9.5rem]">
          <h1
            className={`text-4xl lg:text-9xl font-bold ${darker_grotesque.className}`}>
            TicketX
          </h1>
          <WordRotate
            words={["Agency", "Startup", "SAAS", "WebApp"]}
            className={`text-4xl lg:text-9xl font-bold ${darker_grotesque.className}`}></WordRotate>
          {/* <span
            direction="up"
            behavior="scroll"
            className="animate-slide h-[2.25rem] lg:h-[8rem]">
            <h1
              className={`text-4xl lg:text-9xl font-bold ${darker_grotesque.className}`}>
              Agency
            </h1>
            <h1
              className={`text-4xl lg:text-9xl font-bold ${darker_grotesque.className}`}>
              Startup
            </h1>
            <h1
              className={`text-4xl lg:text-9xl font-bold" ${darker_grotesque.className}`}>
              SAAS
            </h1>
            <h1
              className={`text-4xl lg:text-9xl font-bold ${darker_grotesque.className}`}>
              WebApp
            </h1>
          </span> */}
        </div>
        <div>
          <p
            className={`${darker_grotesque.className} text-xs lg:text-xl text-wrap text-center`}>
            Dive into your numbers, understand your customers, <br></br> and
            resolve their issues with TicketX
          </p>
        </div>
        <div>
          <Button
            as={Link}
            className={`${darker_grotesque.className} rounded-full text-xl bg-black text-white text-center align-text-top px-16 py-2`}
            href="#"
            variant="solid">
            Dive In
          </Button>
        </div>
      </div>
      <div className="flex">
        <div className="hidden lg:block">
          <GoalCard></GoalCard>
        </div>
        <div>
          <Image
            src="/images/hero-stats.png" // Route of the image file
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt="hero-stats-image"
          />
        </div>
        <div className="hidden lg:block">
          <GoalCard></GoalCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
