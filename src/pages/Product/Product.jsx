import React from "react";
import "./Product.scss";

function Product() {
  const images= [
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg"
    , "https://www.mypokecard.com/en/Gallery/my/galery/LLTMnq94dp5.jpg"
  ]
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" />
          <img src={images[1]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Product;
