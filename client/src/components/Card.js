import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h1>{props.data.name}</h1>
      <h2>{props.data.country}</h2>
      <p>Number of times searched: {props.data.searches}</p>
    </div>
  );
};

export default Card;
