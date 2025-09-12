// "use client";

// import About from '@/components/About';
// import Footer from '@/components/Footer';
// import { navItems } from '@/data';
// import { FloatingNav } from '@/components/ui/FloatingNavbar';

// import TechStack from '@/components/TechStack';


// const page = () => {
//   return (
//     <div>
//       <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
        
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center">
//                 About Me
//         </h1>
//         <FloatingNav navItems={navItems} />
//         <About />
        
//         <Footer />
//       </div>
//     </main>
//   </div>
//   )
// }

// export default page

"use client";

import About from '@/components/About';
import Footer from '@/components/Footer';
import { navItems } from '@/data';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import TechStack from '@/components/TechStack';
import { Spotlight } from "@/components/ui/Spotlight";
import WordPressSolutions from '@/components/ WordPressSolutions';

const page = () => {
  return (
    <div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-1 px-1">
        <div className="max-w-7xl w-full">
          <div>
                  <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                  />
                  <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                  />
                  <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
                </div>
          
          {/* Заголовок */}
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center text-white">
            About Me
          </h1> */}

          {/* Навігація */}
          <FloatingNav navItems={navItems} />

          {/* Секція About */}
          <About />
          <WordPressSolutions />

          {/* Секція Tech Stack */}
          <TechStack />

          {/* Футер */}
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default page;
