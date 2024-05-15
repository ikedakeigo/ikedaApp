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
      { /* 詳細情報をSliderに渡す */}
        <Slider list={job} />

        {/* タイトル */}
        <PersonTitle />

        {/* いいね */}

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

export default Detail;
