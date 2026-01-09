import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProject } from "@/components/sections/FeaturedProject";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
    </main>
  );
}
