// import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
// import { GlowingEffect } from "@/components/ui/GlowingEffect";
// import { PointerHighlight } from "@/components/ui/PointerHighlight";

// const ExtraServices = () => {
//   return (
//     <section className="w-full py-20">
//       {/* Заголовок */}
//       <h2 className="heading text-center">
//         {/* All customers get a <span className="text-purple">30% discount</span> on
//         additional services. Комплексна веб-розробка на WordPress, WooCommerce,
//         React, Next.js, Laravel та Vite */}
//         <span className="text-purple">Сучасні веб-рішення </span>на провідних
//         технологіях
//       </h2>

//       {/* Пояснення під заголовком */}
//       <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-3xl mx-auto mt-8">
//         <PointerHighlight
//           rectangleClassName="bg-[#7f6bc5] dark:bg-[#6a56b0] border-[#5a4798] dark:border-[#4a3b80] leading-loose"
//           pointerClassName="text-yellow-500 h-3 w-3"
//           containerClassName="inline-block mr-1"
//         >
//           Комплексна веб-розробка на{" "}
//           <span className="relative z-10">
//             WordPress, WooCommerce, React, Next.js, Laravel та Vite
//           </span>
//         </PointerHighlight>
//       </div>

//       {/* Список сервісів */}
//       <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mt-12">
//         <GridItem
//           area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
//           icon={<img src="/wp.svg" alt="WordPress" className="h-6 w-6" />}
//           title="WordPress Development"
//           description="WordPress дозволяє швидко створювати функціональні веб-сайти завдяки величезній екосистемі тем та плагінів. "
//         />

//         <GridItem
//           area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
//           icon={<img src="/re.svg" alt="React" className="h-6 w-6" />}
//           title="React – сучасні інтерфейси для веб-додатків"
//           description="Розробка динамічних, швидких та масштабованих інтерфейсів з використанням React. Анімації, інтерактивність та високий рівень UX."
//         />

//         <GridItem
//           area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
//           icon={<img src="/next.svg" alt="Next.js" className="h-6 w-6" />}
//           title="Next.js – швидкі та SEO-оптимізовані сайти"
//           description="Створення веб-додатків із серверним рендерингом та високою продуктивністю на Next.js. Оптимізація для SEO та швидкого завантаження."
//         />

//         <GridItem
//           area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
//           icon={<img src="/laravel.svg" alt="Laravel" className="h-6 w-6" />}
//           title="Laravel – потужний PHP-фреймворк для бекенду"
//           description="Розробка надійних бекенд-систем, REST API та веб-додатків з використанням Laravel. Безпека, продуктивність та масштабованість."
//         />

//         <GridItem
//           area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
//           icon={<img src="/vite.svg" alt="Vite" className="h-6 w-6" />}
//           title="Vite – сучасний інструмент для фронтенд-розробки"
//           description="Використання Vite для швидкої збірки, оптимізації та ефективного процесу фронтенд-розробки."
//         />
//       </ul>
//     </section>
//   );
// };

// interface GridItemProps {
//   area: string;
//   icon: React.ReactNode;
//   title: string;
//   description: React.ReactNode;
// }

// const GridItem = ({ area, icon, title, description }: GridItemProps) => {
//   return (
//     <li className={`min-h-[14rem] list-none ${area}`}>
//       <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
//         <GlowingEffect
//           spread={40}
//           glow={true}
//           disabled={false}
//           proximity={64}
//           inactiveZone={0.01}
//         />
//         <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
//           <div className="relative flex flex-1 flex-col justify-between gap-3">
//             <div className="w-fit rounded-lg border border-gray-600 p-2">
//               {icon}
//             </div>
//             <div className="space-y-3">
//               <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
//                 {title}
//               </h3>
//               <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
//                 {description}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default ExtraServices;

"use client";
import { useState, useEffect } from "react";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { PointerHighlight } from "@/components/ui/PointerHighlight";

// ---------------- Modal ----------------
const Modal = ({ isOpen, onClose, title, content }: any) => {
  // Блокування прокрутки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Закриття по ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fadeIn"
      onClick={onClose} // закриває при кліку на фон
    >
      <div
        className="bg-white dark:bg-neutral-900 rounded-2xl p-6 max-w-lg w-full shadow-2xl relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()} // не закриває при кліку по вікну
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-500"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base text-gray-700 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
};

