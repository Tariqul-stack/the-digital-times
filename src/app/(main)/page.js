async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category; // 👈 directly array return
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto p-10">
      
      {/* Left Sidebar */}
      <div className="font-bold text-lg col-span-3">
        All Categories
        <ul className="flex flex-col gap-3 mt-4 text-base font-medium">
          {categories.map((category) => (
            <li
              key={category.category_id}
              className="bg-slate-100 p-2 rounded-md text-left pl-10"
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle */}
      <div className="font-bold text-3xl bg-pink-100 col-span-6">
        All News
      </div>

      {/* Right */}
      <div className="font-bold text-3xl bg-purple-200 col-span-3">
        Social Icons
      </div>

    </div>
  );
}