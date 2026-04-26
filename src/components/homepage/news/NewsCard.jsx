/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { format } from "date-fns";
import { BsBookmark, BsShare } from "react-icons/bs";
import { FaEye, FaStar } from "react-icons/fa";

const formatPublishedDate = (publishedDate) => {
  if (!publishedDate) {
    return "Date unavailable";
  }

  const parsedDate = new Date(publishedDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return publishedDate;
  }

  return format(parsedDate, "yyyy-MM-dd");
};

const getPreviewText = (details) => {
  if (!details) {
    return "No summary available for this story.";
  }

  return details.length > 180 ? `${details.slice(0, 180)}...` : details;
};

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    image_url,
    thumbnail_url,
    details,
    total_view,
    rating,
    author,
  } = news;

  const coverImage = image_url || thumbnail_url;
  const ratingValue = Number(rating?.number ?? 0);
  const roundedRating = Math.max(0, Math.min(5, Math.round(ratingValue)));

  return (
    <article className="overflow-hidden rounded-sm border border-gray-200 bg-white">
      <div className="flex items-center justify-between bg-[#f3f3f3] px-7 py-6">
        <div className="flex items-center gap-4">
          {author?.img ? (
            <img
              src={author.img}
              alt={author?.name || "Author"}
              className="h-14 w-14 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-lg font-semibold text-gray-500">
              {(author?.name || "A").slice(0, 1)}
            </div>
          )}

          <div>
            <h3 className="text-[1.5rem] font-bold leading-none text-[#403f3f]">
              {author?.name || "Unknown author"}
            </h3>
            <p className="mt-2 text-[1rem] text-[#706f6f]">
              {formatPublishedDate(author?.published_date)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-[1.9rem] text-[#706f6f]">
          <button
            type="button"
            className="transition-colors hover:text-[#ff8c47]"
          >
            <BsBookmark />
          </button>
          <button
            type="button"
            className="transition-colors hover:text-[#ff8c47]"
          >
            <BsShare />
          </button>
        </div>
      </div>

      <div className="px-7 py-8">
        <h2 className="text-[1.55rem] font-bold leading-[1.35] text-[#403f3f]">
          {title}
        </h2>

        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="mt-7 h-105 w-full rounded-xl object-cover"
          />
        ) : null}

        <p className="mt-9 text-[1rem] leading-[1.75] text-[#706f6f]">
          {getPreviewText(details)}{" "}
          <Link href={`/news/${_id}`} className="font-semibold text-[#ff8c47]">
            Read More
          </Link>
        </p>
      </div>

      <div className="mx-7 border-t border-gray-200 py-6">
        <div className="flex items-center justify-between text-[#706f6f]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-[1.6rem] text-[#ff8c47]">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < roundedRating ? "opacity-100" : "opacity-25"
                  }
                />
              ))}
            </div>
            <span className="text-[1rem] font-medium text-[#706f6f]">
              {ratingValue.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[1rem]">
            <FaEye className="text-[1.8rem]" />
            <span>{total_view ?? 0}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
