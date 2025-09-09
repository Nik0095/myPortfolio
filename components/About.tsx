"use client";

import {
  BentoGridAbout,
  BentoGridAboutItem,
} from "@/components/ui/BentoGridAbout";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import MagicButton from "@/components/MagicButton";
import { PointerHighlight } from "@/components/ui/PointerHighlight";

export function About() {
  const aboutItems = [
    {
      title: "Main specialization WordPress Development",
      description: (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-xl "><span className="text-purple">What I do</span></h4>
            <ul className="list-disc list-inside text-base space-y-1 py-5">
              <li>Development of custom WordPress themes</li>
              <li>Creating and configuring plugins</li>
              <li>Performance optimization</li>
              <li>SEO optimization</li>
              <li>Website maintenance and support</li>
              <li>Integration with WooCommerce</li>
            </ul>
          </div>
          <div>
            <img src="/b5.svg" alt="Description" className="ml-[1.5rem] absolute right-0 bottom-[-20] w-80 md:w-[20rem] lg:w-[35rem]" />

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
            <h4 className="font-semibold mb-2 text-xl"><span className="text-purple">Front</span></h4>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>React / Next.js</li>
              <li>TailwindCSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-xl"><span className="text-purple">Backend</span></h4>
            <ul className="list-disc list-inside text-base space-y-1 mr-1">
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
        <div className="relative z-10 p-6 text-base">
          {/* <h3 className="text-xl font-bold mb-2">Contact Me</h3> */}
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
    <div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 py-32">
         <section className="bg-black-100 about relative z-10 w-full  px-5 sm:px-10">
          <div className="flex justify-center relative my-5 z-10"> 
       <div className="flex justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Next-Level Websites with WordPress & Full-Stack Tech
          </p>
          </div>
      </div>
          

      <h1 className="heading text-center pt-8 leading-loose">
        <span className="text-purple">Hi, I'm Viacheslav,</span><br /> my priority is creating fast, scalable, and modern web solutions.
      </h1>

      {/* Пояснення під заголовком */}
     
      <BentoGridAbout className="pt-20 gap-8 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
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
    </section>
        </main>
    </div>
    
   
   
  );
}

export default About;
