import { redirect } from "next/navigation";
import { getCategories } from "@/lib/news";

export default async function Home() {
  const categories = await getCategories();
  const defaultCategoryId = categories[0]?.category_id ?? "01";

  redirect(`/category/${defaultCategoryId}`);
}
