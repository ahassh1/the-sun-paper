import Image from "next/image";

// Page parameters
interface IProps {
  params: Promise<{
    newsid: string;
  }>;
}

// Article body data
interface IBody {
  type: "image" | "text" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string | null;
  altText?: string;
}

// News data
interface INews {
  id: string;
  title: string;
  imageUrl: string;
  source: string;
  firstPublished: string;
  body: IBody[];
  tags: string[];
}

const NewsDetails = async ({ params }: IProps) => {
  // Get news ID
  const { newsid } = await params;

  // Fetch news data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/article/${newsid}`,
    {
      cache: "no-store",
    }
  );

  // If request fails
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();

  // Get news data
  const news: INews = data.data;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">

      {/* Show news header */}
      <div className="mb-8">

        <div className="flex items-center gap-3 mb-4">

          <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-600 rounded-full">
            {news.source}
          </span>

          <span className="text-sm text-gray-500">
            {new Date(news.firstPublished).toLocaleDateString("bn-BD", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>

        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
          {news.title}
        </h1>

      </div>

      {/* If main image exists */}
      {news.imageUrl && (
        <figure className="mb-8 overflow-hidden rounded-xl">
          <Image
            src={news.imageUrl}
            alt={news.title}
            width={1000}
            height={550}
            className="w-full h-auto object-cover"
            priority
          />
        </figure>
      )}

      {/* Show article body */}
      <div className="space-y-6 text-gray-800">
    {/* body te mapping */}
        {news.body.map((item, index) => {

          // If image type and URL exists
          if (item.type === "image" && item.url) {
            return (
              <figure key={index} className="my-7">

                <Image
                  src={item.url}
                  alt={item.altText || news.title}
                  width={item.width || 900}
                  height={item.height || 500}
                  className="w-full max-w-3xl mx-auto h-auto rounded-xl"
                />

                {/* If image caption exists */}
                {item.caption && (
                  <figcaption className="mt-2 text-sm text-gray-500 text-center">
                    {item.caption}
                  </figcaption>
                )}

              </figure>
            );
          }

          // If subheading type and text exists
          if (item.type === "subheading" && item.text) {
            return (
              <h2
                key={index}
                className="text-2xl font-bold text-gray-900 pt-4"
              >
                {item.text}
              </h2>
            );
          }

          // If text type and text exists
          if (item.type === "text" && item.text) {
            return (
              <p
                key={index}
                className="text-lg leading-8 text-gray-700"
              >
                {item.text}
              </p>
            );
          }

          return null;
        })}

      </div>

      {/* If tags exist, show tags */}
      {news.tags?.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200">

          <h3 className="font-semibold text-gray-900 mb-3">
            Tags
          </h3>

          <div className="flex flex-wrap gap-2">

            {news.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}

          </div>

        </div>
      )}

    </article>
  );
};

export default NewsDetails;