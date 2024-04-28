import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import categoriesData from "../../data/categories";

export default function App() {
  return (
    <section>
      <div className="p-4 mb-16 bg-white box-sha shadow-lg">
        <h2 className="text-sm font-medium mb-4">カテゴリーから探す</h2>
        <Accordion>
          {categoriesData.map((category) => (
            <AccordionItem
              className="p-4"
              key={category.id}
              title={category.title}
              label={category.label}
            >
              <ul className="bg-gray-400 text-white">
                {category.content.map((contentItem) => (
                  <li key={contentItem.title}>
                    {contentItem.title}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
