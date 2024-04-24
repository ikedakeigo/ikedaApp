// "use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <header className="py-6 px-4 flex justify-between items-center">
      <Link className="z-50" href="/" onClick={handleMenuClose}>
        <Image
          src="next.svg"
          width={40}
          height={40}
          alt="イケダのマーケット"
        />
      </Link>

      <nav
        className={
          isOpen
            ? "z-40 bg-blue-100 fixed top-0 right-0 bottom-0 h-screen flex flex-col w-[72vw]"
            : "fixed right-[-100%] md:right-4"
        }
      >
        <ul
          className={
            isOpen
              ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
              : "block md:flex md:gap-8"
          }
        >
          <li>
            <Link onClick={handleMenuClose} href="/about">
              はじめての方へ
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/company">
              人気のカテゴリー
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/recruit">
              カテゴリ一覧
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/recruit">
              マイページ
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/recruit">
              ヘルプ
            </Link>
          </li>
        </ul>
      </nav>
      <button className="z-50 space-y-2 md:hidden" onClick={handleMenuOpen}>
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen
              ? "block opacity-0 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
      </button>
      <label
        className={
          isOpen
            ? "fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-30"
            : "hidden"
        }
      ></label>
    </header>
  );
}
