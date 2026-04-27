/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { getNewsDetailsById } from "@/lib/news";

const formatPublishedDate = (publishedDate) => {
  if (!publishedDate) {
    return "Date unavailable";
  }

  const parsedDate = new Date(publishedDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return publishedDate;
  }

  return format(parsedDate, "EEEE, MMMM d, yyyy");
};

const NewsDetailsPage = async ({ params, searchParams }) => {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const categoryId = resolvedSearchParams?.category;
  const news = await getNewsDetailsById(id, categoryId);

  if (!news) {
    notFound();
  }

  const coverImage = news.image_url || news.thumbnail_url;
  const details = news.details || "No description available for this news.";

  return (
    <section className="container mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-4xl font-bold text-[#403f3f]">Dragon News</h1>

      <article className="rounded-sm border border-gray-200 bg-white p-8 md:p-10">
        {coverImage ? (
          <img
            src={coverImage}
            alt={news.title}
            className="h-[260px] w-full rounded-md object-cover md:h-[520px]"
          />
        ) : null}

        <h2 className="mt-8 text-3xl font-bold leading-[1.45] text-[#403f3f] md:text-[2.55rem]">
          {news.title}
        </h2>

        <div className="mt-5 text-lg leading-[1.8] text-[#706f6f] md:text-[1.2rem]">
          <p>
            {formatPublishedDate(news.author?.published_date)} | Tag Cloud Tags:{" "}
            {news.rating?.badge || "Featured"},{" "}
            {news.author?.name || "Dragon News"}
          </p>
          <p className="mt-2 whitespace-pre-line">{details}</p>
        </div>

        <Link
          href={categoryId ? `/category/${categoryId}` : "/"}
          className="mt-10 inline-flex items-center gap-3 bg-[#d72050] px-3 py-3 text-xl font-semibold text-white transition-colors hover:bg-[#b81b45] md:text-[1rem]"
        >
          <FaArrowLeft className="text-lg md:text-lg" />
          All news in this category
        </Link>
      </article>
    </section>
  );
};

export default NewsDetailsPage;
