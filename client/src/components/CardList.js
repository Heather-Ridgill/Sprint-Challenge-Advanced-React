import React from "react";
import Card from "./Card.js";

const CardList = ({ players, images }) => {
  return (
    <div>
      {players.map(player => (
        <Card
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}
        />
      ))}
    </div>
  );
};

export default CardList;
