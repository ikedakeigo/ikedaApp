import React from "react";
import Link from "next/link";
import popularData from "../../data/popular";

const Popular = () => {
  return (
    <section>
      <div className="p-4 mb-16 bg-white box-sha shadow-lg">
        <h2 className="text-sm font-medium mb-4">人気のカテゴリー</h2>
        <div className="flex justify-between flex-wrap">
          {popularData.map((popular) => (
          <Link href={popular.href} className="w-[30%] block mb-4" key={popular.title}>
            <img src={popular.image} alt={popular.alt} />
            <p className="text-sm font-bold">
              {popular.title}
            </p>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
