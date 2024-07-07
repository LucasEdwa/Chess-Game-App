import React from "react";
import "./Tile.css";

interface props {
  image: string;
  number: number;
}

export default function Tile({ number, image }: props) {
  if (number % 2 === 0) {
    return (
      <div className="tile black-tile">
        <img className="chess-piece-img" src={image} />
      </div>
    );
  } else {
    return (
      <div className="tile white-tile">
        {" "}
        <img className="chess-piece-img" src={image} />
      </div>
    );
  }
}
