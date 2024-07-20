import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import axios from "axios";
import { useEffect, useState } from "react";

export const Slider = ({ list }: { list: any }) => {
  return (
    <>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          type: "loop", // ループさせる
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
        }}
      >
        {list.slider.map((item: any) => (
          <SplideSlide key={item.id}>
            <img
              className="slide-img"
              src={item.url}
              alt={list.title}
            />
          </SplideSlide>
        ))}
      </Splide>

      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
