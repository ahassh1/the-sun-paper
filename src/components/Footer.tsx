import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 py-10">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white"
            >
              News<span className="text-red-500">24</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              সর্বশেষ খবর ও গুরুত্বপূর্ণ তথ্য সহজভাবে আপনার কাছে পৌঁছে দিই।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-red-500">
                হোম
              </Link>

              <Link href="/category/bangladesh" className="hover:text-red-500">
                বাংলাদেশ
              </Link>

              <Link href="/category/world" className="hover:text-red-500">
                বিশ্ব
              </Link>

              <Link href="/category/sports" className="hover:text-red-500">
                খেলাধুলা
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-semibold text-white">
              Stay Updated
            </h3>

            <p className="text-sm text-gray-400">
              প্রতিদিনের গুরুত্বপূর্ণ খবরের সাথে থাকুন।
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-5 flex flex-col md:flex-row justify-between gap-2 text-sm text-gray-500">
          <p>© 2026 News24. All rights reserved.</p>

          <p>
            Made with <span className="text-red-500">♥</span> for news lovers
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;