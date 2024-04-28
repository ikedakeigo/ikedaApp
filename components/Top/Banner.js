import React from "react";
import bannerData from "../../data/banner";

const Banner = () => {
  return (
    <section>
      {bannerData.map((banner) => (
        <div className="p-4" key={banner.id}>
          <a href={banner.href} className="block w-full flex justify-center">
            <picture>
              <img
                src={banner.image}
                alt={banner.alt}
                className="rounded-lg  shadow-sm"
              />
            </picture>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Banner;
