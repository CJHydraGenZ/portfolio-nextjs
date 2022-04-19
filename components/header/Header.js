import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <div className="w-full py-6 bg-slate-500 flex">
        <div className="flex justify-between relative">
          <Link href="/">
            <a className="font-bold text-white mx-2">Gede Cahya</a>
          </Link>
        </div>
        <nav className="text-white absolute right-4">
          <ul className="flex">
            <li>
              <Link href="/about">
                <a className="mx-2 text-base">About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="mx-2 text-base">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
