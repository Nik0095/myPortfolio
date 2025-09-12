"use client";
 import {  MailPlus, Search, Settings, } from "lucide-react";
import { SiGoogleads, SiGoogleanalytics, } from "react-icons/si";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { PointerHighlight } from "@/components/ui/PointerHighlight";

const ExtraServices = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto   py-32"> 
    <section className="w-full ">
      {/* Заголовок */}
      <h2 className="heading text-center">
        All customers get a <span className="text-purple">30% discount</span> on
        additional <span className="text-purple">extra-services</span>.
      </h2>

      {/* Пояснення під заголовком */}
      <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-3xl mx-auto mt-8">
        Thanks to a comprehensive approach,
        <PointerHighlight
          rectangleClassName="bg-[#7f6bc5] dark:bg-[#6a56b0] border-[#5a4798] dark:border-[#4a3b80] leading-loose"
          pointerClassName="text-yellow-500 h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          <span className="relative z-10">
            you get maximum results in a short time.
          </span>
        </PointerHighlight>
      </div>

      {/* Список сервісів */}
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mt-12">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<SiGoogleanalytics className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="SEO optimization of your site"
          description="Site promotion in search engines (Google, Bing, Yahoo) to attract"
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Creating an AI assistant for your website"
          description="Integrate a smart virtual assistant that improves user experience, automates support, and engages visitors 24/7"
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<SiGoogleads className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Setting up and running Google Ads campaigns"
          description="I will make your advertising campaign as effective as possible. The goal is to attract traffic, new customers, and maximize return on investment."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={
            <MailPlus className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Email Marketing Campaigns"
          description="I will set up effective email campaigns for you that will help you retain customers, remind them about your services, and increase sales."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Product Data Parsing & Updates"
          description="I will configure product parsing for your site and ensure constant updating of information - prices, descriptions, availability,
so that the data always remains up-to-date without your intervention."
        />
        
      </ul>
    </section>
    </main>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
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
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-3 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] ">
          <div className="relative flex flex-1 flex-col justify-between gap-3 ">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
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
        </div>
      </div>
    </li>
  );
};

export default ExtraServices;

