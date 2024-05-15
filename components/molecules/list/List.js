// import { headers } from "next/headers";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rcpii68enc.microcms.io/api/v1/job", {
        headers: {
          "X-MICROCMS-API-KEY": "cHQEHsrLS3LwCcqUG6oM6MPtlIt27DhqFhXD",
        },
      })
      .then((res) => {
        setList(res.data.contents);
      });
  }, []);
  // nextLink /job/contents.id
  return (
    <>
      {list.map((item) => (
        <Link
          className="col_bla10 dis_b pad-t_16 pad-b_16"
          href={`/job/${item.id}`}
          key={item.id}
        >
          {console.log(item)}
          <div className="mar-t_-16">
            <span className="bor_1_ora10 col_ora10 bor-r_4 dis_i-b fon-s_12 mar-b_4 pad-r_4 pad-l_4">
              {item.ranking}位
            </span>
          </div>

          <div className="flex justify-center">
            <div className="dis_t-c wid_30p">
              <div className="pos_r">
                {item.image === undefined ? (
                  <img
                    className="rounded-full"
                    src="https://placehold.jp/150x150.png"
                    width="152"
                    height="152"
                    alt={item.alt}
                  />
                ) : (
                  <img
                    className="rounded-full"
                    src={item.image.url}
                    width="152"
                    height="152"
                    alt={item.alt}
                  />
                )}
              </div>
            </div>
            <div className="pl-3">
              <div className="flex mb-2">
                <div className="m_clearfix star-rate star-rate5">
                  {/* 評価 */}
                </div>
                <p className="text-lg	 font-bold">{item.starCount}</p>
                <p className="text-base">({item.reviewsCount})</p>
              </div>

              <h3 className="font-bold text-base mb-1">{item.title}</h3>
              <div className="flex flex-col gap-2">
                <p className="text-xs	 leading-4 text-slate-400	">
                  {item.prefecture}
                </p>
              </div>
              <p className="text-right text-2xl">¥{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default List;
