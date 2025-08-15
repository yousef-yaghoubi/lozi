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
