import API from "@/api";
import type { InputFetchProducts } from "@/types/getProducts";

export const getProducts = async ({
  sort,
  filter,
  page,
  limit,
}: InputFetchProducts) => {
  try {
    const response = await API.get(
      `/products?sort=${sort}&${filter}&limit=${limit}&page=${page}`
    );

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw to let React Query handle it
  }
};
