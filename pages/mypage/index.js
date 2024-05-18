import React from "react";
import Link from "next/link";
import Header from "../../components/layouts/header/Header";
import Content from "../../components/layouts/content/Content";
import Footer from "../../components/layouts/footer/Footer";

const index = () => {
  return (
    <>
      <Header />
      <Content>
        <div className="shadow mr-4 mb-4">
          <h1 className="text-lg font-bold pt-6 pr-4 pb-4 pl-4 mr-0">
            ユーザーさんのマイページ
          </h1>

          <ul className="w-full leading-tight">
            <Link
              href="/mypage/inbox/"
              id="message-mypage-item"
              className="relative  text-black"
            >
              <li className="text-base  pb-4 ml-8">メッセージ</li>
            </Link>
            <Link
              href="/mypage/reservations/"
              id="reservation-mypage-item"
              className="relative  text-black"
            >
              <li className="text-base  pb-4 ml-8">予約の管理</li>
            </Link>

            <Link
              href="/mypage/quotes/"
              id="order-mypage-item"
              className="relative  text-black"
            >
              <li className="text-base  pb-4 ml-8">見積の管理</li>
            </Link>
          </ul>
        </div>

        <div className="shadow mr-4 mb-4">
          <ul className="w-full leading-tight pt-8">
            <Link href="/mypage/account/" className="text-black">
              <li className="text-base mr-0 pb-4 ml-8">登録情報</li>
            </Link>

            <Link
              href="https://faq.curama.jp/"
              target="_blank"
              className="text-black"
            >
              <li className="text-base mr-0 pb-4 ml-8">ヘルプ</li>
            </Link>
          </ul>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default index;
// ユーザー情報を表示するページ
// ユーザー情報に紐づく求人情報を表示するページ
