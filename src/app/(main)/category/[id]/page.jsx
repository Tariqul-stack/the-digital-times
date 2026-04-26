import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}
async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
}

const NewsCategory = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramRes");
  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);
  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto p-10">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>

      {/* Middle */}
      <div className="col-span-6">
        <h2 className="text-3xl font-bold mb-2">All News</h2>

        {news.length > 0 ? (
          news?.map((n) => (
            <div key={n._id} className="bg-pink-100 p-3 mb-3 rounded">
              {n.title}
            </div>
          ))
        ) : (
          <h2 className="font-bold text-4xl text-center my-7 mt-40">
            No news found!!
          </h2>
        )}
      </div>

      {/* Right */}
      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategory;
