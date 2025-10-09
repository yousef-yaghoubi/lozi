export const CATEGORIES = [
  { id: 0, label: "دسته بندی بر اساس", value: "none" },
  { id: 1, label: "کیت داشبورد", value: "dashboard" },
  { id: 2, label: "کیت اپلیکیشن", value: "application" },
  { id: 3, label: "کیت وبسایت", value: "website" },
  { id: 4, label: "لندینگ", value: "landing" },
] as const;

export const DEFAULT_CATEGORY = "none";

export const getCategoryLabel = (value: string): string => {
  return (
    CATEGORIES.find((c) => c.value === value)?.label ?? "دسته بندی بر اساس"
  );
};

export const getCategoryValue = (label: string): string | undefined => {
  const category = CATEGORIES.find((c) => c.label === label);
  return category?.value !== "none" ? category?.value : undefined;
};
