import React from "react";

import cardStyle from "../scss/card.module.scss";
const Card = ({ data }) => {
  return (
    <div className={cardStyle["container"]}>
      {data.map((item) => {
        const { id, job, img, name, comment } = item;
        return (
          <div key={id} className={cardStyle["card"]}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="" />
            <div className={cardStyle["btn-container"]}>
              <button className={cardStyle["btn-container--small"]}>
                Small
              </button>
              <button className={cardStyle["btn-container--large"]}>
                Large
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
