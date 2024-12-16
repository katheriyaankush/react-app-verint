import React from "react";
import { StoreItem } from "../../types/types";
import "./ProductCard.css";

const ProductCard: React.FC<{
  item: StoreItem;
  handleBuy: (item: StoreItem) => void;
}> = React.memo(({ item, handleBuy }) => (
  <div key={item.id} className="product-card">
    <div>
      <img src={item.image} alt={item.name} />
    </div>
    <div className="product-details">
      <div className="product-name">
        <h2>{item.name}</h2>
      </div>
      <p className="product-bold">Suggested Price </p>
      <p className="product-suggest-price"> {item.suggestedPrice} Rs</p>
      <p className="product-bold">Actual Price </p>
      <div className="product-actual-div">
        <p className="product-actual-price"> {item.actualPrice} Rs </p>
        <p className="product-offer"> ({item.discount}% off)</p>
      </div>
      <p>{item.description}</p>
      <button onClick={() => handleBuy(item)}>Buy Now</button>
    </div>
  </div>
));

export default ProductCard;
