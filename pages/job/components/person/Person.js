import React from "react";
import personData from "../../../../data/person";

const Person = () => {
  return (
    <>
      {personData.map((person) => (
        <a
          className="col_bla10 dis_b pad-t_16 pad-b_16"
          href={person.href}
          key={person.id}
        >
          <div className="mar-t_-16">
            <span className="bor_1_ora10 col_ora10 bor-r_4 dis_i-b fon-s_12 mar-b_4 pad-r_4 pad-l_4">
              {person.ranking}位
            </span>
          </div>

          <div className="flex justify-center">
            <div className="dis_t-c wid_30p">
              <div className="pos_r">
                <img
                  className="rounded-full"
                  src={person.imgLogo}
                  width="152"
                  height="152"
                  alt={person.alt}
                />
              </div>
            </div>
            <div className="pl-3">
              <div className="flex mb-2">
                <div className="m_clearfix star-rate star-rate5">
                  {/* 評価 */}
                </div>
                <p className="text-lg	 font-bold">{person.starCount}</p>
                <p className="text-base">({person.reviewsCount})</p>
              </div>

              <h3 className="font-bold text-base mb-1">{person.title}</h3>
              <div className="flex flex-col gap-2">
                <p className="text-xs	 leading-4 text-slate-400	">
                  {person.prefecture}
                </p>
              </div>
              <p className="text-right text-2xl">¥{person.price}</p>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default Person;
