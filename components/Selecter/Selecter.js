import React from "react";
import selecterData from "../../data/selecter";

const Selecter = () => {
  return (
    <>
      <div className="pr-4 flex justify-end">
        <div className=" w-[160px]">
          <select
            id="sorting"
            className="p-4 text-base border-solid border-2 border-indigo-600"
          >
            {selecterData.map((selecter) => (
              <option
                value={selecter.value}
                data-url={selecter.url}
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
