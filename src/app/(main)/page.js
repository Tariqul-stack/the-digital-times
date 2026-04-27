import { redirect } from "next/navigation";
import { getCategories, withMinimumDelay } from "@/lib/news";

export default async function Home() {
  const categories = await withMinimumDelay(getCategories());
  const defaultCategoryId = categories[0]?.category_id ?? "01";

  redirect(`/category/${defaultCategoryId}`);
}
