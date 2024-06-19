import React from "react";

export function Practice() {
  return (
    <>
      <ItemWrap
        itemInfo="버그를 Java라 버그잡는 개리씨 키링"
        itemPrice="12500"
      />
      <ItemWrap />
    </>
  );
}

function ItemWrap({ itemInfo, itemPrice }) {
  return (
    <div>
      <div>
        <img src="./img/img01.png" alt="img" />
      </div>
      <div>
        <p>{itemInfo}</p>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <p>
        {itemPrice}
        <span>원</span>
      </p>
    </div>
  );
}
