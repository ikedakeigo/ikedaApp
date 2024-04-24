import React from "react";

function CategoryItem(props) {
  const data = props.list;
  return (
    <ul className="md:flex hidden flex-initial text-left">
      {data.map((value) => (
        <li key={value} className="p-4">
          <button className="font-bold">{value.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default CategoryItem;
