import React from "react";
import personData from "../../../../data/person";

const PersonWorks = () => {
  const filteredData = personData.filter((person) => person.id === 1);
  return (
    <>
      {filteredData.map((person) => (
        <div id="storecommit" className="shadow p-8 mb-4 text-blue-600" key={person.id}>
          <h2 className="text-lg font-bold mt-0 mb-4">作業内容</h2>
          <p className="break-words overflow-hidden text-justify mb-4">
            {person.serviceWorks}
          </p>
          <p className="text-sm">
            {person.serviceWorksInfo}
          </p>
        </div>
      ))}
    </>
  );
};

export default PersonWorks;
