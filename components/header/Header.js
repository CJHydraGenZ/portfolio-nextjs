import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="w-full py-6 bg-slate-500 flex">
        <div className="flex justify-between relative">
          <a href="" className="font-bold text-white mx-2">
            Gede Cahya
          </a>
        </div>
        <nav className="text-white absolute right-4">
          <ul className="flex">
            <li>
              <a href="" className="mx-2 text-base">
                Home
              </a>
            </li>
            <li>
              <a href="" className="mx-2 text-base">
                About
              </a>
            </li>
            <li>
              <a href="" className="mx-2 text-base">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
