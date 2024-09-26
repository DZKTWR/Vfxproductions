import Hero from "../sections/Hero";
import Image from "next/image";
import Navbar from "../components/main/Navbar";


export default function Home() {
  return (
      <main className="relative h-full items-center flex-col overflow-hidden">
        <Navbar />
        <div className="h-[750] w-full">
          <Hero />
        </div> 
      </main>
  );
}
