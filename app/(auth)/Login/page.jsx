import Link from "next/link";

import { Button } from "@nextui-org/react";
import { Icons } from "@/components/Icons";

import { UserAuthForm } from "@/components/UserAuthForm";
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

export default function LoginPage() {
  return (
    <div
      className={`container flex h-screen w-screen flex-col items-center justify-center bg-[#FBFFEF] ${darker_grotesque_light.className}`}>
      <Button
        as={Link}
        href="/"
        className={"absolute left-4 top-4 md:left-8 md:top-8 rounded"}
        variant="ghost">
        <>
          <Icons.chevronLeft className="mr-1 mt-1 h-4 w-4" />
          Back
        </>
      </Button>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1
            className={`text-3xl font-semibold ${darker_grotesque.className}`}>
            TicketX
          </h1>
          <h1
            className={`text-5xl font-semibold tracking-tight ${darker_grotesque_semibold.className}`}>
            Welcome back
          </h1>
          <p
            className={`text-base text-muted-foreground ${darker_grotesque_light.className}`}>
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p
          className={`px-8 text-center text-base text-muted-foreground ${darker_grotesque_light.className}`}>
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4">
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
