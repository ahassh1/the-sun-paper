import Link from "next/link";

interface INav{
     slug: string,
      title: string,
      topicId: null | string,
      url: string,
      scrapable: boolean
}
const NavLinks = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
    const data= await res.json()
     
    const navs = data.data

    const filterNavs = navs.filter((nav:INav) => nav.scrapable)
    return (
        <div className='flex justify-center gap-2 mt-3'>
            <Link  className="hover:text-red-500 hover:underline" href={"/"}>হোম</Link>
            {
                filterNavs.map((nav: INav, i: number)=> <Link className="hover:text-red-500 space-x-2 hover:underline" key={i} href={`/category/${nav.slug}`}> 
                {  nav.title}
                </Link>)
            }
        </div>
    );
};

export default NavLinks;