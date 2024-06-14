import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import { Darker_Grotesque } from "next/font/google";
import MobileFeatures from "./MobileFeatures";

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

const featuresData = [
  {
    title: "Real-time Data",
    description: "Instant updates for smart, quick decisions for your business",
    imageSrc: "/images/real-time.png",
    altText: "clock",
  },
  {
    title: "Integration",
    description:
      "TicketX provides easy and smooth integration to various platforms - WebApp, App, etc.",
    imageSrc: "/images/integration.png",
    altText: "integration",
  },
  {
    title: "Tailored Reports",
    description:
      "Make custom reports with your key data to provide better customer support.",
    imageSrc: "/images/tailored-reports.png",
    altText: "tailored-reports",
  },
  {
    title: "Mobile friendly",
    description:
      "Manage your dashboard on the go, stay in control from anywhere.",
    imageSrc: "/images/mobile-friendly.png",
    altText: "mobile-friendly",
  },
  {
    title: "Dedicated Support",
    description:
      "Our team is available 24x7 to help you get the best out of TicketX.",
    imageSrc: "/images/dedicated-support.png",
    altText: "dedicated-support",
  },
  {
    title: "Security",
    description:
      "TicketX ensures top-tier security of your data for your business.",
    imageSrc: "/images/security.png",
    altText: "Security",
  },
];

const Features = () => {
  return (
    <div id="features">
      <div className="flex items-center justify-center">
        <h1
          className={`mt-10 text-4xl lg:text-9xl font-bold ${darker_grotesque.className}`}>
          Features & Benefits
        </h1>
      </div>
      <div className="md:hidden">
        <MobileFeatures data={featuresData} />
      </div>
      <div className="hidden md:flex items-center justify-center mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="bg-white p-3 lg:p-6 rounded-3xl shadow-sm border w-36 h-28 sm:w-48 sm:h-36 lg:w-96 lg:h-60">
              <CardHeader className="flex flex-col items-center justify-center">
                <Image
                  src={feature.imageSrc}
                  width={80}
                  height={80}
                  alt={feature.altText}
                />
                <h4 className={`${darker_grotesque.className} text-3xl`}>
                  {feature.title}
                </h4>
              </CardHeader>
              <div
                className={`${darker_grotesque_light.className} text-xl text-center`}>
                {feature.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
