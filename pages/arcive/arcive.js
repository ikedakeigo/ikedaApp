import React from "react";
import Headers from "../../components/layouts/header/Header";
import Footer from "../../components/layouts/footer/Footer";
import Selecter from "../../components/Selecter/Selecter";
import Person from "./components/person/Person";
import Content from "../../components/layouts/content/Content";

const arcive = () => {
  return (
    <>
      <Headers />
      <Content>
        <h1>カテゴリータイトル</h1>
        <div className=" gap-4">
          {/* コンポーネント */}
          <Selecter />
          <Person />
        </div>
      </Content>

      <Footer />
    </>
  );
};

export default arcive;
