import React from "react";
import Card from "./Card.js";

const CardList = props => {
  return (
    <section className="cardlist">
      {props.data.map(cv => {
        return <Card data={cv} key={cv.id} />;
      })}
    </section>
  );
};

export default CardList;
