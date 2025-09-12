// "use client";

// import {
//   BentoGridAbout,
//   BentoGridAboutItem,
// } from "@/components/ui/BentoGridAbout";
// import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
// import MagicButton from "@/components/MagicButton";
// import { PointerHighlight } from "@/components/ui/PointerHighlight";

// export function About() {
//   const aboutItems = [
//     {
//       title: "Main specialization WordPress Development",
//       description: (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   <div>
//     <h4 className="font-semibold mb-2 text-xl">
//       <span className="text-purple">What I do</span>
//     </h4>
//     <ul className="list-disc list-inside text-base space-y-1 py-5 w-full">
//       <li>Development of custom WordPress themes</li>
//       <li>Creating and configuring plugins</li>
//       <li>Performance optimization</li>
//       <li>SEO optimization</li>
//       <li>Website maintenance and support</li>
//       <li>Integration with WooCommerce</li>
//     </ul>
//   </div>

//   <div className="hidden md:block relative">
//     <img
//       src="/b5.svg"
//       alt="Description"
//       className="ml-[1.5rem] w-80 md:w-[20rem] lg:w-[35rem] md:absolute md:right-0 md:bottom-[-20]"
//     />
//   </div>
// </div>

//       ),
//       icon: <img src="/wp.svg" alt="WordPress" className="h-10 w-10" />,
//       className:
//         "lg:col-span-2 md:col-span-3 md:row-span-2 bg-[url('/bg.png')] bg-center bg-cover text-white py-10", 
        
//     },
//     {
//       title: (
//         <div>
//           Ready for related tasks
//           <br />
//           Tech Stack
//         </div>
//       ),
//       description: (
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h4 className="font-semibold mb-2 text-xl"><span className="text-purple">Front</span></h4>
//             <ul className="list-disc list-inside text-base space-y-1">
//               <li>React / Next.js</li>
//               <li>TailwindCSS</li>
//               <li>Framer Motion</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2 text-xl"><span className="text-purple">Backend</span></h4>
//             <ul className="list-disc list-inside text-base space-y-1 mr-1">
//               <li>Node.js</li>
//               <li>Laravel</li>
//               <li>WordPress</li>
//             </ul>
//           </div>
//         </div>
//       ),
//       className:
//         "md:col-span-3 lg:col-span-1 sm:col-span-1  bg-[url('/bg.png')] bg-end bg-cover text-white",
//     },
//     {
//       title: "Contact Me",
//       description: (
//         <div className="relative z-10 p-6 text-base ">
//           {/* <h3 className="text-xl font-bold mb-2">Contact Me</h3> */}
//           <p>
//             If you have any questions or would like to discuss a project, feel
//             free to contact me.
//           </p>
//         </div>
//       ),
//       className: "md:col-span-3 lg:col-span-1 sm:col-span-1 relative overflow-hidden rounded-[12px]",
//       withGradient: true, // прапор для градієнта
//     },
//   ];

//   return (
//    <div>
//   <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-visible mx-auto px-5  py-32">
//     <section className="about relative w-full z-0 ">
//       {/* Верхній текст */}
//       <div className="flex justify-center my-5">
//         <div className="flex flex-col items-center w-full max-w-full md:max-w-2xl lg:max-w-[60vw] px-2">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//             Next-Level Websites with WordPress & Full-Stack Tech
//           </p>
//         </div>
//       </div>

//       {/* Заголовок */}
//       <h1 className="font-bold text-center pt-8 text-[1.5rem] leading-[2.25rem] sm:text-2xl sm:leading-8 md:text-4xl md:leading-snug lg:text-5xl lg:leading-tight">
//         <span className="text-purple">Hi, I'm Viacheslav,</span><br />
//         my priority is creating fast, scalable, and modern web solutions.
//       </h1>

//       {/* Bento Grid */}
//       <BentoGridAbout className="pt-20 gap-8 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
//         {aboutItems.map((item, i) => (
//           <BentoGridAboutItem key={i} className={item.className}>
//             {item.withGradient && (
//               <BackgroundGradientAnimation className="-z-10 absolute inset-0" />
//             )}
//             <div className="p-6 flex flex-col gap-2 relative z-10">
//               {item.icon}
//               <h3 className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
//                 {item.title}
//               </h3>
//               <div className="font-sans font-extralight text-sm">
//                 {item.description}
//               </div>
//               {item.withGradient && (
//                 <MagicButton
//                   title="Send me a message"
//                   icon={
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21 8v13a1 1 0 01-1 1H4a1 1 0 01-1-1V8m18 0l-9-6-9 6m18 0H3"
//                       />
//                     </svg>
//                   }
//                   position="right"
//                   handleClick={() => alert("Open contact form")}
//                   otherClasses="!bg-[#161A31]"

//                 />
//               )}
//             </div>
//           </BentoGridAboutItem>
//         ))}
//       </BentoGridAbout>
//     </section>
//   </main>
// </div>

    
 
   
//   );
// }

// export default About;



// "use client";

