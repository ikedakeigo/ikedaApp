import React from "react";
import "../../styles/globals.css";
import Headers from "../../components/layouts/header/Header";
import Footer from "../../components/layouts/footer/Footer";
import Selecter from "../../components/Selecter/Selecter";

const DetailPage = () => {
  return (
    <>
      <Headers />
      <section className="xl:w-[1280px] md:min-w-[640px] min-h-[100vh] mx-auto">
        <h1>カテゴリータイトル</h1>
        <div className=" gap-4">
          {/* コンポーネント */}
          <Selecter />

        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailPage;
