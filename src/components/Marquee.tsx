import Link from "next/link";

import MarqueeText from "react-marquee-text";

import "react-marquee-text/dist/styles.css";
 interface IHeadline {
  id: string,
  title: string
}

const Marquee = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news");

    const data = await res.json();

    const headlines = data.data;

    return (
        <div className="flex overflow-hidden bg-red-600 text-white mt-2">

            <div className="flex shrink-0 items-center bg-red-700 px-4 font-semibold">
                সর্বশেষ
            </div>

            <div className="flex-1 overflow-hidden">
                <MarqueeText
                    className="py-1.5"
                    duration={10}
                    direction="right"
                >
                    {headlines.map((head:IHeadline) => (
                        <Link
                            key={head.id}
                            href={`/news/${head.id}`}
                            className="mx-2 inline-block hover:underline"
                        >
                            <span>{head.title}</span>
                            <span className="mx-5">•</span>
                        </Link>
                    ))}
                </MarqueeText>
            </div>

        </div>
    );
};

export default Marquee;