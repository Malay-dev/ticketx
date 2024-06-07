import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { Darker_Grotesque } from "next/font/google";
const darker_grotesque = Darker_Grotesque({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="w-screen-2xl p-5 bg-[#FBFFEF] dark:bg-black min-h-screen">
      <div className="flex flex-col items-center justify-between gap-5">
        <div className="flex mt-10 overflow-hidden h-[9.5rem]">
          <h1 className="text-9xl font-bold">TicketX</h1>
          <span
            direction="up"
            behavior="scroll"
            className="animate-slide h-[8rem]">
            <h1 className="text-9xl font-bold">Agency</h1>
            <h1 className="text-9xl font-bold">Startup</h1>
            <h1 className="text-9xl font-bold">SAAS</h1>
            <h1 className="text-9xl font-bold">App</h1>
          </span>
        </div>
        <div>
          <p
            className={`${darker_grotesque.className} text-xl text-wrap text-center`}>
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
    </main>
  );
}
