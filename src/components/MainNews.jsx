import Image from 'next/image';
import React from 'react';
import BanglaDate from './BanglaDate';

const MainNews = ({news}) => {
    const firstNews = news[0]
    console.log(firstNews)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={firstNews.imageUrl}
      width={500}
      height={400}
      alt={firstNews.imageAlt} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstNews.title}</h2>
    <p> {firstNews.description}</p>
    <div className="card-actions justify-end">
     <BanglaDate className="text-left"/>
    </div>
  </div>
</div>
    );
};

export default MainNews;