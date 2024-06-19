import React from "react";
import "./Practice.css";

export function Practice() {
  return (
    <div className="components">
      <ItemWrap
        itemTitle="버그를 Java라 버그잡는 개리씨 키링"
        itemPrice="12500"
      />
      <ItemWrap />
    </div>
  );
}

function ItemWrap({ itemTitle, itemPrice }) {
  return (
    <div className="component-wrap">
      <div className="img-wrap item">
        <img src="./img/img01.png" alt="img" />
      </div>
      <div className="item-info">
        <p>{itemTitle}</p>
        <div className="img-wrap icon">
          <img src="" alt="" />
        </div>
      </div>
      <p className="item-info">
        {itemPrice}
        <span>원</span>
      </p>
    </div>
  );
}
