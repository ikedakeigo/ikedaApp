import React from "react";
import personData from "../../../../data/person";


const PersonProf = () => {
  const filteredData = personData.filter((person) => person.id === 1);
  return (
    <>
      {filteredData.map((person) => (
      <div className="shadow p-8 mb-4" key={person.id}>
        <div className="flex">
          <img
            className="rounded-full mr-4 w-18 h-18 border border-gray-400 lazyload"
            src={person.imgLogo}
            width="70"
            height="70"
            alt={person.alt}
          />
          <div className="overflow-hidden">
            <p>{person.name}</p>
            <p className="mt-6">
              <a className="text-black underline" href="#">
                このサービスについて質問する
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6">
          <bookmark-button ng-version="5.2.11">
            <div id="service-detail">
              <button className="border border-black text-base w-full shadow-sm pt-4 pb-4">
                検討リストに追加する
              </button>
            </div>
          </bookmark-button>
        </div>
      </div>

      ))}
    </>
  );
};

export default PersonProf;
