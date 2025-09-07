"use client";

import { navItems } from "@/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";


import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { PointerHighlight } from "@/components/ui/PointerHighlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Clients from "@/components/Clients";

// 👉 Тип для шаблону
type ProjectTemplate = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
};

// 👉 Анімації Framer Motion для карток
const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.8 } },
};

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<ProjectTemplate[]>([]);

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => setTemplates(data));
  }, []);

  return (
    <section className="w-full py-20 bg-black-100">
      <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        {/* Навігація */}
        <FloatingNav navItems={navItems} />

        <div className="flex flex-col items-center w-full z-10 p-8 max-w-6xl mx-auto">
          {/* Заголовок */}
          <h1 className="heading lg:max-w-[45vw] text-center">
            Some of my works, <span className="text-purple">Themes & Templates</span>
          </h1>

          {/* Підзаголовок з PointerHighlight */}
          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-3xl mx-auto mt-8">
            I prefer to create solutions that take into account the characteristics of the target audience, making each site
            <PointerHighlight
              rectangleClassName="bg-[#7f6bc5] dark:bg-[#6a56b0] border-[#5a4798] dark:border-[#4a3b80] leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span className="relative z-10">
                 understandable, attractive and useful for visitors.
              </span>
            </PointerHighlight>
          </div>

          {/* Галерея карток */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {templates.map((tpl) => (
              <motion.div
                key={tpl.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <Link href={tpl.url}>
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.3}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    tiltReverse={true}
                    className="cursor-pointer"
                    style={{ perspective: 1000 }}
                  >
                    <div className="border rounded-lg overflow-hidden transform transition hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white">
                      <img
                        src={tpl.image}
                        alt={tpl.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="p-4 bg-white hover:bg-transparent">
                        <h3 className="text-xl font-semibold mb-2">{tpl.name}</h3>
                        <p className="text-gray-600 hover:text-white">{tpl.description}</p>
                      </div>
                    </div>
                  </Tilt>
                </Link>
              </motion.div>
            ))}
          </div>

          <Clients />
          <Footer />
        </div>
      </main>
    </section>
  );
}
