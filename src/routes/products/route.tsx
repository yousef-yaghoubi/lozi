import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import UiKitPage from "@/components/shared/Banners/UiKitPage";
import FilterProducts from "@/components/shared/FilterProducts";
import { getProducts } from "@/services/getProducts";
import ShowCarts from "@/components/shared/Cart/ShowCarts";

// Constants
const PRODUCTS_PER_PAGE = 1;

const CATEGORIES = [
  {
    key: "application",
    title: "اپلیکیشن",
  },
  {
    key: "dashboard",
    title: "داشبورد",
  },
  {
    key: "landing",
    title: "لندینگ",
  },
  {
    key: "website",
    title: "وبسایت",
  },
] as const;

// Route Configuration
export const Route = createFileRoute("/products")({
  loader: async ({ context: { queryClient } }) => {
    // Prefetch all categories
    await Promise.all(
      CATEGORIES.map((category) =>
        queryClient.prefetchInfiniteQuery({
          queryKey: ["products", category.key],
          queryFn: ({ pageParam = 1 }) =>
            getProducts({
              sort: "-createdAt",
              filter: `category=${category.title}`,
              limit: PRODUCTS_PER_PAGE,
              page: pageParam,
            }),
          initialPageParam: 1,
          pages: 1,
        })
      )
    );
    return {};
  },
  component: RouteComponent,
});

// Custom Hook for Product Category
function useProductCategory(categoryKey: string, categoryTitle: string) {
  return useSuspenseInfiniteQuery({
    queryKey: ["products", categoryKey],
    queryFn: ({ pageParam = 1 }) =>
      getProducts({
        sort: "-createdAt",
        filter: `category=${categoryTitle}`,
        limit: PRODUCTS_PER_PAGE,
        page: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pagination.total > lastPage.pagination.page
        ? lastPage.pagination.page + 1
        : undefined,
  });
}

// Component
function RouteComponent() {
  // Fetch all categories
  const categoriesData = CATEGORIES.map((category) => ({
    ...category,
    query: useProductCategory(category.key, category.title),
  }));

  return (
    <>
      <UiKitPage />
      <FilterProducts />
      <div className="mt-32">
        {categoriesData.map(({ key, title, query }) => (
          <ShowCarts
            key={key}
            carts={query.data.pages.flatMap((page) => page.data.products)}
            title={`جدیدترین کیت های ${title}`}
            desc="جدیدترین منتشر شده‌ها در این دسته"
            type="product"
            showBtn="bottom-center"
            onClick={
              query.hasNextPage ? () => query.fetchNextPage() : undefined
            }
            disableMore={!query.hasNextPage}
            loadingBtn={query.isFetchingNextPage}
          />
        ))}
      </div>
    </>
  );
}
