import React from "react";
import Headers from "../components/layouts/header/Header";
import "../styles/globals.css";
import Footer from "../components/layouts/footer/Footer";
import TopMv from "../components/Top/TopMv";
import Coupon from "../components/Top/Coupon";
import Recommend from "../components/Top/Recommend";
import Popular from "../components/Top/Popular";
import Banner from "../components/Top/Banner";
import Category from "../components/Top/Category";
import Reviews from "../components/Top/Reviews";

export default function App() {
  return (
    <>
      <Headers />
      <section className="xl:w-[1280px] md:min-w-[640px] min-h-[100vh] mx-auto">
        <TopMv />
        <Coupon />
        <Recommend />
        <Popular />
        <Banner />
        <Category />
        <Reviews />
      </section>
      <Footer />
    </>
  );
}