// import {
//   BentoGridAbout,
//   BentoGridAboutItem,
// } from "@/components/ui/BentoGridAbout";
// import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
// import MagicButton from "@/components/MagicButton";
// import { socialMedia } from "@/data"; // ⚡ додай соц. іконки сюди
// import Image from "next/image";

// export function About() {
//   const aboutItems = [
//     {
//       title: "Main specialization WordPress Development",
//       description: (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <h4 className="font-semibold mb-2 text-xl">
//               <span className="text-purple">What I do</span>
//             </h4>
//             <ul className="list-disc list-inside text-base space-y-1 py-5 w-full">
//               <li>Development of custom WordPress themes</li>
//               <li>Creating and configuring plugins</li>
//               <li>Performance optimization</li>
//               <li>SEO optimization</li>
//               <li>Website maintenance and support</li>
//               <li>Integration with WooCommerce</li>
//             </ul>
//           </div>

//           <div className="hidden md:block relative">
//             <Image
//               src="/b5.svg"
//               alt="Description"
//               width={560}
//               height={400}
//               className="ml-[1.5rem] w-80 md:w-[20rem] lg:w-[35rem] md:absolute md:right-0 md:bottom-[-20]"
//             />
//           </div>
//         </div>
//       ),
//       icon: <Image src="/wp.svg" alt="WordPress" width={40} height={40} />,
//       className:
//         "lg:col-span-2 md:col-span-3 md:row-span-2 bg-[url('/bg.png')] bg-center bg-cover text-white py-10",
//     },
//     {
//       title: (
//         <div>
//           Ready for related tasks
//           <br />
//           Tech Stack
//         </div>
//       ),
//       description: (
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h4 className="font-semibold mb-2 text-xl">
//               <span className="text-purple">Front</span>
//             </h4>
//             <ul className="list-disc list-inside text-base space-y-1">
//               <li>React / Next.js</li>
//               <li>TailwindCSS</li>
//               <li>Framer Motion</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2 text-xl">
//               <span className="text-purple">Backend</span>
//             </h4>
//             <ul className="list-disc list-inside text-base space-y-1 mr-1">
//               <li>Node.js</li>
//               <li>Laravel</li>
//               <li>WordPress</li>
//             </ul>
//           </div>
//         </div>
//       ),
//       className:
//         "md:col-span-3 lg:col-span-1 sm:col-span-1 bg-[url('/bg.png')] bg-end bg-cover text-white",
//     },
//     {
//       title: "Contact Me",
//       description: (
//         <div className="relative z-10 p-6 flex flex-col gap-4 text-base">
//           <p>
//             If you have any questions or would like to discuss a project, feel
//             free to contact me.
//           </p>

//           {/* Соц. іконки */}
//           <div className="flex items-center gap-4 md:gap-3">
//             {socialMedia.map((info) => (
//               <a
//                 key={info.id}
//                 href={info.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//               >
//                 <Image src={info.img} alt="icon" width={20} height={20} />
//               </a>
//             ))}
//           </div>
//         </div>
//       ),
//       className:
//         "md:col-span-3 lg:col-span-1 sm:col-span-1 relative overflow-hidden rounded-[12px]",
//       withGradient: true,
//     },
//   ];

//   return (
//     <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-visible mx-auto px-5 py-32">
//       <section className="about relative w-full z-0">
//         {/* Верхній текст */}
//         <div className="flex justify-center my-5">
//           <div className="flex flex-col items-center w-full max-w-full md:max-w-2xl lg:max-w-[60vw] px-2">
//             <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//               Next-Level Websites with WordPress & Full-Stack Tech
//             </p>
//           </div>
//         </div>

//         {/* Заголовок */}
//         <h1 className="font-bold text-center pt-8 text-[1.5rem] leading-[2.25rem] sm:text-2xl sm:leading-8 md:text-4xl md:leading-snug lg:text-5xl lg:leading-tight">
//           <span className="text-purple">Hi, I'm Viacheslav,</span>
//           <br />
//           my priority is creating fast, scalable, and modern web solutions.
//         </h1>

//         {/* Bento Grid */}
//         <BentoGridAbout className="pt-20 gap-8 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
//           {aboutItems.map((item, i) => (
//             <BentoGridAboutItem key={i} className={item.className}>
//               {item.withGradient && (
//                 <BackgroundGradientAnimation className="-z-10 absolute inset-0" />
//               )}

//               <div className="p-6 flex flex-col gap-4 relative z-10">
//                 {item.icon}
//                 <h3 className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
//                   {item.title}
//                 </h3>
//                 <div className="font-sans font-extralight text-sm">
//                   {item.description}
//                 </div>

//                 {/* Кнопка тільки для Contact Me */}
//                 {item.withGradient && (
//                   <MagicButton
//                     title="Send me a message"
//                     icon={
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M21 8v13a1 1 0 01-1 1H4a1 1 0 01-1-1V8m18 0l-9-6-9 6m18 0H3"
//                         />
//                       </svg>
//                     }
//                     position="right"
//                     handleClick={() => alert("Open contact form")}
//                     otherClasses="!bg-[#161A31]"
//                   />
//                 )}
//               </div>
//             </BentoGridAboutItem>
//           ))}
//         </BentoGridAbout>
//       </section>
//     </main>
//   );
// }

