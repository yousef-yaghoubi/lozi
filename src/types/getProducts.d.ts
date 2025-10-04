export interface InputFetchProducts {
  sort:
    | "-price"
    | "price"
    | "-rating"
    | "rating"
    | "-countInStock"
    | "countInStock"
    | "-brand"
    | "brand"
    | "-category"
    | "category"
    | "-createdAt"
    | "createdAt"
    | "-updatedAt"
    | "updatedAt"
    | undefined;
  filter:
    | `category=${string}`
    | `brand=${string}`
    | `price[gt]=${number}&price[lt]=${number}`;
  page?: number;
  limit?: number;
}
