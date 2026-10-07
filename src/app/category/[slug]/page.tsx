import NewsCard from "@/components/NewsCard";

// Page props

interface IProps {
    params: Promise<{
        slug: string;
    }>;
}

// News type

interface INews {
    title: string;
    data: {
        imageUrl: string;
        imageAlt: string;
        title: string;
        description: string;
        id: string
    }[];
}

const CategoryPage = async ({ params }: IProps) => {
    const { slug } = await params; // Get slug

    console.log(slug); // Check slug

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/category/${slug}`, // Fetch data
    );

    const data: INews = await res.json(); // Get response

    const categoryNews = data.data; // Get articles

    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">
                {data.title} {/* Show title */}
            </h1>

            <div className="grid grid-cols-3 gap-4">
                {categoryNews.map((news) => (
                    <NewsCard
                        key={news.id}
                        news={news}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;