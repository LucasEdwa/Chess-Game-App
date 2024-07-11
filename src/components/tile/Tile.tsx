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
        {image && (
          <div
            className="chess-piece"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
      </div>
    );
  } else {
    return (
      <div className="tile white-tile">
        {" "}
        {image && (
          <div
            className="chess-piece"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
      </div>
    );
  }
}
