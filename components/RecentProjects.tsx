"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section className="py-20">
      <h2 className="heading py-10">
        A some selection of{" "}
        <span className="text-purple ml-2">recent projects</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer
              key={index}
              title={item.titlelinck}
              href={item.link}
              className="h-full"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="absolute w-full h-full overflow-hidden lg:rounded-3xl rounded-lg bg-[#13162D]">
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-[300px] h-[300px] object-cover"
                  />
                </div>

                <div className="absolute w-full h-full overflow-hidden lg:rounded-3xl rounded-lg">
                  <img
                    src={item.img}
                    alt="cover"
                    className="rotate-[3deg] inline-block hover:rotate-0 hover:translate-y-[calc(-100%+30vh)] w-full transition-slow"
                  />
                </div>
              </div>

              <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h3>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-[1vh]">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
  <div className="flex items-center">
    {item.iconLists.map((icon, idx) => (
      <div
        key={idx}
        className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-150"
        style={{
          transform: `translateX(-${5 * idx + 2}px)`,
        }}
      >
        <img
          src={icon}
          alt="icon"
          className="p-2 transition-transform duration-300 ease-in-out hover:scale-150"
        />
      </div>
    ))}
  </div>

  {/* Клікабельний блок */}
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
   className="flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 group"
  >
    <p className="flex lg:text-xl md:text-xs text-sm text-purple transition-colors duration-300 ease-in-out group-hover:text-purple/80">
      Check Live Site
    </p>
    <FaLocationArrow className="ms-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
  </a>
</div>

            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;




