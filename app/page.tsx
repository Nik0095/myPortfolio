/* eslint-disable @next/next/no-img-element */
"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import TechBenefits from "@/components/TechBenefits";

import App from "next/app";
import ExtraServices from "@/components/ExtraServices";
import TechStack from "@/components/TechStack";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <TechBenefits />
        <Experience />
        <ExtraServices />
        <Clients />
        <TechStack />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
