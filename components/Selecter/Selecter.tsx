import React from "react";
import selecterData from "../../data/selecter";

type Selecter = {
    value: string
    dataUrl: string
    title: string
}

const Selecter = () => {
  return (
    <>
      <div className="pr-4 flex justify-end">
        <div className=" w-[160px]">
          <select
            id="sorting"
            className="p-4 text-base border-solid border-2 border-indigo-600"
          >
            {selecterData.map((selecter: Selecter) => (
              <option
                value={selecter.value}
                data-url={selecter.dataUrl}
                key={selecter.value}
              >
                {selecter.title}
              </option>

            ))}

          </select>
        </div>
      </div>
    </>
  );
};

export default Selecter;
