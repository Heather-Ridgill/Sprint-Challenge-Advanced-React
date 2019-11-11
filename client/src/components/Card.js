import React from "react";
import { Card, Image } from "semantic-ui-react";

const PlayerCard = props => {
  return (
    <Card centered={true}>
      {/* <div className="card"> */}
      <Card.Content>
        <Card.Header>
          <h1>{props.name}</h1>
        </Card.Header>
        <Card.Meta>
          <h2>{props.country}</h2>
        </Card.Meta>
        <Card.Description>
          <p>Number of times searched: {props.searches}</p>
        </Card.Description>
      </Card.Content>
      {/* </div> */}
    </Card>
  );
};

export default PlayerCard;
