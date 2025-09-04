// import React from "react";
// import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/InfiniteCards";
// import { cn } from "@/lib/utils";

// // Тип для одного елемента картки
// export type CardItem = {
//   id: string | number;
//   title: string;
//   description?: string;
//   href?: string;
//   icon?: React.ReactNode; // іконка або картинка зверху
//   footer?: React.ReactNode; // довільний контент у футері (напр. кнопка)
//   className?: string;
// };

// // Пропси секції
// export type CardsSectionProps = {
//   title?: string;
//   subtitle?: string;
//   items: CardItem[];
//   className?: string; // додаткові класи на секцію
//   cardClassName?: string; // додаткові класи на картки
// };

// // Секція з картками: 3 в ряд на великих екранах, max-width 1200px
// export function CardsSection({
//   title,
//   subtitle,
//   items,
//   className,
//   cardClassName,
// }: CardsSectionProps) {
//   return (
//     <section className={cn("w-full py-12", className)}>
//       <div className="mx-auto max-w-[1200px] px-4">
//         {title && (
//           <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-center">
//             {title}
//           </h2>
//         )}

//         {subtitle && (
//           <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
//             {subtitle}
//           </p>
//         )}

//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {items.map((item) => {
//             const Wrapper = item.href ? Link : React.Fragment;
//             const wrapperProps = item.href ? { href: item.href } : {};

//             return (
//               <Wrapper key={item.id} {...wrapperProps}>
//                 <Card
//                   className={cn(
//                     "h-full transition-transform hover:-translate-y-1 hover:shadow-lg focus-within:shadow-lg",
//                     "outline-none ring-0 hover:ring-1 hover:ring-primary/30",
//                     "cursor-[inherit]",
//                     item.href && "cursor-pointer",
//                     cardClassName,
//                     item.className
//                   )}
//                 >
//                   <CardHeader>
//                     {item.icon && (
//                       <div className="mb-2 flex items-center justify-center rounded-2xl p-3 bg-muted/60">
//                         {item.icon}
//                       </div>
//                     )}
//                     <CardTitle className="text-lg md:text-xl leading-tight">
//                       {item.title}
//                     </CardTitle>
//                   </CardHeader>

//                   {item.description && (
//                     <CardContent>
//                       <p className="text-sm text-muted-foreground">
//                         {item.description}
//                       </p>
//                     </CardContent>
//                   )}

//                   {item.footer && <CardFooter>{item.footer}</CardFooter>}
//                 </Card>
//               </Wrapper>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// Другий компонент – твій Projects
// const Projects = () => {
//   return (
//     <div className="">
//       <div className="">
//         <div className="">{"icon"}🚀</div>
//         <h3 className="">{"title"}</h3>
//         <p className="">
//           {"desc"} WordPress дозволяє швидко створювати функціональні веб-сайти
//           завдяки величезній екосистемі тем та плагінів.
//         </p>
//         <ul className="card-features">
//           <li>Готові теми та шаблони</li>
//           <li>Модульна архітектура</li>
//           <li>Швидке прототипування</li>
//           <li>Готові компоненти</li>
//         </ul>
//       </div>
//       {/* інші блоки карток */}
//     </div>
//   );
// };

// export default Projects;
