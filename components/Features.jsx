import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

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
const Features = () => {
  return (
    <div id="features">
      <div className="flex items-center justify-center">
        <h1
          className={`mt-10 text-4xl lg:text-9xl font-bold ${darker_grotesque.className}`}>
          Features & Benefits
        </h1>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Card className="bg-white p-3 lg:p-6 rounded-3xl shadow-sm border w-36 h-28 sm:w-48 sm:h-36 lg:w-96 lg:h-60">
            <CardHeader className="flex flex-col items-center justify-center">
              <Image
                src="/images/real-time.png"
                width={80}
                height={80}
                alt="clock"></Image>
              <h4 className={`${darker_grotesque.className} text-3xl`}>
                Real-time Data
              </h4>
            </CardHeader>
            <div
              className={`${darker_grotesque_light.className} text-xl text-center`}>
              Instant updates for smart,<br></br>quick decisions for your
              business
            </div>
          </Card>
          <Card className="bg-white p-3 lg:p-6 rounded-3xl shadow-sm border w-36 h-28 sm:w-48 sm:h-36 lg:w-96 lg:h-60">
            <CardHeader className="flex flex-col items-center justify-center">
              <Image
                src="/images/integration.png"
                width={80}
                height={80}
                alt="integration"></Image>
              <h4 className={`${darker_grotesque.className} text-3xl`}>
                Integration
              </h4>
            </CardHeader>
            <div
              className={`${darker_grotesque_light.className} text-xl text-center`}>
              TicketX provides easy and smooth integration to various platforms
              - WebApp, App, etc.
            </div>
          </Card>
          <Card className="bg-white p-3 lg:p-6 rounded-3xl shadow-sm border w-36 h-28 sm:w-48 sm:h-36 lg:w-96 lg:h-60">
            <CardHeader className="flex flex-col items-center justify-center">
              <Image
                src="/images/tailored-reports.png"
                width={80}
                height={80}
                alt="tailored-reports"></Image>
              <h4 className={`${darker_grotesque.className} text-3xl`}>
                Tailored Reports
              </h4>
            </CardHeader>
            <div
              className={`${darker_grotesque_light.className} text-xl text-center`}>
              Make custom reports with your key data to provide better customer
              support.
            </div>
          </Card>
          <Card className="bg-white p-3 lg:p-6 rounded-3xl shadow-sm border w-36 h-28 sm:w-48 sm:h-36 lg:w-96 lg:h-60">
            <CardHeader className="flex flex-col items-center justify-center">
              <Image
                src="/images/mobile-friendly.png"
                width={80}
                height={80}
                alt="mobile-friendly"></Image>
              <h4 className={`${darker_grotesque.className} text-3xl`}>
                Mobile friendly
              </h4>
            </CardHeader>
            <div
              className={`${darker_grotesque_light.className} text-xl text-center`}>
              Manage your dashboard on the go, stay in control from anywhere.
            </div>
          </Card>
          <Card className="bg-white p-3 lg:p-6 rounded-3xl shadow-sm border w-36 h-28 sm:w-48 sm:h-36 lg:w-96 lg:h-60">
            <CardHeader className="flex flex-col items-center justify-center">
              <Image
                src="/images/dedicated-support.png"
                width={80}
                height={80}
                alt="dedicated-support"></Image>
              <h4 className={`${darker_grotesque.className} text-3xl`}>
                Dedicated Support
              </h4>
            </CardHeader>
            <div
              className={`${darker_grotesque_light.className} text-xl text-center`}>
              Our team is available 24x7 to help you get the best out of
              TicketX.
            </div>
          </Card>
          <Card className="bg-white p-3 lg:p-6 rounded-3xl shadow-sm border w-36 h-28 sm:w-48 sm:h-36 lg:w-96 lg:h-60">
            <CardHeader className="flex flex-col items-center justify-center">
              <Image
                src="/images/security.png"
                width={80}
                height={80}
                alt="Security"></Image>
              <h4 className={`${darker_grotesque.className} text-3xl`}>
                Security
              </h4>
            </CardHeader>
            <div
              className={`${darker_grotesque_light.className} text-xl text-center`}>
              TicketX ensures top - tier security of your data for your
              business.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
