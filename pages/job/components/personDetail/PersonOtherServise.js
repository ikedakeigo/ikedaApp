import React from "react";
import personData from "../../../../data/person-service";

const PersonOtherServise = () => {

  return (
    <>
    {personData.map((person) => (
      <div className="shadow-md bg-white p-8 mb-4" key={person.id}>
        <h2 className="text-lg font-bold mt-0 mb-4">この店舗のサービス</h2>
        <div id="service-other">
          <a className="flex w-full mb-8 last:mb-0 text-gray-800" href={person.href}>
            <div className="flex-none w-1/3">
              <div className="relative">
                <img
                  className="w-full object-cover"
                  src={person.image}
                  alt={person.alt}
                />
              </div>
            </div>
            <div className="flex-auto pl-2">
              <p className="text-sm mb-1">{person.title}</p>
              <h3 className="text-base font-bold mb-1 leading-6">
                {person.text}
              </h3>
              <p className="text-3xl font-bold text-right">¥{person.price}</p>
            </div>
          </a>
        </div>
      </div>
    ))}
    </>
  );
};

export default PersonOtherServise;
