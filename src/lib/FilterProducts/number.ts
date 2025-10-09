// فرمت عدد با کاما
export const formatNumber = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// حذف کاما و تبدیل به عدد
export const parseNumber = (str: string): number => {
  const num = parseInt(str.replace(/,/g, ""), 10);
  return Number.isNaN(num) ? 0 : num;
};
