import React from "react";

export default function DifficultySelector({ setDifficulty }) {
  return (
    <div>
      <h3>Pilih Kesulitan:</h3>
      <button onClick={() => setDifficulty(4)}>Mudah</button>
      <button onClick={() => setDifficulty(6)}>Sedang</button>
      <button onClick={() => setDifficulty(8)}>Sulit</button>
    </div>
  );
}
