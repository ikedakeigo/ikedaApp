import React from "react";
import Link from "next/link";
import bannerData from "../../data/banner";

const Banner = () => {
  return (
    <section>
      {bannerData.map((banner) => (
        <div className="p-4" key={banner.id}>
          <Link href={banner.href} className="block w-full flex justify-center">
            <picture>
              <img
                src={banner.image}
                alt={banner.alt}
                className="rounded-lg  shadow-sm"
              />
            </picture>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Banner;
