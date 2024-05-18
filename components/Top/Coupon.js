import React from "react";
import Link from "next/link";

const Coupon = () => {
  return (
    <section>
      <div className="p-4 mb-16 bg-white box-sha shadow-lg">
        <div className="flex items-center mb-8">
          <div className="w-[64px] mr-5">
            <img src="vercel.svg" alt="" />
          </div>
          <p className="font-bold text-lg	">
            アプリ限定クーポン！<br />
            今すぐダウンロード
          </p>
        </div>
        <Link href="#" className="inline-block w-full bg-black rounded-lg shadow-lg text-white font-bold text-center p-4 min-h-[56px] ">
          クーポンの詳細を見る
        </Link>
      </div>
    </section>
  );
};

export default Coupon;
