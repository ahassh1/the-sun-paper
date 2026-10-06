import Image from 'next/image';
import BanglaDate from './BanglaDate';
 type Inews ={
    imageUrl: string,
    imageAlt: string,
    title: string,
    description:string,
}
const NewsCard = ({news}:{news:Inews }) => {
    return (
        <div>
            <div className="card group space-x-3 cursor-pointer overflow-hidden bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <figure className="overflow-hidden">
                    <Image
                      src={news.imageUrl}
                      width={500}
                      height={400}
                      alt={news.imageAlt}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </figure>
            
                  <div className="card-body">
                    <h2 className="card-title transition-colors duration-200 group-hover:text-red-600">
                      {news.title}
                    </h2>
            
                    <p className="text-sm text-gray-600">{news.description}</p>
            
                    <div className="card-actions justify-start">
                      <BanglaDate/>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default NewsCard;