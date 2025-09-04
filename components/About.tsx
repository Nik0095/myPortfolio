"use client";

import { BentoGridAbout, BentoGridAboutItem,} from "@/components/ui/BentoGridAbout";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn,} from "@tabler/icons-react";

export function About() {
  const aboutItems = [
    {
      title: "Main spezialization",
      description: "<We build modern web applications with speed and quality.>",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh] ",
      
    },
    {
      title: "Our Vision",
      description: "Deliver digital solutions that inspire and perform.",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 bg-[url('/bg.png')] bg-center bg-cover text-white",
    },
    {
      title: "Our Values",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis fugit molestiae unde excepturi rem officia corrupti provident eligendi, temporibus nihil vero commodi recusandae est aliquam consectetur culpa obcaecati ut doloremque!30",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1 bg-[url('/wp.svg')]",
    },
    {
      title: "Our Clients",
      description: "Working with businesses worldwide.",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Our Clients",
      description: "If you have any questions or would like to discuss the project, please feel free to contact me.",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1 bg-[url('/bg.png')] bg-end bg-cover text-white",
    },
    


  ];

  return (
    <section className="about">
      <BentoGridAbout className="py-20 gap-8 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
        {aboutItems.map((item, i) => (
          <BentoGridAboutItem key={i} className={item.className}>
            <div className="p-6 flex flex-col gap-2">
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          </BentoGridAboutItem>
        ))}
      </BentoGridAbout>
      <div className="py-10">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          If you have any questions or would like to discuss a project, feel free to contact us.
        </p>
      </div>
    </section>
    
  );
}

export default About;
