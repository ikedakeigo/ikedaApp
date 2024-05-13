import React from "react";
import personData from "../../../../../data/person";
const PersonServise = () => {
  const filteredData = personData.filter((person) => person.id === 1);
  return (
    <>
      {filteredData.map((person) => (
        <div id="service-detail" className="shadow p-8 mb-4" key={person.id}>
          <h2 className="text-base font-bold mb-4">詳しいサービス内容</h2>

          <p className="text-sm">
            {person.serviceInfo}
            <a
              className="col_bla10 tex-d_u"
              data-test-id="contact-page-link"
              href="#"
            >
              このサービスについて質問する
            </a>
          </p>
        </div>
      ))}
    </>
  );
};

export default PersonServise;
