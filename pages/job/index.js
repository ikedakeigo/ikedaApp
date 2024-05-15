import React, { useEffect, useState } from "react";
import axios from "axios";
import Headers from "../../components/layouts/header/Header";
import Footer from "../../components/layouts/footer/Footer";

import Selecter from "../../components/Selecter/Selecter";
import Person from "./components/person/Person";
import List from "../../components/molecules/list/List";
import Content from "../../components/layouts/content/Content";
import Path from "../../components/molecules/path/Path";

const Job = () => {
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
        // console.log(res.data.contents);
        console.log(Path);
      });
  }, []);
  return (
    <>
      <Headers />
      <Content>
        <h1>カテゴリータイトル</h1>
        <div className=" gap-4">
          {/* コンポーネント */}
          <Selecter />

          <List />
        </div>
      </Content>

      <Footer />
    </>
  );
};

export default Job;
