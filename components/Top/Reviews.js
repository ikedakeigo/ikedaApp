import React from "react";
import reviewsData from "../../data/reviews";

export default function Reviews() {
  return (
    <section>
      <div className="p-4 mb-32 bg-white box-sha shadow-lg">
        <h2 className="text-sm font-medium mb-4">新着口コミ</h2>
        <div className="">
          {reviewsData.map((review) => (
            <div className="w-[50%] mb-8" key={review.id}>
              <div className="flex items-center">
                <div className="mr-2 bg-gray-400 flex items-center rounded-[50%] w-[40px] h-[40px] justify-center ">
                  {review.name.slice(0, 1)}
                </div>
                <div className="dis_t-c ver-a_t">
                  <p className="fon-w_700 fon-s_14">{review.name}</p>
                  <p className="fon-s_12 col_bla08">{review.date}</p>
                </div>
              </div>
              <div className="pad-b_4">
                <p className="fon-s_14">{review.title}</p>
              </div>
              <div className="pad-b_4">
                <p className="fon-s_14">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default Reviews;
