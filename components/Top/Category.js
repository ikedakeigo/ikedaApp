import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import CategoryItem from "./CategoryItem";

export default function App() {
  const categories = [
    {
      label: "Category 1",
      title: "ハウスクリーニング",
      content: (
        <ul className="bg-gray-400 text-white">
          <li>家事代行・家政婦</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
        </ul>
      ),
    },
    {
      label: "Category 1",
      title: "ハウスクリーニング",
      content: (
        <ul className="bg-gray-400 text-white">
          <li>家事代行・家政婦</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
        </ul>
      ),
    },
    {
      label: "Category 1",
      title: "ハウスクリーニング",
      content: (
        <ul className="bg-gray-400 text-white">
          <li>家事代行・家政婦</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
        </ul>
      ),
    },
    {
      label: "Category 1",
      title: "ハウスクリーニング",
      content: (
        <ul className="bg-gray-400 text-white">
          <li>家事代行・家政婦</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
        </ul>
      ),
    },
    {
      label: "Category 1",
      title: "ハウスクリーニング",
      content: (
        <ul className="bg-gray-400 text-white">
          <li>家事代行・家政婦</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
        </ul>
      ),
    },
    {
      label: "Category 1",
      title: "ハウスクリーニング",
      content: (
        <ul className="bg-gray-400 text-white">
          <li>家事代行・家政婦</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
        </ul>
      ),
    },
    {
      label: "Category 1",
      title: "ハウスクリーニング",
      content: (
        <ul className="bg-gray-400 text-white">
          <li>家事代行・家政婦</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
        </ul>
      ),
    },
    {
      label: "Category 1",
      title: "ハウスクリーニング",
      content: (
        <ul className="bg-gray-400 text-white">
          <li>家事代行・家政婦</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
          <li>エアコンクリーニング</li>
        </ul>
      ),
    },
  ];

  return (
    <section>
      <div className="p-4 mb-16 bg-white box-sha shadow-lg">
        <h2 className="text-sm font-medium mb-4">カテゴリーから探す</h2>
        <Accordion>
          {categories.map((category, index) => (
            <AccordionItem
              key={index}
              title={category.title}
              label={category.label}
            >
              {category.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
