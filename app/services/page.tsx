"use client";

import { navItems } from "@/data";
import React from "react";

import ExtraServices from "@/components/ExtraServices";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import TechBenefits from "@/components/TechBenefits";


import FileUp from "@/components/FileUp";
import { FormContact } from "@/components/FormContact";

const Services = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto  px-5 py-8 min-h-screen">
    
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {/* <section id="extra-services" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Преміальні додаткові послуги зі знижкою 30%
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Для моїх клієнтів — SEO, Google Ads та контекстна реклама за
            спеціальною ціною.
          </p>
        </section> */}
        <ExtraServices />
        <TechBenefits />
        {/* <FileUp /> */}
        {/* <FormContact /> */}

        <Footer />
      </div>
    </main>
  );
};

export default Services;
