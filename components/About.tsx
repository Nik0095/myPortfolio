"use client";

import {
  BentoGridAbout,
  BentoGridAboutItem,
} from "@/components/ui/BentoGridAbout";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import MagicButton from "@/components/MagicButton";

export function About() {
  const aboutItems = [
    {
      title: "Main specialization WordPress Development",
      description: (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">What I do</h4>
            <ul className="list-disc list-inside text-sm space-y-1 py-5">
              <li>Development of custom WordPress themes</li>
              <li>Creating and configuring plugins</li>
              <li>Performance optimization</li>
              <li>SEO optimization</li>
              <li>Website maintenance and support</li>
              <li>Integration with WooCommerce</li>
            </ul>
          </div>
          <div>
            <img src="/b5.svg" alt="Description" className="ml-[1.5rem]" />
          </div>
        </div>
      ),
      icon: <img src="/wp.svg" alt="WordPress" className="h-10 w-10" />,
      className:
        "lg:col-span-2 md:col-span-3 md:row-span-2 bg-[url('/bg.png')] bg-center bg-cover text-white py-10",
    },
    {
      title: (
        <div>
          Ready for related tasks
          <br />
          Tech Stack
        </div>
      ),
      description: (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Front</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>React / Next.js</li>
              <li>TailwindCSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <ul className="list-disc list-inside text-sm space-y-1 mr-1">
              <li>Node.js</li>
              <li>Laravel</li>
              <li>WordPress</li>
            </ul>
          </div>
        </div>
      ),
      className:
        "md:col-span-1 bg-[url('/bg.png')] bg-end bg-cover text-white",
    },
    {
      title: "Contact Me",
      description: (
        <div className="relative z-10 p-6">
          <h3 className="text-xl font-bold mb-2">Contact Me</h3>
          <p>
            If you have any questions or would like to discuss a project, feel
            free to contact me.
          </p>
        </div>
      ),
      className: "md:col-span-1 relative overflow-hidden rounded-3xl",
      withGradient: true, // прапор для градієнта
    },
  ];

  return (
    <section className="about relative z-10">
      <BentoGridAbout className="py-20 gap-8 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
        {aboutItems.map((item, i) => (
          <BentoGridAboutItem key={i} className={item.className}>
            {item.withGradient && <BackgroundGradientAnimation />}
            <div className="p-6 flex flex-col gap-2 relative z-10">
              {item.icon}
              <h3 className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                {item.title}
              </h3>
              <div className="font-sans font-extralight text-sm">
                {item.description}
              </div>
              {/* тільки для Contact Me показуємо кнопку */}
    {item.withGradient && (
      <MagicButton
        title="Send me a message"
        icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8v13a1 1 0 01-1 1H4a1 1 0 01-1-1V8m18 0l-9-6-9 6m18 0H3"/></svg>}
        position="right"
        handleClick={() => alert("Open contact form")}
        otherClasses="!bg-[#161A31]"
      />
    )}
            </div>
          </BentoGridAboutItem>
        ))}
      </BentoGridAbout>

      <div className="py-10">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-sm dark:text-neutral-400 text-[#C1C2D3-600]">
          If you have any questions or would like to discuss a project, feel
          free to contact us.
        </p>
      </div>
    </section>
  );
}

export default About;
