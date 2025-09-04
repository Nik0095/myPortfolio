"use client";

import React from "react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFramer, SiMysql, SiVercel, SiSentry, SiWordpress, SiLaravel, SiGoogleads } from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "React", icon: <SiReact size={40} color="#61dafb" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} color="#38bdf8" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
  { name: "Framer Motion", icon: <SiFramer size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#4479a1" /> },
  { name: "Vercel", icon: <SiVercel size={40} /> },
  { name: "Sentry", icon: <SiSentry size={40} color="#362d59" /> },
  { name: "Laravel", icon: <SiLaravel size={40} /> },
  { name: "WordPress", icon: <SiWordpress size={40} /> },
  { name: "Google Ads", icon: <SiGoogleads size={40} /> },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 justify-items-center items-center">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center space-y-2">
            {tech.icon}
            <span className="text-sm text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
