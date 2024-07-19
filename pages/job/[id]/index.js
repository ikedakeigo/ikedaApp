import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../../../components/layouts/header/Header";
import Content from "../../../components/layouts/content/Content";
import Footer from "../../../components/layouts/footer/Footer";
import { Slider } from "../../../components/molecules/Slider/Slider";
import PersonTitle from "../components/personDetail/PersonTitle";
import PersonGood from "../components/personDetail/PersonGood";
import PersonProf from "../components/personDetail/PersonProf";
import PersonReview from "../components/personDetail/PersonReview";
import PersonServise from "../components/personDetail/PersonServise";
import PersonWorks from "../components/personDetail/PersonWorks";
import CancellationPolicy from "../components/cancellPolicy/CancellationPolicy";
import PersonShopInfo from "../components/personDetail/PersonShopInfo";
import Modal from "../../../components/molecules/modal/Modal";
import PersonOtherServise from "../components/personDetail/PersonOtherServise";

const Detail = () => {
  const [job, setJob] = useState();
  console.log(job);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady === false) return;

    const path = "https://rcpii68enc.microcms.io/api/v1/job/" + router.query.id; // urlのidを取得
    console.log(router.query.id);
    axios
      .get(path, {
        headers: {
          "X-MICROCMS-API-KEY": "cHQEHsrLS3LwCcqUG6oM6MPtlIt27DhqFhXD",
        },
      })
      .then((res) => {
        setJob(res.data);
      });
  }, [router]);

  if (job === undefined) return null;

  return (
    <>
      <Header />
      <Content>
        {/* 詳細情報をSliderに渡す */}
        <Slider list={job} />

        {/* タイトル */}
        {/* <PersonTitle /> */}

        <div className="shadow p-4 mb-4">
          <div className="flex justify-center relative mb-4">
            <div className="relative inline-block h-24 w-24">
              <picture>
                <img
                  className="rounded-full relative h-24 w-24"
                  src="/image/person/person.jpg"
                  height="100"
                  width="100"
                  alt=""
                />
              </picture>
            </div>
          </div>

          <h1 className="text-lg font-bold mt-0 mb-2">
            {/* {person.title} */}
            タイトル
          </h1>
          <p className="mb-2 overflow-hidden"></p>
          <p className="font-bold text-4xl" data-test-id="service-detail-price">
            {/* ¥{person.price} */}
            ¥1000
          </p>
        </div>

        {/* いいね */}

        {/* <PersonGood /> */}
        <div className="shadow pt-8 pr-4 pb-2 pl-4 mb-4">
          <div className="flex justify-center pb-4">
            <div className="mr-2">
              <div className="flex">{/* 星 */}</div>
              <a className="text-xs text-black underline" href="#review">
                口コミ <span>100</span>件
              </a>
            </div>
            <p className="text-7.5 font-bold leading-6 text-orange-600">
              {/* {person.starCount} */}
              4.5
            </p>
          </div>

          <div className="flex justify-center pb-4">
            <div className="pr-4 pl-4 text-center" id="smile">
              <p className="text-xs">返答の速さ</p>
              <img src="/image/icon/good_icon.svg" alt="" width={30} />
            </div>
            <div className="pr-4 pl-4 text-center">
              <p className="text-xs">作業実績</p>
              {/* <p>{person.worksCount}</p> */}
              <p>100</p>
            </div>
          </div>

          <div className="flex justify-between flex-wrap">
            <ul className="bg-slate-200 rounded m-list-none w-48% mb-2">
              <li className="p-2 flex items-center h-full">
                <div className="h-6 w-6">
                  <img src="/image/icon/cre_icon.svg" alt="" width={30} />
                </div>
                <div className="pl-2">
                  {/* <p className="text-xs leading-4 text-black">{person.pay}</p> */}
                  <p className="text-xs leading-4 text-black">
                    オンラインカード決済可
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* プロフィール */}
        {/* <PersonProf /> */}
        <div className="shadow p-8 mb-4">
          <div className="flex">
            <img
            className="rounded-full mr-4 w-18 h-18 border border-gray-400 lazyload"
            src="/image/person/person.jpg"
            width="70"
            height="70"
            alt=""
          />
            <div className="overflow-hidden">
              <p>店長：野田堅ニ</p>
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

        {/* 口コミ */}
        {/* <PersonReview /> */}
        <div className="shadow p-8 mb-4">
          <div id="review">
            <h2 className="text-lg font-bold mt-0 mb-4">口コミ</h2>
            <div className="mx-auto w-full">
              <div className="">
                <input id="store-review" type="radio" name="tab_item" />
                <label className="tab-item w-1/2 mr-4">店舗の口コミ</label>
                <input id="service-review" type="radio" name="tab_item" />
                <label className="tab-item w-1/2">このサービスの口コミ</label>
              </div>
              <div className=" clear-both" id="store-review_content">
                <div className="pt-8">
                  <p className="mb-4">店舗の口コミ</p>

                  <div className="flex items-center mb-4">
                    <div className="clearfix mr-1">{/* 星 */}</div>
                    <p className="text-orange-400 font-bold text-lg">
                      {/* {person.starCount} */}5
                    </p>
                    {/* <p className="ml-1">（口コミ{person.reviewsCount}件）</p> */}
                    <p className="ml-1">（口コミ50件）</p>
                  </div>
                  <ul className="list-none mb-8"></ul>

                  <div className="table pt-2">
                    <div className="table-cell pr-2">
                      <div className="bg-gray-800 text-white rounded-full text-lg h-10 leading-10 text-center w-10">
                        {/* {review.initial} */}P
                      </div>
                    </div>
                    <div className="table-cell align-top">
                      <p className="font-bold text-sm">ぺこさん</p>
                      <p className="text-gray-600 text-xs">2024年4月</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-sm">
                      エアコンクリーニング・壁掛けタイプ
                    </p>
                  </div>
                  <div className="pt-3">
                    <div className="flex items-center mb-1">
                      <div className="clearfix mr-1">{/* 星 */}</div>
                      <p className="text-sm">5</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="wor-b_b-w">
                      <a className="" href="#">
                        とても丁寧に対応していただきました。またお願いしたいです。
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* お店の情報 */}
        {/* <PersonServise /> */}
        <div id="service-detail" className="shadow p-8 mb-4">
          <h2 className="text-base font-bold mb-4">詳しいサービス内容</h2>

          <p className="text-sm">
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
          </p>
          <a
            className="col_bla10 tex-d_u text-blue-600"
            data-test-id="contact-page-link"
            href="#"
          >
            このサービスについて質問する
          </a>
        </div>

        {/* 作業内容 */}
        {/* <PersonWorks /> */}
        <div id="storecommit" className="shadow p-8 mb-4 text-blue-600">
          <h2 className="text-lg font-bold mt-0 mb-4">作業内容</h2>
          <p className="break-words overflow-hidden text-justify mb-4">
            部屋からの運び出し・積み込み・積み下ろし / 養生
          </p>
          <p className="text-sm">
            ※格安引越し のすべてのサービス共通の作業内容です。
          </p>
        </div>

        {/* キャンセルポリシー */}
        {/* <CancellationPolicy /> */}
        <div id="attention" className="shadow p-8 mb-4">
          <h2 className="text-lg font-bold mt-0 mb-4">キャンセルポリシー</h2>
          <h3 className="mt-0 mb-4 text-base font-bold">キャンセル料金</h3>
          <table className="w-full mb-6">
            <tbody>
              <tr>
                <th className="w-1/2">作業日の3日前まで</th>
                <td>・・・</td>
                <td>予約金額の0%</td>
              </tr>
              <tr>
                <th className="w-1/2">作業日の前々日</th>
                <td>・・・</td>
                <td>予約金額の20%</td>
              </tr>
              <tr>
                <th className="w-1/2">作業日の前日</th>
                <td>・・・</td>
                <td>予約金額の30%</td>
              </tr>
              <tr>
                <th className="w-1/2">作業日当日</th>
                <td>・・・</td>
                <td>予約金額の50%</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4">
            ※キャンセル料の対象には予約のキャンセル及びサービス提供予定日の変更も含みます。
          </p>
          <p>
            <a href="#" target="_blank" className="text-black underline">
              キャンセルポリシー
            </a>
          </p>
        </div>

        {/* お店の情報 */}
        {/* <PersonShopInfo /> */}
        <div
          id="shop-info"
          className="shadow p-8 mb-4"
          data-test-id="store-info"
          data-test-store-id="f8e70ffb-a344-4e7b-a80b-9a64969fff4e"
          data-test-store-code="498324893"
        >
          <h2 className="text-lg font-bold mt-0 mb-4">店舗について</h2>
          <div className="sm:flex block mb-8">
            <img
              className="rounded-full md:mr-4 mx-auto w-80 h-80 border border-gray-400"
              src="/image/person/person.jpg"
              alt=""
            />
            <div>
              <p className="mb-2">店長：野田堅ニ</p>
              <p>
                【福岡市発】【対応地域外は要相談】【緊急・深夜もお問合せ大歓迎！！】
              </p>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-0 mb-4">所在地</h3>
          <div className="pb-8">
            〒815-0042
            <br />
            福岡県福岡市南区若久6-13-1セジュール若久103
          </div>
          <h3 className="text-lg font-bold mt-0 mb-4">営業時間</h3>
          <div className="pb-8">
            24h 営業中
            <br />
            緊急の場合はお電話ください。
          </div>
          <h3 className="text-lg font-bold mt-0 mb-4">定休日</h3>
          <div className="pb-8">年中無休</div>
          <h3 className="text-lg font-bold mt-0 mb-4">対応地域</h3>
          <div className="pb-4">
            <p className="mb-0">＜九州・沖縄＞</p>
            <p className="font-bold mb-1">福岡県</p>
            <ul className="flex flex-wrap p-0 mt-0 mb-4 list-none">
              <li className="inline-block">福岡市東区</li>
            </ul>
            <p className="font-bold mb-1">佐賀県</p>
            <ul className="flex flex-wrap p-0 mt-0 mb-4 list-none">
              <li className="inline-block">鳥栖市</li>
            </ul>
          </div>
          <h3 className="text-lg font-bold mt-0 mb-4">資格・許認可</h3>
          <div className="pb-8">
            古物商許可 福岡県 公安委員会 第901111810010号
            <br />
            <br />
            軽貨物 福岡480れ5644
          </div>
        </div>

        {/* お店の情報 */}
        <Modal />

        {/* お店の情報 */}
        {/* <PersonOtherServise /> */}
        <div className="shadow-md bg-white p-8 mb-4">
          <h2 className="text-lg font-bold mt-0 mb-4">この店舗のサービス</h2>
          <div id="service-other">
            <a className="flex w-full mb-8 last:mb-0 text-gray-800" href="#">
              <div className="flex-none w-1/3">
                <div className="relative">
                  {/* <img
                    className="w-full object-cover"
                    src="/image/person-service/person-service1.jpg"
                    alt=""
                  /> */}
                </div>
              </div>
              <div className="flex-auto pl-2">
                <p className="text-sm mb-1">引越し</p>
                <h3 className="text-base font-bold mb-1 leading-6">
                  引越しのお手伝いをします。
                </h3>
                <p className="text-3xl font-bold text-right">¥9,200</p>
              </div>
            </a>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Detail;
