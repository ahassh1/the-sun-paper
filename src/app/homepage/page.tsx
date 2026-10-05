import MainNews from "@/components/MainNews"
import OtherSections from '@/components/OtherSections';

const HomePage = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
    const data = await res.json()
    const sections = data.data
    const mainNews= sections[0].articles
    const otherSections = sections[0].articles.slice(1,5)

    return (
        <div>
             <div className='grid grid-cols-3 mt-4'>
                {/* first part */}
                <div className='col-span-2 flex gap-2'> 
               <MainNews news={mainNews}/>
                <div>
                    <OtherSections otherNews= {otherSections}/>
                </div>
                </div>
                {/* second section  */}
                <div className='col-span-1 bg-green-400'>
       
                </div>
             </div>
        </div>
    );
};

export default HomePage;