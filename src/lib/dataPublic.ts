import type { BlogCart, ProductCart } from "@/types/Cart";
import type { StateType } from "@/types/Puzzle";

export const navbarData = [
  { id: 1, title: "صفحه اصلی", link: "/" },
  { id: 2, title: "محصولات", link: "/products" },
  { id: 3, title: "وبلاگ", link: "/blog" },
  { id: 4, title: "درباره ما", link: "/about" },
];

export const linksForFooter1 = [
  { id: 1, title: "آبجکت سه بعدی", link: "#" },
  { id: 2, title: "آیکون ست", link: "#" },
  { id: 3, title: "ایلاستریشن", link: "#" },
  { id: 4, title: "وایرفریم", link: "#" },
  { id: 5, title: "کیت رابط کاربری", link: "#" },
  { id: 6, title: "موکاپ", link: "#" },
];
export const linksForFooter2 = [
  { id: 1, title: "قوانین لوزی", link: "#" },
  { id: 2, title: "سوالات متداول", link: "#" },
  { id: 3, title: "ارتباط با پشتیبانی", link: "#" },
];

export const LinksForSocialFooter = [
  { id: 1, name: "telegram", link: "#" },
  { id: 2, name: "github", link: "#" },
  { id: 3, name: "linkedin", link: "#" },
];

interface PuzzleType{
  id: number;
  title: string;
  icon: string;
  state: StateType
}
export const PuzzleFull: PuzzleType[] = [
  { id: 1, title: "کیت رابط کاربری", icon: "browser", state: "topToRight" },
  { id: 2, title: "آیکن ست", icon: "puzzle", state: "bottomToLeft" },
  { id: 3, title: "ایلاستریشن", icon: "nib", state: "topToBottom" },
  { id: 4, title: "ماکاپ", icon: "computer", state: "bottomToTop" },
  { id: 5, title: "دیزاین سیستم", icon: "layers", state: "topToLeft" },
  { id: 6, title: "آبجکت سه بعدی", icon: "objectBox", state: "bottomToRight" },
];

export const ThreePuzzle:PuzzleType[] = [
  {
    id: 1,
    title: "کیفیت تضمینی فایل‌ها",
    icon: "shield",
    state: "bottomToRight",
  },
  {
    id: 2,
    title: "پشتیبانی ۱۲ ساعته",
    icon: "headphone",
    state: "topToBottom",
  },
  {
    id: 3,
    title: "دانلود سریع و آسان",
    icon: "folderDownload",
    state: "bottomToLeft",
  },
];


export const products: ProductCart[] = [
  {
    _id: "bjnskdmcv",
    name: "کیت رابط کاربری موبایل",
    brand: "تیم دیزاین آلفا",
    category: "UI Kit",
    price: 290000,
    slug: "",
    description: "",
    image: "",
    images: [],
    countInStock: 0,
    isAvailable: false,
    rating: 0,
    numReviews: 0,
    discount: 0,
    discountedPrice: 0,
    createdAt: "",
    updatedAt: ""
  },
  {
    _id: "bdncim",
    name: "مجموعه آیکن مینیمال",
    brand: "Lozi Icons",
    category: "Icons",
    price: 120000,
    slug: "",
    description: "",
    image: "",
    images: [],
    countInStock: 0,
    isAvailable: false,
    rating: 0,
    numReviews: 0,
    discount: 0,
    discountedPrice: 0,
    createdAt: "",
    updatedAt: ""
  },
  {
    _id: "udihco",
    name: "قالب داشبورد مدیریت",
    brand: "Nextify Studio",
    category: "Template",
    price: 490000,
    slug: "",
    description: "",
    image: "",
    images: [],
    countInStock: 0,
    isAvailable: false,
    rating: 0,
    numReviews: 0,
    discount: 0,
    discountedPrice: 0,
    createdAt: "",
    updatedAt: ""
  },
];

export const blogs: BlogCart[] = [
  {
    id: 1,
    name: "چطور در ۳۰ روز React را حرفه‌ای یاد بگیریم",
    description: "این مقاله مسیر یادگیری React را از پایه تا پیشرفته توضیح می‌دهد و تمرین‌های عملی ارائه می‌کند.این مقاله مسیر یادگیری React را از پایه تا پیشرفته توضیح می‌دهد و تمرین‌های عملی ارائه می‌کند.این مقاله مسیر یادگیری React را از پایه تا پیشرفته توضیح می‌دهد و تمرین‌های عملی ارائه می‌کند.",
  },
  {
    id: 2,
    name: "بهینه‌سازی عملکرد وب‌سایت با Tailwind CSS",
    description: "در این مطلب نکات و تکنیک‌های بهینه‌سازی استایل‌ها و افزایش سرعت لود سایت با Tailwind CSS بررسی شده است.",
  },
  {
    id: 3,
    name: "۱۰ کتاب برتر برای توسعه‌دهندگان فرانت‌اند",
    description: "لیستی از کتاب‌های ضروری برای هر فرانت‌اند دولوپر همراه با توضیح کوتاه درباره هر کتاب.",
  },
  {
    id: 4,
    name: "مقایسه Next.js و Remix در سال ۲۰۲۵",
    description: "این مقاله مزایا و معایب هر فریمورک را بررسی کرده و نشان می‌دهد کدام برای پروژه شما مناسب‌تر است.",
  },
  {
    id: 5,
    name: "چطور پروژه‌های TypeScript را بهینه مدیریت کنیم",
    description: "روش‌ها و الگوهای برتر برای ساختاردهی و مدیریت پروژه‌های بزرگ TypeScript.",
  },
];