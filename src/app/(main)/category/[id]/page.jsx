import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { redirect } from "next/navigation";
import {
  getCategories,
  getNewsByCategoryId,
  withMinimumDelay,
} from "@/lib/news";

const NewsCategory = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const activeCategory = categories.find((category) => category.category_id === id);

  if (!activeCategory && categories[0]?.category_id) {
    redirect(`/category/${categories[0].category_id}`);
  }

  const selectedCategory = activeCategory ?? {
    category_id: "01",
    category_name: "All Categories",
  };
  const news = await withMinimumDelay(
    getNewsByCategoryId(selectedCategory.category_id),
  );

  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto p-10">
      <div className="col-span-3">
        <LeftSidebar
          categories={categories}
          activeId={selectedCategory.category_id}
        />
      </div>

      <div className="col-span-6">
        <h2 className="mb-2 text-3xl font-bold">
          {selectedCategory.category_name}
        </h2>

        {news.length > 0 ? (
          news.map((n) => (
            <div key={n._id} className="mb-6">
              <NewsCard news={n} />
            </div>
          ))
        ) : (
          <h2 className="font-bold text-4xl text-center my-7 mt-40">
            No news found!!
          </h2>
        )}
      </div>

      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategory;
