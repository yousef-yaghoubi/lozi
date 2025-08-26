import useWindowWidth from "@/hooks/WindowWidth";
import { PuzzleFull } from "@/lib/dataPublic";
import type { BlogCart, ProductCart } from "@/types/Cart";
import AutumnOffer from "@components/Banners/AutumnOffer";
import HomePage from "@components/Banners/HomePage";
import ShowCarts from "@components/Cart/ShowCarts";
import Puzzle from "@components/Puzzle";
import ShowPuzzlesMain from "@components/ShowPuzzlesMain";
import TitleHead from "@components/TitleHead";
import IconSupport from "@icons/supportIcon.svg?react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  notFoundComponent: () => <p>404 not found</p>,
});
export const products: ProductCart[] = [
  {
    id: 1,
    title: "کیت رابط کاربری موبایل",
    ownerTeam: "تیم دیزاین آلفا",
    categorie: "UI Kit",
    price: 290000,
  },
  {
    id: 2,
    title: "مجموعه آیکن مینیمال",
    ownerTeam: "Lozi Icons",
    categorie: "Icons",
    price: 120000,
  },
  {
    id: 3,
    title: "قالب داشبورد مدیریت",
    ownerTeam: "Nextify Studio",
    categorie: "Template",
    price: 490000,
  },
];

export const blogs: BlogCart[] = [
  {
    id: 1,
    title: "چطور در ۳۰ روز React را حرفه‌ای یاد بگیریم",
    desc: "این مقاله مسیر یادگیری React را از پایه تا پیشرفته توضیح می‌دهد و تمرین‌های عملی ارائه می‌کند.",
  },
  {
    id: 2,
    title: "بهینه‌سازی عملکرد وب‌سایت با Tailwind CSS",
    desc: "در این مطلب نکات و تکنیک‌های بهینه‌سازی استایل‌ها و افزایش سرعت لود سایت با Tailwind CSS بررسی شده است.",
  },
  {
    id: 3,
    title: "۱۰ کتاب برتر برای توسعه‌دهندگان فرانت‌اند",
    desc: "لیستی از کتاب‌های ضروری برای هر فرانت‌اند دولوپر همراه با توضیح کوتاه درباره هر کتاب.",
  },
  {
    id: 4,
    title: "مقایسه Next.js و Remix در سال ۲۰۲۵",
    desc: "این مقاله مزایا و معایب هر فریمورک را بررسی کرده و نشان می‌دهد کدام برای پروژه شما مناسب‌تر است.",
  },
  {
    id: 5,
    title: "چطور پروژه‌های TypeScript را بهینه مدیریت کنیم",
    desc: "روش‌ها و الگوهای برتر برای ساختاردهی و مدیریت پروژه‌های بزرگ TypeScript.",
  },
];

function App() {
  const width = useWindowWidth();

  return (
    <>
      <HomePage />

      <ShowPuzzlesMain />

      <section>
        <TitleHead
          header="دستــه بـندی ها فـایـل ها"
          desc="قطعه های پروژت براساس نوع"
        />
        <div className="grid grid-cols-1 gap-y-18 md:gap-y-10 2xl:gap-y-36 gap-x-4 justify-items-center my-4 md:my-12 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col">
          {PuzzleFull.map((puzzle) => (
            <Puzzle
              className={puzzle.id == 3 ? "mb-4 md:mb-20" : ""}
              key={puzzle.id}
              state={puzzle.state}
              text={puzzle.title}
              icon={puzzle.icon}
              size={width > 1536 ? "lg" : "small"}
              isActive={puzzle.id == 1 && true}
            />
          ))}
        </div>
      </section>

      <ShowCarts
        carts={products}
        type="product"
        title="جـدیدتـرین های لــــوزی"
        desc="داغ ترین محصولات منتشر شده توسط برترین دیزاینر ها"
      />

      <AutumnOffer />

      <ShowCarts
        carts={products}
        type="product"
        title="پـرفــروش تـرین های لــــوزی"
        desc="داغ ترین محصولات منتشر شده توسط برترین دیزاینر ها"
      />

      <ShowCarts
        carts={blogs.filter((index) => index.id <= 3)}
        type="blog"
        title="وبــلاگ لــــوزی"
        desc="داغ ترین محصولات منتشر شده توسط برترین دیزاینر ها"
        className="mt-10 md:mt-[72px]"
      />
      <div className="absolute top-[60em] right-20 border-2 border-primary rounded-full p-2 hidden md:flex">
        <IconSupport className="" />
      </div>
    </>
  );
}
