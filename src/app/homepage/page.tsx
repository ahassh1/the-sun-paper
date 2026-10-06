import MainNews from "@/components/MainNews"

import OtherSections from '@/components/OtherSections';

import MostRead from '@/components/MostRead';

import HomePageOtherSection from "@/components/HomePageOtherSection";

const HomePage = async() => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")

    const data = await res.json()

    const sections = data.data

    const mainNews = sections[0].articles

    const otherSections = sections[0].articles.slice(1,5)

    const homePageOSectoin = sections.slice(1)

    return (

      <div>

        <div className='grid grid-cols-3 mt-4 space-x-5'>

          <div className='col-span-2'>

            <div className='flex gap-2'>

              <div>
                <MainNews news={mainNews}/>
              </div>

              <div>
                <OtherSections otherNews={otherSections}/>
              </div>

            </div>

            <div className="mt-4 md:mt-5">

              <HomePageOtherSection otherNews={homePageOSectoin}/>

            </div>

          </div>

          <div className='col-span-1'>

            <MostRead/>

          </div>

        </div>

      </div>
    );
};

export default HomePage;
