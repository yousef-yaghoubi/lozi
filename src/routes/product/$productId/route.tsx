import useGetProduct from "@/hooks/product/useGetProduct";
import { addToast } from "@heroui/toast";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product/$productId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = useGetProduct(params.productId);
    return product;
  },
});

function RouteComponent() {
  const product = Route.useLoaderData();
  console.log(product.status == "error" && product.errors);
  return (
    <div>
      {product.status == "error"
        ? product.errors.map((err) =>
            addToast({
              title: err.field,
              description: err.message,
              color: "danger",
            })
          )
        : product.data.product.name}
    </div>
  );
}
