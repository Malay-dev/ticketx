import Home from "@/components/Home";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
export default function Page() {
  return (
    <main className="w-screen-2xl p-5 bg-[#FBFFEF] dark:bg-black ">
      <Home></Home>
      <Features></Features>
      <Pricing></Pricing>
      <Contact></Contact>
    </main>
  );
}
