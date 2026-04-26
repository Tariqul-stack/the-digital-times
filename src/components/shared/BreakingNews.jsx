import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the city",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-10 items-center bg-gray-200 mx-auto container p-4 mt-5 rounded-xl">
      <button className="btn bg-[#D72050] text-white font-semibold px-4 py-6 text-xl rounded-lg ">
        Latest
      </button>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="text-lg font-semibold gap-6 "
      >
        {news.map((n) => (
          <span key={n._id}>{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
