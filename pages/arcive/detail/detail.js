import React from "react";
import Header from "../../../components/layouts/header/Header";
import Content from "../../../components/layouts/content/Content";
import Footer from "../../../components/layouts/footer/Footer";
import { Slider } from "../../../components/molecules/Slider/Slider";
import PersonTitle from "./components/personDetail/PersonTitle";
import PersonGood from "./components/personDetail/PersonGood";
import PersonProf from "./components/personDetail/PersonProf";
import PersonReview from "./components/personDetail/PersonReview";
import PersonServise from "./components/personDetail/personServise";
import PersonWorks from "./components/personDetail/PersonWorks";
import CancellationPolicy from "./components/cancellPolicy/CancellationPolicy";
import PersonShopInfo from "./components/personDetail/PersonShopInfo";
import Modal from "../../../components/molecules/modal/Modal";

const detail = () => {
  return (
    <>
      <Header />
      <Content>
        <Slider />

        <PersonTitle />

        <PersonGood />

        {/* 口コミ */}

        {/* プロフィール */}
        <PersonProf />

        {/* 口コミ */}
        <PersonReview />

        {/* お店の情報 */}
        <PersonServise />

        {/* 作業内容 */}
        <PersonWorks />

        {/* キャンセルポリシー */}
        <CancellationPolicy />

        {/* お店の情報 */}
        <PersonShopInfo />

        <Modal />
        {/* お店の情報 */}
        <div className="shadow-lg bg-white p-8 mb-4">
          <div className="px-4">
            <ul className="list-none mb-2">
              <li className="flex items-center border rounded px-4 mb-2 h-14 border-gray-400 bg-red-100">
                <span className="flex-shrink-0 block font-bold w-18">
                  現住所：
                </span>
                <div className="flex-grow h-full flex items-center text-gray-600 truncate cursor-pointer">
                  エリアを選択
                </div>
              </li>
              <li className="flex items-center border rounded px-4 mb-2 h-14 border-gray-400 bg-red-100">
                <span className="flex-shrink-0 block font-bold w-18">
                  引越し先：
                </span>
                <div className="flex-grow h-full flex items-center text-gray-600 truncate cursor-pointer">
                  エリアを選択
                </div>
              </li>
              <li className="flex items-center border rounded px-4 mb-2 h-14 border-gray-400 bg-red-100">
                <span className="flex-shrink-0 block font-bold w-18">
                  荷物：
                </span>
                <a className="flex-grow h-full flex items-center text-gray-600 truncate cursor-pointer">
                  荷物を選択{" "}
                </a>
              </li>
              <li className="flex border rounded px-4 mb-2 h-14 border-gray-400 items-center">
                <span className="flex-shrink-0 block font-bold w-18">
                  作業員：
                </span>
                <span className="block w-2/5 max-w-xs mr-2">
                  <button className="w-full h-9 border-none bg-gray-400 rounded-full text-sm text-gray-800">
                    2名
                  </button>
                </span>
                <span className="block w-2/5 max-w-xs mr-2">
                  <button className="w-full h-9 border-none bg-gray-400 rounded-full text-sm text-white bg-gray-800">
                    1名
                  </button>
                </span>
              </li>
              <li className="border-gray-400 border rounded mb-2">
                <a
                  className="border rounded flex p-4"
                  data-backdrop="true"
                  data-target="#calendarModal"
                  data-toggle="modal"
                >
                  <div className="flex-shrink-0 block font-bold leading-6 w-18 text-gray-800">
                    希望日:
                  </div>
                  <div className="overflow-hidden text-gray-600 block leading-6 w-full truncate">
                    引越し希望日を選択
                  </div>
                  <div className="inline-block w-6 h-6 ml-auto"></div>
                </a>
              </li>
            </ul>
            <div className="text-center pt-2">
              <button
                className="bg-orange-500 text-lg cursor-default"
                id="search-button"
                disabled
              >
                決定
              </button>
            </div>
          </div>
        </div>

        {/* お店の情報 */}
        <div className="shadow-md bg-white p-8 mb-4">
          <h2 className="text-lg font-bold mt-0 mb-4">この店舗のサービス</h2>
          <div id="service-other">
            <a
              className="flex w-full mb-8 last:mb-0 text-gray-800"
              href="/smartphone-setup/SER297809253/"
            >
              <div className="flex-none w-1/3">
                <div className="relative">
                  <img
                    className="w-full object-cover"
                    src="//cdn-img.curama.jp/c/ir=auto,w=202,h=150,f=webp,a=2/original/no_image.jpg"
                    alt="スマホの事なら何でもおまかせ！"
                  />
                </div>
              </div>
              <div className="flex-auto pl-2">
                <p className="text-sm mb-1">スマホ設定・サポート</p>
                <h3 className="text-base font-bold mb-1 leading-6">
                  スマホの事なら何でもおまかせ！
                </h3>
                <p className="text-3xl font-bold text-right">¥4,000</p>
              </div>
            </a>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default detail;
