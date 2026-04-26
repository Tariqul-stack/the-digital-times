import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <>
      {/* Left Sidebar */}
      <div className="font-bold text-lg col-span-3">
        All Categories
        <ul className="flex flex-col gap-3 mt-4 text-base font-medium">
          {categories.map((category) => (
            <li
              key={category.category_id}
              className={`rounded-md pl-10 text-left ${
                activeId === category.category_id
                  ? "bg-pink-300 text-black"
                  : "bg-slate-100 text-gray-700"
              }`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block p-2"
              >
                {""}
                {category.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftSidebar;
