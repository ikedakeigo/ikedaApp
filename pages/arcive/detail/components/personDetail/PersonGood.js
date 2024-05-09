import React from "react";
import personData from "../../../../../data/person";

const PersonGood = () => {

  const filteredData = personData.filter((person) => person.id === 1);
  return (
    <>
    {filteredData.map((person) => (
      <div className="shadow pt-8 pr-4 pb-2 pl-4 mb-4" key={person.id}>
        <div className="flex justify-center pb-4">
          <div className="mr-2">
            <div className="flex">{/* 星 */}</div>
            <a className="text-xs text-black underline" href="#review">
              口コミ <span>{person.reviewsCount}</span>件
            </a>
          </div>
          <p className="text-7.5 font-bold leading-6 text-orange-600">
            {person.starCount}
          </p>
        </div>

        <div className="flex justify-center pb-4">
          <div className="pr-4 pl-4 text-center" id="smile">
            <p className="text-xs">返答の速さ</p>
            <img src="/image/icon/good_icon.svg" alt="" width={30} />
          </div>
          <div className="pr-4 pl-4 text-center">
            <p className="text-xs">作業実績</p>
            <p>
              {person.worksCount}
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-wrap">
          <ul className="bg-slate-200 rounded m-list-none w-48% mb-2">
            <li className="p-2 flex items-center h-full">
              <div className="h-6 w-6">
                <img src="/image/icon/cre_icon.svg" alt="" width={30} />
              </div>
              <div className="pl-2">
                <p className="text-xs leading-4 text-black">
                  {person.pay}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    ))}
    </>
  );
};

export default PersonGood;
