import Hero from "../sections/Hero";
import Image from "next/image";
import Navbar from "../components/main/Navbar";

export default function Home() {
  return (
      <main className="relative h-full items-center flex-col overflow-hidden">
          <Navbar />  
        <div className="w-full h-full">
          <Hero />
        </div> 
      </main>
  );
}
