import type { BlogCart, ProductCart } from "@/types/Cart";
import Cart from "@components/Cart/Cart";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
// ساخت دیتا برای تست
const mockProduct: ProductCart & { type: "product" } = {
  _id: "5ufido",
  type: "product",
  name: "کیت رابط کاربری موبایل",
  brand: "تیم آلفا",
  category: "UI Kit",
  price: 120000,
  slug: "",
  countInStock: 5,
  image: "",
  images: ["dkc", "fvnm"],
  description: "fjndcmk",
  discount: 0,
  discountedPrice: 120000,
  rating: 4.5,
  numReviews: 5,
  isAvailable: true,
  createdAt: "",
  updatedAt: "",
};

const mockBlog: BlogCart & { type: "blog" } = {
  _id: "1dndkcd",
  type: "blog",
  name: "مقاله تستی برای ری‌اکت",
  description: "این متن برای تست truncate و نمایش توضیحات مقاله است.",
  image: "",
};

describe("Cart component", () => {
  test("renders product cart correctly", () => {
    render(<Cart data={mockProduct} />);

    // وجود تصویر
    expect(screen.getByAltText("ImageProduct")).toBeInTheDocument();

    // عنوان
    expect(screen.getByText(/کیت رابط کاربری/)).toBeInTheDocument();

    // جزئیات محصول
    expect(screen.getByLabelText("detailsForProduct")).toBeInTheDocument();

    // تیم مالک
    expect(screen.getByText("تیم آلفا")).toBeInTheDocument();

    // دسته‌بندی
    expect(screen.getByText("UI Kit")).toBeInTheDocument();

    // قیمت
    expect(screen.getByText(/۱۲۰,۰۰۰/)).toBeInTheDocument();

    // دکمه خرید
    expect(screen.getByLabelText("textButton")).toHaveTextContent("خرید");
  });

  test("renders blog cart correctly", () => {
    render(<Cart data={mockBlog} />);

    // عنوان
    expect(screen.getByText(/مقاله تستی/)).toBeInTheDocument();

    // توضیحات مقاله
    expect(screen.getByLabelText("descForBlog")).toBeInTheDocument();

    // دکمه مشاهده مقاله
    expect(screen.getByLabelText("textButton")).toHaveTextContent(
      "مشاهده مقاله"
    );
  });
});
