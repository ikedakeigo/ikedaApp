import React from 'react'
import reviewData from "../../../../../data/reviews";

const PersonReview = () => {
  const filteredData = reviewData.filter((person) => person.id === 1);

  return (
    <>
    {filteredData.map((person) => (
      <div className="shadow p-8 mb-4" key={person.id}>
          <div id="review">
            <h2 className="text-lg font-bold mt-0 mb-4">口コミ</h2>
            <div className="mx-auto w-full">
              <div className="">
                <input
                  id="store-review"
                  type="radio"
                  name="tab_item"
                />
                <label className="tab-item w-1/2 mr-4">
                  店舗の口コミ
                </label>
                <input
                  id="service-review"
                  type="radio"
                  name="tab_item"
                />
                <label className="tab-item w-1/2">
                  このサービスの口コミ
                </label>
              </div>
              <div className=" clear-both" id="store-review_content">
                <div className="pt-8">
                  <p className="mb-4">店舗の口コミ</p>

                  <div className="flex items-center mb-4">
                    <div className="clearfix mr-1">{/* 星 */}</div>
                    <p className="text-orange-400 font-bold text-lg">
                      {person.starCount}
                    </p>
                    <p className="ml-1">（口コミ{person.reviewsCount}件）</p>
                  </div>
                  <ul className="list-none mb-8"></ul>

                  <div className="table pt-2">
                    <div className="table-cell pr-2">
                      <div className="bg-gray-800 text-white rounded-full text-lg h-10 leading-10 text-center w-10">
                        {person.initial}
                      </div>
                    </div>
                    <div className="table-cell align-top">
                      <p className="font-bold text-sm">NAOさん</p>
                      <p className="text-gray-600 text-xs">2024年3月</p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-sm">格安引越し</p>
                  </div>
                  <div className="pt-3">
                    <div className="flex items-center mb-1">
                      <div className="clearfix mr-1">{/* 星 */}</div>
                      <p className="text-sm">5</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="wor-b_b-w">
                      <a className="" href="#">
                        息子の大学進学での引越しに家電搬送をお願いしましたが親切丁寧な対応でこちらでお願いできて良かったです。
                        1人暮らしで不安な中家電等で困った時は言ってくださいと言ってくれるだけでも息子にとっては安心でした。
                        優しいお声掛けの配慮等ありがたかったです。
                        また利用したいと思いました。
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    ))}

    </>
  )
}

export default PersonReview