// export default About;


"use client";

import { useState, useEffect } from "react";
import {
  BentoGridAbout,
  BentoGridAboutItem,
} from "@/components/ui/BentoGridAbout";
import { socialMedia } from "@/data";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import MagicButton from "@/components/MagicButton";

export function About() {
  const [isOpen, setIsOpen] = useState(false);

  // 👉 блокуємо скрол при відкритому попапі
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const aboutItems = [
    {
      title: "Main specialization WordPress Development",
      description: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-xl">
              <span className="text-purple">What I do</span>
            </h4>
            <ul className="list-disc list-inside text-base space-y-1 py-5 w-full">
              <li>Development of custom WordPress themes</li>
              <li>Creating and configuring plugins</li>
              <li>Performance optimization</li>
              <li>SEO optimization</li>
              <li>Website maintenance and support</li>
              <li>Integration with WooCommerce</li>
            </ul>
          </div>

          <div className="hidden md:block relative">
            <img
              src="/b5.svg"
              alt="Description"
              className="ml-[1.5rem] w-80 md:w-[20rem] lg:w-[35rem] md:absolute md:right-0 md:bottom-[-20]"
            />
          </div>
        </div>
      ),
      icon: <img src="/wp.svg" alt="WordPress" className="h-10 w-10" />,
      className:
        "lg:col-span-2 md:col-span-3 md:row-span-2 bg-[url('/bg.png')] bg-center bg-cover text-white py-10",
    },
    {
      title: "Contact Me",
      description: (
        <div className="relative z-10 p-6 text-base">
          <p>
            If you have any questions or would like to discuss a project, feel
            free to contact me.
          </p>
        </div>
      ),
      className:
        "md:col-span-3 lg:col-span-1 sm:col-span-1 relative overflow-hidden rounded-[12px]",
      withGradient: true,
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
            <h4 className="font-semibold mb-2 text-xl">
              <span className="text-purple">Front</span>
            </h4>
            <ul className="list-disc list-inside text-base space-y-1">
              <li>React / Next.js</li>
              <li>TailwindCSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-xl">
              <span className="text-purple">Backend</span>
            </h4>
            <ul className="list-disc list-inside text-base space-y-1 mr-1">
              <li>Node.js</li>
              <li>Laravel</li>
              <li>WordPress</li>
            </ul>
          </div>
        </div>
      ),
      className:
        "md:col-span-3 lg:col-span-1 sm:col-span-1 bg-[url('/bg.png')] bg-end bg-cover text-white",
    },
    
  ];

  return (
    <div>
      <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-visible mx-auto px-5 py-32">
        <section className="about relative w-full z-0 ">
          {/* Верхній текст */}
          <div className="flex justify-center my-5">
            <div className="flex flex-col items-center w-full max-w-full md:max-w-2xl lg:max-w-[60vw] px-2">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Next-Level Websites with WordPress & Full-Stack Tech
              </p>
            </div>
          </div>

          {/* Заголовок */}
          <h1 className="font-bold text-center pt-8 text-[1.5rem] leading-[2.25rem] sm:text-2xl sm:leading-8 md:text-4xl md:leading-snug lg:text-5xl lg:leading-tight">
            <span className="text-purple">Hi, I'm Viacheslav,</span>
            <br />
            my priority is creating fast, scalable, and modern web solutions.
          </h1>

          {/* Bento Grid */}
          <BentoGridAbout className="pt-20 gap-8 md:grid-cols-3 lg:grid-cols-3 max-w-8xl mx-auto">
            {aboutItems.map((item, i) => (
              <BentoGridAboutItem key={i} className={item.className}>
                {item.withGradient && (
                  <BackgroundGradientAnimation className="-z-10 absolute inset-0" />
                )}
                <div className="p-6 flex flex-col gap-2 relative z-10">
                  {item.icon}
                  <h3 className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                    {item.title}
                  </h3>
                  <div className="font-sans font-extralight text-sm">
                    {item.description}
                  </div>
                  {item.withGradient && (
                    <MagicButton
                      title="Send me a message"
                      icon={
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8v13a1 1 0 01-1 1H4a1 1 0 01-1-1V8m18 0l-9-6-9 6m18 0H3"
                          />
                        </svg>
                      }
                      position="right"
                      handleClick={() => setIsOpen(true)}
                      otherClasses="!bg-[#161A31]"
                    />
                  )}
                </div>
              </BentoGridAboutItem>
            ))}
          </BentoGridAbout>

          {/* 👉 Попап */}
{isOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-70 overflow-auto p-4"
    onClick={() => setIsOpen(false)}
  >
    <div
      className="bg-black-200 rounded-2xl shadow-xl w-full max-w-md p-6 relative z-[10000]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4 text-sm text-gray-300">
        Let’s connect! You can find me here:
      </p>

      <div className="flex items-center gap-4 flex-wrap">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  </div>
)}
        </section>
      </main>
    </div>
  );
}

export default About;
