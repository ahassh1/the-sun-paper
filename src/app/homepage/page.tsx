import React from 'react';
import MainNews from "@/components/MainNews"

const HomePage = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
    const data = await res.json()
    const sections = data.data
    const mainNews= sections[0].articles
    console.log(mainNews);
    
    // const mainNews = sections.articles.slice(0,1)
    const otherSections = sections.slice(1,5)

    
    console.log(sections)

    return (
        <div>
             <div className='grid grid-cols-3'>
                {/* first part */}
                <div className='col-span-2 bg-blue-400 flex gap-2'> 
               <MainNews news={mainNews}/>
                <div>
                     {
            otherSections.map((other, i) => 
                <div key={i}>
                    <p className='text-red-500'>প্রধান খবর</p>
                   <h3 className='font-bold'> {other.title}</h3>
                </div>
            )
        }
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