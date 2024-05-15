import React from "react";
import personData from "../../../../data/person";

const PersonTitle = () => {
  const filteredData = personData.filter((person) => person.id === 1);

  return (
    <>
      {filteredData.map((person) => (
        <div className="shadow p-4 mb-4" key={person.id}>
          <div className="flex justify-center relative mb-4">
            <div className="relative inline-block h-24 w-24">
              <picture>
                <img
                  className="rounded-full relative h-24 w-24"
                  src={person.imgLogo}
                  height="100"
                  width="100"
                  alt={person.alt}
                />
              </picture>
            </div>
          </div>

          <h1 className="text-lg font-bold mt-0 mb-2">
            {person.title}
          </h1>
          <p className="mb-2 overflow-hidden"></p>
          <p className="font-bold text-4xl" data-test-id="service-detail-price">
            ¥{person.price}
          </p>
        </div>
      ))}
    </>
  );
};

export default PersonTitle;
