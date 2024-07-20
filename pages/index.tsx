import React from "react";
import Headers from "../components/layouts/header/Header";
import Footer from "../components/layouts/footer/Footer";
import TopMv from "../components/Top/TopMv";
import Coupon from "../components/Top/Coupon";
import Recommend from "../components/Top/Recommend";
import Popular from "../components/Top/Popular";
import Banner from "../components/Top/Banner";
import Category from "../components/Top/Category";
import Reviews from "../components/Top/Reviews";
import Content from "../components/layouts/content/Content";

export default function App() {
  return (
    <>
      <Headers />

      <Content>
        <TopMv />
        <Coupon />
        <Recommend />
        <Popular />
        <Banner />
        <Category />
        <Reviews />
      </Content>

      <Footer />
    </>
  );
}
