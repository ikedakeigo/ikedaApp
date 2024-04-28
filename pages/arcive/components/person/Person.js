import React from "react";

const Person = () => {
  return (
    <>
      <a
        className="col_bla10 dis_b pad-t_16 pad-b_16"
        href="/moving/SER305214708/"
      >
        <div className="mar-t_-16">
          <span className="bor_1_ora10 col_ora10 bor-r_4 dis_i-b fon-s_12 mar-b_4 pad-r_4 pad-l_4">
            1位
          </span>
        </div>

        <div className="flex justify-center">
          <div className="dis_t-c wid_30p">
            <div className="pos_r">
              <img
                className="rounded-full"
                src="//image.curama.jp/i/300x300/store/990726472/ba7c65c7-2f21-437c-9c5d-96eecf68d1ac.jpg"
                width="152"
                height="152"
                alt="【単身引越し格安便】軽トラ1台分は同一料金、ハンガーボックス無料"
              />
            </div>
          </div>
          <div className="pl-3">
            <div className="flex mb-2">
              <div className="m_clearfix star-rate star-rate5">
                {/* 評価 */}
              </div>
              <p className="text-lg	 font-bold">4.97</p>
              <p className="text-base">(340)</p>
            </div>

            <h3 className="font-bold text-base mb-1">
              【単身引越し格安便】軽トラ1台分は同一料金、ハンガーボックス無料
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-xs	 leading-4 text-slate-400	">福岡県</p>
            </div>
            <p className="text-right text-2xl">¥13,400</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Person;
