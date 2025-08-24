import AutumnOffer from "@/components/shared/Banners/AutumnOffer";
import HomePage from "@/components/shared/Banners/HomePage";
import Puzzle from "@/components/shared/Puzzle";
import ShowCarts from "@/components/shared/ShowCarts";
import TitleHead from "@/components/shared/TitleHead";
import useWindowWidth from "@/hooks/WindowWidth";
import { PuzzleFull, ThreePuzzle } from "@/lib/dataPublic";
import type { ProductCart } from "@/types/Cart";
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

function App() {
  const width = useWindowWidth();

  return (
    <>
      <HomePage />
      
      <section className="flex flex-col w-full items-center my-4 md:my-16">
        <div className="max-w-2xl flex flex-col items-center">
          <h2 className="m-h2 md:w-h5 text-center">
            پـروژه‌ت رو بـا مـا کـامل کـن!
          </h2>
          <h4 className="m-h5 md:w-h7 text-black-200">
            هر قطعه‌ای که برای طراحی نیاز داری، اینجاست
          </h4>
        </div>
        <div className="w-full max-w-2xl gap-y-12 md:gap-y-2 grid grid-rows-2 grid-cols-2 mt-4 md:mt-8 justify-items-center">
          {ThreePuzzle.map((puzzle) => (
            <Puzzle
              className={
                puzzle.id === 2
                  ? "col-start-1 col-end-3 row-start-1"
                  : "self-end"
              }
              key={puzzle.id}
              icon={puzzle.icon}
              state={puzzle.state}
              text={puzzle.title}
              size={width > 780 ? "small" : "mobile"}
              iconFar
              isActive
            />
          ))}
        </div>
      </section>

      <section>
        <TitleHead
          header="پـرفــروش تـرین های لــــوزی"
          desc="داغ ترین محصولات منتشر شده توسط برترین دیزاینر ها"
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
    </>
  );
}
