import NewsCard from "./NewsCard";

interface INews {
  title: string;
  articles: {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    id: string;
  }[];
}

const HomePageOtherSection = ({
  otherNews,
}: {
  otherNews: INews[];
}) => {
  return (
    <div>
      {otherNews.map((onews, id: number) => (
        <div className="font-bold pt-5" key={id}>
          <h2>{onews.title}</h2>

          <div className="border-b-2 border-red-500 mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 py-6 lg:grid-cols-3">
            {onews.articles.map((news) => (
              <div key={news.id}>
                <NewsCard news={news} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageOtherSection;