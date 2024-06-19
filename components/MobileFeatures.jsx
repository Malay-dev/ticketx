"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
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

const MobileFeatures = ({ data }) => {
  return (
    <div>
      <Accordion isCompact>
        {data.map((feature, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            className="font-bold"
            title={feature.title}>
            <div className={`flex flex-col items-center`}>
              <p className={`mt-4 ${darker_grotesque_light.className}`}>
                {feature.description}
              </p>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MobileFeatures;
