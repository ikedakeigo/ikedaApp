import React from "react";
import Header from "../../../components/layouts/header/Header";
import Content from "../../../components/layouts/content/Content";
import Footer from "../../../components/layouts/footer/Footer";
import { Slider } from "../../../components/molecules/Slider/Slider";
import PersonTitle from "./components/personDetail/PersonTitle";
import PersonGood from "./components/personDetail/PersonGood";
import PersonProf from "./components/personDetail/PersonProf";

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
        <div className="shadow p-8 mb-4">
          <div id="review">
            <h2 className="text-lg font-bold mt-0 mb-4">口コミ</h2>
            <div className="mx-auto w-full">
              <div className="">
                <input
                  id="store-review"
                  type="radio"
                  name="tab_item"
                />
                <label className="tab-item w-1/2 mr-4">
                  店舗の口コミ
                </label>
                <input
                  id="service-review"
                  type="radio"
                  name="tab_item"
                />
                <label className="tab-item w-1/2">
                  このサービスの口コミ
                </label>
              </div>
              <div className=" clear-both" id="store-review_content">
                <div className="pt-8">
                  <p className="mb-4">店舗の口コミ</p>

                  <div className="flex items-center mb-4">
                    <div className="clearfix mr-1">{/* 星 */}</div>
                    <p className="text-orange-400 font-bold text-lg">4.96</p>
                    <p className="ml-1">（口コミ64件）</p>
                  </div>
                  <ul className="list-none mb-8"></ul>

                  <div className="table pt-2">
                    <div className="table-cell pr-2">
                      <div className="bg-gray-800 text-white rounded-full text-lg h-10 leading-10 text-center w-10">
                        N
                      </div>
                    </div>
                    <div className="table-cell align-top">
                      <p className="font-bold text-sm">NAOさん</p>
                      <p className="text-gray-600 text-xs">2024年3月</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-sm">格安引越し</p>
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
                        息子の大学進学での引越しに家電搬送をお願いしましたが親切丁寧な対応でこちらでお願いできて良かったです。
                        1人暮らしで不安な中家電等で困った時は言ってくださいと言ってくれるだけでも息子にとっては安心でした。
                        優しいお声掛けの配慮等ありがたかったです。
                        また利用したいと思いました。
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* お店の情報 */}
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
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            サービス内容：洗濯機設置無料！3ドア/ドラム対応可！福岡佐賀◎
            <br />
            <a
              className="col_bla10 tex-d_u"
              data-test-id="contact-page-link"
              href="#"
            >
              このサービスについて質問する
            </a>
          </p>
        </div>

        {/* お店の情報 */}
        <div id="storecommit" className="shadow p-8 mb-4 text-blue-600">
          <h2 className="text-lg font-bold mt-0 mb-4">作業内容</h2>
          <p className="break-words overflow-hidden text-justify mb-4">
            部屋からの運び出し・積み込み・積み下ろし / 養生
          </p>
          <p className="text-sm">
            ※格安引越し のすべてのサービス共通の作業内容です。
          </p>
        </div>

        {/* お店の情報 */}
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
        <div
          id="shop-info"
          className="shadow p-8 mb-4"
          data-test-id="store-info"
          data-test-store-id="f8e70ffb-a344-4e7b-a80b-9a64969fff4e"
          data-test-store-code="498324893"
        >
          <h2 className="text-lg font-bold mt-0 mb-4">店舗について</h2>
          <div className="flex mb-8">
            <img
              className="rounded-full mr-4 w-18 h-18 border border-gray-400"
              src="//cdn-img.curama.jp/c/ir=auto,w=300,h=300,f=webp,a=2/original/store/498324893/39cf70c5-6dc6-4e22-b2ff-ed914a8a3f3f.png"
              alt="店長の写真"
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
            ＜古物商許可＞ 福岡県 公安委員会　第901111810010号
            <br />
            <br />
            ＜軽貨物＞ 福岡480れ5644
          </div>
        </div>

        {/* お店の情報 */}
        <div className="shadow-lg bg-white p-8 mb-4">
          <div className="px-4">
            <ul className="list-none mb-2">
              <li className="flex items-center border rounded px-4 mb-2 h-14 border-gray-400 bg-red-100">
                <span className="flex-shrink-0 block font-bold w-18">現住所：</span>
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
                <span className="flex-shrink-0 block font-bold w-18">荷物：</span>
                <a className="flex-grow h-full flex items-center text-gray-600 truncate cursor-pointer">
                  荷物を選択{" "}
                </a>
              </li>
              <li className="flex border rounded px-4 mb-2 h-14 border-gray-400 items-center">
                <span className="flex-shrink-0 block font-bold w-18">作業員：</span>
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
