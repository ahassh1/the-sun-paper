import Image from "next/image";
import Link from "next/link";
import BanglaDate from "./BanglaDate";

const Header = () => {

  return (
    <header className="bg-sky-50">
      <div className="container mx-auto flex min-h-16 items-center justify-between px-4 py-2">


        <div className="hidden w-40 lg:block" />

      
      <Link href={"/"}>
       <div className="flex items-center gap-2 text-center">
          <Image
            src="/logo.webp"
            alt="The Sun Paper Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />

          <div>
            <h1 className="text-lg font-bold text-red-700">
              The Sun Paper
            </h1>

            <BanglaDate/>
          </div>
        </div>
      </Link>


        <div className="flex items-center gap-2">
          <button className="btn bg-gray-300">
            সাইন ইন
          </button>

          <button className="btn bg-red-700 text-white">
            সাইন আপ
          </button>
        </div>

      </div>
    
    </header>
  );
};

export default Header;