import React from "react";
import userdata from "./users-data.js";
import "./styles.css";

export default function Listed() {
  const items = userdata.map((q, index) => (
    <CardItem key={index} name={q.name} location={q.location} car={q.car} />
  ));
  return <div className="users">{items}</div>;
}

function CardItem(Props) {
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>{Props.name}</p>
      <p>{Props.location}</p>
      <p>{Props.car}</p>
    </div>
  );
}
