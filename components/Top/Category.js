import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import CategoryItem from "./CategoryItem";

export default function App() {
  const categories = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
          {categories.map((category) => (
            <AccordionItem
            className="p-4"
              key={category.id}
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
