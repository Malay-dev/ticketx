import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function GoalCard() {
  return (
    <Card className="py-2 shadow max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-xl">Set your goals</h4>
      </CardHeader>
      <CardBody className="overflow-visible px-5 py-2 gap-4 flex flex-col items-center sm:flex-col sm:items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl mb-4 sm:mb-0 sm:mr-4"
          src="/images/goals-icon.png"
          width={150}
        />
        <Button variant="bordered">Learn More</Button>
      </CardBody>
    </Card>
  );
}
