import React from "react";
import Item from "./item";

export default function List({ data }) {
  return (
    <ul className="item-wrapper">
      {data.map(row => (
        <Item row={row} key={row.userID} />
      ))}
    </ul>
  );
}
