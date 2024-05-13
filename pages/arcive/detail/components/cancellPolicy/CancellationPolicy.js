import React from "react";

const CancellationPolicy = () => {
  return (
    <>
      <div id="attention" className="shadow p-8 mb-4">
        <h2 className="text-lg font-bold mt-0 mb-4">キャンセルポリシー</h2>
        <h3 className="mt-0 mb-4 text-base font-bold">キャンセル料金</h3>
        <table className="w-full mb-6">
          <tbody>
            <tr>
              <th className="w-1/2">作業日の3日前まで</th>
              <td>・・・</td>
              <td>予約金額の0%</td>
            </tr>
            <tr>
              <th className="w-1/2">作業日の前々日</th>
              <td>・・・</td>
              <td>予約金額の20%</td>
            </tr>
            <tr>
              <th className="w-1/2">作業日の前日</th>
              <td>・・・</td>
              <td>予約金額の30%</td>
            </tr>
            <tr>
              <th className="w-1/2">作業日当日</th>
              <td>・・・</td>
              <td>予約金額の50%</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-4">
          ※キャンセル料の対象には予約のキャンセル及びサービス提供予定日の変更も含みます。
        </p>
        <p>
          <a href="#" target="_blank" className="text-black underline">
            キャンセルポリシー
          </a>
        </p>
      </div>
    </>
  );
};

export default CancellationPolicy;
