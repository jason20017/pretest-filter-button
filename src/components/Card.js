import React from "react";
import { CardData } from "./CardData";
const Card = () => {
  return (
    <div className="cards-container">
      {CardData.map((item, index) => {
        return (
          <div className="card-body" key={index}>
            <img className="card-image" src={item.image} alt="" />
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
