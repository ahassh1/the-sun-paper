const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  const data = await res.json();

  const mostReadSection = data.data;

  interface IMostReadSection {
    title: string;
  }

  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">সর্বাধিক পঠিত</h1>

      <div className="space-y-2">
        {mostReadSection.map(
          (mostRead: IMostReadSection, i: number) => (
            <div
              key={i}
              className="flex cursor-pointer items-center gap-4 border-b border-gray-200 pb-2 transition-all duration-200 hover:bg-gray-50 hover:pl-2"
            >
              <h1 className="text-base font-bold text-red-500">
                {i + 1}
              </h1>

              <h1 className="text-[15px] font-semibold leading-5 text-gray-800 transition-colors duration-200 hover:text-red-600">
                {mostRead.title}
              </h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MostRead;