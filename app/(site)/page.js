import Home from "@/components/Home";
import Features from "@/components/Features";

export default function Page() {
  return (
    <main
      className="w-screen-2xl p-5 bg-[#FBFFEF] dark:bg-black "
      suppressHydrationWarning>
      <Home></Home>
      <Features></Features>
    </main>
  );
}
