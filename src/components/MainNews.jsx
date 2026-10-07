import Image from "next/image";

import BanglaDate from "./BanglaDate";
import Link from "next/link";

const MainNews = ({ news }) => {
  const firstNews = news[0];

  return (
    <Link href={`/news/${firstNews.id}`} className="card group w-96 cursor-pointer overflow-hidden bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <figure className="overflow-hidden">
        <Image
          src={firstNews.imageUrl}
          width={500}
          height={400}
          alt={firstNews.imageAlt}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title transition-colors duration-200 group-hover:text-red-600">
          {firstNews.title}
        </h2>

        <p className="text-sm text-gray-600">{firstNews.description}</p>

        <div className="card-actions justify-start">
          <BanglaDate className="text-left" />
        </div>
      </div>
    </Link>
  );
};

export default MainNews;