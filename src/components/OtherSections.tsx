import Link from "next/link";

interface IOtherNews {
  id: string;
  title: string;
}

const OtherSections = ({
  otherNews,
}: {
  otherNews: IOtherNews[];
}) => {
  const fourNews = otherNews;

  return (
    <div className="space-y-4">
      {fourNews.map((four: IOtherNews, i: number) => (
        <div
          key={four.id || i}
          className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
        >
        <Link href={`/news/${four.id}`}>
          <p className="mb-1 text-sm font-semibold text-red-500">
            প্রধান খবর
          </p>

          <h3 className="font-bold leading-6 text-gray-800 transition-colors duration-200 group-hover:text-red-600">
            {four.title}
          </h3>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default OtherSections;