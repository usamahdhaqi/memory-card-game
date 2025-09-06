import React from "react";

export default function Card({ card, onClick }) {
  return (
    <div
      className={`card ${card.flipped ? "flipped" : ""}`}
      onClick={() => onClick(card)}
    >
      {card.flipped ? card.emoji : "❓"}
    </div>
  );
}
