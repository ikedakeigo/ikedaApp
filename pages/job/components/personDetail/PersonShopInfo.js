import React from "react";
import personData from "../../../../data/person";

const PersonShopInfo = () => {
  const filteredData = personData.filter((person) => person.id === 1);
  return (
    <>
      {filteredData.map((person) => (
        <div
          id="shop-info"
          className="shadow p-8 mb-4"
          data-test-id="store-info"
          data-test-store-id="f8e70ffb-a344-4e7b-a80b-9a64969fff4e"
          data-test-store-code="498324893"
          key={person.id}
        >
          <h2 className="text-lg font-bold mt-0 mb-4">店舗について</h2>
          <div className="sm:flex block mb-8">
            <img
              className="rounded-full md:mr-4 mx-auto w-80 h-80 border border-gray-400"
              src={person.imgLogo}
              alt={person.alt}
            />
            <div>
              <p className="mb-2">{person.name}</p>
              <p>{person.comment}</p>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-0 mb-4">所在地</h3>
          <div className="pb-8">{person.address}</div>
          <h3 className="text-lg font-bold mt-0 mb-4">営業時間</h3>
          <div className="pb-8">{person.businessHours}</div>
          <h3 className="text-lg font-bold mt-0 mb-4">定休日</h3>
          <div className="pb-8">{person.holiday}</div>
          <h3 className="text-lg font-bold mt-0 mb-4">対応地域</h3>
          <div className="pb-4">
            <p className="mb-0">＜{person.compatibleArea}＞</p>
            <p className="font-bold mb-1">{person.prefecture}</p>
            <ul className="flex flex-wrap p-0 mt-0 mb-4 list-none">
              <li className="inline-block">{person.prefectureArea}</li>
            </ul>
            <p className="font-bold mb-1">{person.prefecture2}</p>
            <ul className="flex flex-wrap p-0 mt-0 mb-4 list-none">
              <li className="inline-block">{person.prefectureArea2}</li>
            </ul>
          </div>
          <h3 className="text-lg font-bold mt-0 mb-4">資格・許認可</h3>
          <div className="pb-8">
           {person.license}
            <br />
            <br />
           {person.license2}
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonShopInfo;