// ---------------- Main Section ----------------
const ExtraServices = () => {
  return (
    <section className="w-full py-20">
      <h2 className="heading text-center">
        <span className="text-purple">Сучасні веб-рішення </span>на провідних
        технологіях
      </h2>

      <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-3xl mx-auto mt-8">
        Комплексна веб-розробка на{" "}
        <PointerHighlight
          rectangleClassName="bg-[#7f6bc5] dark:bg-[#6a56b0] border-[#5a4798] dark:border-[#4a3b80] leading-loose"
          pointerClassName="text-yellow-500 h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          <span className="relative z-10">
            WordPress, WooCommerce, React, Next.js, Laravel та Vite
          </span>
        </PointerHighlight>
      </div>

      {/* Список сервісів */}
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mt-12">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<img src="/wp.svg" alt="WordPress" className="h-6 w-6" />}
          title="WordPress Development"
          description="WordPress дозволяє швидко створювати функціональні веб-сайти завдяки величезній екосистемі тем та плагінів."
          popup={
            <>
              <p>
                Швидка Розробка: Ми створюємо корпоративні сайти, блоги,
                магазини на WordPress з урахуванням ваших бізнес-потреб.
              </p>
              <ul>
                Швидка Розробка
                <li>- Готові теми та шаблони</li>
                <li>- Модульна архітектура</li>
                <li>- SEO Оптимізація</li>
                <li>- Безпека та Підтримка</li>
                <li></li>
              </ul>
            </>
          }
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<img src="/re.svg" alt="React" className="h-6 w-6" />}
          title="React – сучасні інтерфейси"
          description="Розробка динамічних, швидких та масштабованих інтерфейсів з використанням React."
          popup={
            <>
              <p>
                React дозволяє робити максимально швидкі та інтерактивні
                веб-додатки. Чудово підходить для складних UI.
              </p>
              <ul>
                <li>- Компонентний підхід</li>
                <li>- Висока продуктивність</li>
                <li>- Легка масштабованість</li>
                <li>- Інтеграція з API</li>
              </ul>
            </>
          }
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<img src="/next.svg" alt="Next.js" className="h-6 w-6" />}
          title="Next.js – SEO-оптимізовані сайти"
          description="Створення веб-додатків із серверним рендерингом та високою продуктивністю."
          popup={
            <>
              <p>
                Next.js забезпечує SSR, ISR, чудову оптимізацію для пошуковиків
                і блискавичне завантаження.
              </p>
              <ul>
                <li>- Серверний рендеринг (SSR)</li>
                <li>- Статична генерація (SSG)</li>
                <li>- Оптимізація зображень</li>
                <li>- API Routes</li>
                <li>- Висока продуктивність</li>
              </ul>
            </>
          }
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<img src="/laravel.svg" alt="Laravel" className="h-6 w-6" />}
          title="Laravel – потужний бекенд"
          description="Розробка надійних бекенд-систем, REST API та веб-додатків з використанням Laravel."
          popup={
            <>
              <p>
                Laravel — популярний PHP-фреймворк для створення надійних,
                масштабованих та безпечних веб-додатків.
              </p>
              <ul>
                <li>- Зручний синтаксис</li>
                <li>- Вбудована аутентифікація</li>
                <li>- Еloquent ORM для роботи з базами</li>
                <li>- Потужна система маршрутизації</li>
              </ul>
            </>
          }
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<img src="/vite.svg" alt="Vite" className="h-6 w-6" />}
          title="Vite – інструмент для фронтенду"
          description="Використання Vite для швидкої збірки, оптимізації та ефективного процесу фронтенд-розробки."
          popup={
            <>
              <p>
                Vite — сучасний інструмент для швидкої збірки та розробки
                JavaScript застосунків.
              </p>
              <ul>
                <li>- Миттєвий запуск проєкту</li>
                <li>- Гаряче оновлення модулів (HMR)</li>
                <li>- Підтримка TypeScript, JSX, Vue, React</li>
                <li>- Оптимізована збірка з Rollup</li>
                <li>- Дуже швидкий дев-сервер</li>
              </ul>
            </>
          }
        />
      </ul>
    </section>
  );
};

// ---------------- Grid Item ----------------
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  popup: React.ReactNode;
}

const GridItem = ({ area, icon, title, description, popup }: GridItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className={`min-h-[14rem] list-none ${area}`}>
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            {/* Кнопка-рука */}
            <button
              onClick={() => setIsOpen(true)}
              className="absolute top-3 right-3 text-2xl animate-hand hover:scale-110 transition"
            >
              👉
            </button>

            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl font-semibold text-black md:text-2xl dark:text-white">
                  {title}
                </h3>
                <p className="font-sans text-sm text-black md:text-base dark:text-neutral-400">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* Popup */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        content={popup}
      />
    </>
  );
};

export default ExtraServices;
