import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "../images/Logo";
import { menuData } from "@/data/menuData";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { ThemeChanger } from "./ThemeChanger";

const SearchInput = () => (
  <input
    type="search"
    aria-label="Search"
    placeholder="Search"
    className="h-8 rounded-md bg-[#F4F4F5] px-4 dark:bg-[#3a4050]"
  />
);

const DesktopMenu = ({ items }) => (
  <div className="hidden items-center justify-center gap-3 pl-2.5 md:flex">
    {items.map((item) => (
      <Link
        key={item.id}
        href={item.link}
        className="text-md flex h-9 items-center justify-center rounded-md border border-transparent p-2 font-medium leading-5 text-gray-900 transition duration-150 ease-in-out hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        {item.label}
      </Link>
    ))}
    <div className="flex items-center gap-3">
      <ThemeChanger />
      <SearchInput />
    </div>
  </div>
);

const MobileMenu = ({ items, setVisible }) => {
  const handleClose = () => setVisible(false);

  return (
    <>
      <div
        className="fixed inset-0 z-10 bg-gray-200/70"
        onClick={handleClose}
        aria-hidden="true"
      ></div>
      <div className="fixed bottom-0 right-0 top-0 z-20 flex w-2/3 flex-col gap-2 bg-white px-2 pt-2 transition-all dark:bg-[#2a303c] sm:w-2/5">
        <div className="flex justify-between">
          <button
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[#f4f4f5] dark:bg-[#3b4050] dark:text-white"
            aria-label="Close menu"
          >
            <IoClose />
          </button>
          <ThemeChanger />
        </div>
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="ml-2 font-semibold text-gray-700 hover:text-blue-300 dark:text-gray-200"
          >
            {item.label}
          </Link>
        ))}
        <SearchInput />
      </div>
    </>
  );
};

const Header = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="sticky top-0 z-50 border-b-2 bg-white shadow-sm dark:border-[#383E47] dark:bg-[#2D333B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="https://pinecone-web-blog.vercel.app/"
              aria-label="Go to homepage"
            >
              <Logo />
            </Link>
          </div>
          <DesktopMenu items={menuData} />
          <div className="flex gap-2 md:hidden">
            <ThemeChanger />
            <button
              onClick={toggleVisibility}
              className="sm:flex md:hidden"
              aria-label="Open menu"
            >
              <HiOutlineMenu className="h-8 w-8 dark:text-[#ADBAC7]" />
            </button>
          </div>
          {visible && <MobileMenu items={menuData} setVisible={setVisible} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
