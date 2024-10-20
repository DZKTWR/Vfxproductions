import Hero from "../sections/Hero";
import Image from "next/image";
import Navbares from "../components/Navbar-es";

export default function Home() {
  return (
      <main className="relative h-full items-center flex-col overflow-hidden">
          <Navbares />  
        <div className="w-full h-full">
          <Hero />
        </div> 
      </main>
  );
}
