import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";
import Header from "../../../components/layouts/header/Header";
import Content from "../../../components/layouts/content/Content";
import Footer from "../../../components/layouts/footer/Footer";

const index = () => {
  return (
    <>
      <Header />
      <Content>
      <div className="shadow pb-2 mb-4">
          <div className="flex pt-6 pr-4 pb-4 pl-4">
            <h1 className="text-lg font-bold pt-6 pr-4 pb-4 pl-4 mr-0">
              予約の管理
            </h1>
          </div>
          <div className="pt-3 flex justify-center">
            <Pagination
              className=""
              isDisabled
              color="primary"
              total={10}
              initialPage={1}
            />
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default index;
