import React from "react";

const Footer = () => {
  return (
    <footer className=" ">
      <nav
        className="
      bg-gray-100
      text-black
      w-full"
      >
        <ul className="xl:flex md:block justify-around ">
          <li className="p-2">イケダのマーケットについて</li>
          <li className="p-2">出店について</li>
          <li className="p-2">運用メディア・SNS</li>
          <li className="p-2">会社概要・規約</li>
        </ul>
        <div
          className="
          text-center mt-10
        "
        >
          <p>© 2024 Ikeda Market</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
