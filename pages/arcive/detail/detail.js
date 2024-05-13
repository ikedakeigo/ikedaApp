import React from "react";
import Header from "../../../components/layouts/header/Header";
import Content from "../../../components/layouts/content/Content";
import Footer from "../../../components/layouts/footer/Footer";
import { Slider } from "../../../components/molecules/Slider/Slider";
import PersonTitle from "./components/personDetail/PersonTitle";
import PersonGood from "./components/personDetail/PersonGood";
import PersonProf from "./components/personDetail/PersonProf";
import PersonReview from "./components/personDetail/PersonReview";
import PersonServise from "./components/personDetail/PersonServise";
import PersonWorks from "./components/personDetail/PersonWorks";
import CancellationPolicy from "./components/cancellPolicy/CancellationPolicy";
import PersonShopInfo from "./components/personDetail/PersonShopInfo";
import Modal from "../../../components/molecules/modal/Modal";
import PersonOtherServise from "./components/personDetail/PersonOtherServise";

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

        {/* お店の情報 */}
        <Modal />

        {/* お店の情報 */}
        <PersonOtherServise />
      </Content>
      <Footer />
    </>
  );
};

export default detail;
