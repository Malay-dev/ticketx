import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
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
const Pricing = () => {
  return (
    <div id="pricing" className="md:px-4 py-10">
      <div className="flex items-center justify-center">
        <h1
          className={`mt-10 text-4xl lg:text-7xl xl:text-9xl font-bold ${darker_grotesque.className}`}>
          Usage Based Pricing
        </h1>
      </div>
      <div className="flex items-center justify-center mt-5 md:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-white p-5 rounded-3xl shadow w-full  md:max-w-sm lg:max-w-md flex flex-col">
            <CardHeader className="flex flex-col items-start">
              <p className={`${darker_grotesque_semibold.className} text-lg`}>
                Starter
              </p>
              <h1
                className={`${darker_grotesque.className} text-6xl lg:text-7xl xl:text-8xl`}>
                Free
              </h1>
            </CardHeader>
            <CardBody>
              <p className={`${darker_grotesque_light.className} text-xl`}>
                Available Features
              </p>
              <ul
                className={`${darker_grotesque_light.className} list-item ml-4 leading-10 md:text-xl`}>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  Basic Dashboard Features
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  Real time tracking
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  {"100's of analytics data points"}
                </li>
              </ul>
              <Button
                variant={"bordered"}
                className={`${darker_grotesque_semibold.className} text-xl mt-8`}>
                Get Started
              </Button>
            </CardBody>
          </Card>
          <Card className="bg-white p-5 rounded-3xl shadow w-full max-w-xs md:max-w-sm lg:max-w-md flex flex-col">
            <CardHeader className="flex flex-col items-start">
              <p className={`${darker_grotesque_semibold.className} text-lg`}>
                Pro
              </p>
              <h1
                className={`${darker_grotesque.className} text-6xl lg:text-7xl xl:text-8xl`}>
                ₹1200
                <span
                  className={`${darker_grotesque_light.className} text-gray-600 text-xl`}>
                  /month
                </span>
              </h1>
            </CardHeader>
            <CardBody>
              <p className={`${darker_grotesque_light.className} text-xl`}>
                Available Features
              </p>
              <ul
                className={`${darker_grotesque_light.className} list-item ml-4 leading-10 md:text-xl`}>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  Data export capablities
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  Customizable Dashboard
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  {"1000's of analytics data points"}
                </li>
              </ul>
              <Button
                variant={"solid"}
                className={`${darker_grotesque_semibold.className} text-white bg-black text-xl mt-8`}>
                Try for free
              </Button>
            </CardBody>
          </Card>
          <Card className="bg-white p-5 rounded-3xl shadow w-full max-w-xs md:max-w-sm lg:max-w-md flex flex-col">
            <CardHeader className="flex flex-col items-start">
              <p className={`${darker_grotesque_semibold.className} text-lg`}>
                Enterprise
              </p>
              <h1
                className={`${darker_grotesque.className} text-6xl lg:text-7xl xl:text-8xl`}>
                ₹4000
                <span
                  className={`${darker_grotesque_light.className} text-gray-600 text-xl`}>
                  /month
                </span>
              </h1>
            </CardHeader>
            <CardBody>
              <p className={`${darker_grotesque_light.className} text-xl`}>
                Available Features
              </p>
              <ul
                className={`${darker_grotesque_light.className} list-item ml-4 leading-10 md:text-xl`}>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  Collabration tools
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  Dedicated account manager
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    className="bg-[#E4F0FF] rounded-full md:w-[24px] w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#363E4A">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                  {"Unlimited analytics data points"}
                </li>
              </ul>
              <Button
                variant={"bordered"}
                className={`${darker_grotesque_semibold.className} text-xl mt-8`}>
                Try for free
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
