import UiKitPage from "@/components/shared/Banners/UiKitPage";
import Cart from "@/components/shared/Cart/Cart";
import FilterProducts from "@/components/shared/FilterProducts";
import type { ProductCart } from "@/types/Cart";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

const fetchProducts = async () => {
  try {
    const productsFetch = await fetch(
      `${import.meta.env.VITE_DOMIN_API}/api/products`
    );

    console.log(import.meta.env.VITE_DOMIN_API);
    if (!productsFetch.ok) {
      throw new Error(`HTTP error! status: ${productsFetch.status}`);
    }

    const fetchedProducts = await productsFetch.json();
    return fetchedProducts.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw to let React Query handle it
  }
};

const fetchQueryProduct = queryOptions({
  queryKey: ["getProducts"],
  queryFn: fetchProducts,
});

export const Route = createFileRoute("/products")({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(fetchQueryProduct),
});

type ProductCartFull = ProductCart & { type: "product" };

function RouteComponent() {
  const { data } = useSuspenseQuery(fetchQueryProduct);

  return (
    <>
      <UiKitPage />
      <FilterProducts />
      <div className="grid grid-cols-1 justify-items-center my-4 md:my-12 md:grid-cols-3 gap-y-10">
        {data.products?.map((prod: ProductCart) => {
          const productWithType: ProductCartFull = {
            ...prod,
            type: "product",
          };
          return <Cart key={prod._id} data={productWithType} />;
        })}
      </div>
    </>
  );
}
