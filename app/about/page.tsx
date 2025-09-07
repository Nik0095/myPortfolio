"use client";

import About from '@/components/About';
import Footer from '@/components/Footer';
import { navItems } from '@/data';
import { FloatingNav } from '@/components/ui/FloatingNavbar';

import TechStack from '@/components/TechStack';


const page = () => {
  return (
    <div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center">
                About Me
        </h1>
        <FloatingNav navItems={navItems} />
        <About />
        
        <Footer />
      </div>
    </main>
  </div>
  )
}

export default page