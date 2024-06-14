import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const MobileFeatures = ({ data }) => {
  return (
    <div>
      <Accordion selectionMode="multiple">
        {data.map((feature, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={feature.title}>
            <div className="flex flex-col items-center">
              <p className="mt-4 text-center">{feature.description}</p>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MobileFeatures;
