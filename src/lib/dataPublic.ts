import type { BlogCart, ProductCart } from "@/types/Cart";
import type { StateType } from "@/types/Puzzle";

export const navbarData = [
  { id: 1, title: "صفحه اصلی", link: "/" },
  { id: 2, title: "وبلاگ", link: "/blog" },
  { id: 3, title: "درباره ما", link: "/about" },
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
    desc: "این مقاله مسیر یادگیری React را از پایه تا پیشرفته توضیح می‌دهد و تمرین‌های عملی ارائه می‌کند.این مقاله مسیر یادگیری React را از پایه تا پیشرفته توضیح می‌دهد و تمرین‌های عملی ارائه می‌کند.این مقاله مسیر یادگیری React را از پایه تا پیشرفته توضیح می‌دهد و تمرین‌های عملی ارائه می‌کند.",
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