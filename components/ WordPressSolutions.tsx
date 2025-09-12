
import { Wrench, Layers, Globe, Shield, Database, ExternalLink } from "lucide-react";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { PointerHighlight } from "@/components/ui/PointerHighlight";

const WordPressSolutions = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto py-6 px-5 "> 
      <section className="w-full">
        {/* Заголовок */}
        <h2 className="heading text-center">
          My <span className="text-purple">WordPress plugins</span> &{" "}
          <span className="text-purple">custom themes</span>
        </h2>

        {/* Пояснення під заголовком */}
        <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-3xl mx-auto mt-8">
          All solutions are created with{" "}
          <PointerHighlight
            rectangleClassName="bg-[#7f6bc5] dark:bg-[#6a56b0] border-[#5a4798] dark:border-[#4a3b80] leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10">scalability</span>
          </PointerHighlight>
          and performance in mind.
        </div>

        {/* Список рішень */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mt-12">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Wrench className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Custom WordPress Plugins"
            description="Development of unique plugins tailored for specific business logic and integrations."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Layers className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Custom Themes"
            description="Pixel-perfect, fast and optimized WordPress themes adapted to your brand and needs."
            link="https://sitewebit.com/shablony-veb-saytiv/"
          />
          

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            extraClasses="mt-6"
            icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="WooCommerce Solutions"
            description="Online store development, payment systems integration, custom checkout and product logic."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Shield className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Security & Performance"
            description="Optimization of loading speed, caching setup, security hardening and malware protection."
            link="https://pagespeed.web.dev/analysis/https-santehspec-dp-ua/ytls8mc5q2?form_factor=mobile"
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Database className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="API & Integrations"
            description="Custom API endpoints, integration with CRM systems, third-party services and automation."
          />
           
        
        </ul>
      </section>
    </main>
  );
};


const GridItem = ({ area, icon, title, description, link }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-3 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]  ">
          <div className="absolute inset-0 bg-[url('/wp.svg')] bg-no-repeat bg-center bg-[length:180px_auto] opacity-20"></div>

          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>

          {/* посилання внизу (показується тільки якщо переданий link) */}
          {link && (
            <div className="relative mt-4 flex justify-end z-10">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 animate-bounce"
              >
                <ExternalLink size={25} />
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default WordPressSolutions;
