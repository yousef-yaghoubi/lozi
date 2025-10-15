import API from "@/api";
import type { ProductCart } from "@/types/Cart";

async function useGetProduct(productId: string) {
  const product = await API.get(`/products/${productId}`).catch((error) => {
    return error.response;
  });
  return product.data as
    | { status: "success"; data: { product: ProductCart } }
    | { status: "error"; errors: [{ field: null; message: string }] };
}

export default useGetProduct;
