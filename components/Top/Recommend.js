import React from "react";
import recommendData from "../../data/recommend";

const Recom = () => {
  return (
    <section>
      <div className="p-4 mb-16 bg-white box-sha shadow-lg">
        <h2 className="text-sm font-medium mb-4">今おすすめ</h2>
        <div className="flex justify-between flex-wrap">
          {recommendData.map((recommend) => (
            <a href={recommend.href} className="w-[30%] block mb-4" key={recommend.title}>
              <img src={recommend.image} alt={recommend.alt} />
              <p className="text-sm font-bold">{recommend.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recom;
