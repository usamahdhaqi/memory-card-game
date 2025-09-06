import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import DifficultySelector from "./components/DifficultySelector";
import Confetti from "./components/Confetti";

const EMOJIS = ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼"];

function App() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Timer
  useEffect(() => {
    let timer;
    if (difficulty && cards.length > 0 && !gameOver) {
      timer = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [difficulty, cards, gameOver]);  

  // Setup cards ketika pilih difficulty
  useEffect(() => {
    if (difficulty) {
      const chosen = EMOJIS.slice(0, difficulty);
      const shuffled = [...chosen, ...chosen]
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));
      setCards(shuffled);
      setScore(0);
      setTime(0);
    }
  }, [difficulty]);

  // Check match
  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.emoji === secondCard.emoji) {
        setCards(prev =>
          prev.map(c => (c.emoji === firstCard.emoji ? { ...c, matched: true } : c))
        );
        setScore(s => s + 10);
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prev =>
            prev.map(c =>
              c.id === firstCard.id || c.id === secondCard.id ? { ...c, flipped: false } : c
            )
          );
          resetTurn();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  const handleClick = (card) => {
    if (disabled || card.flipped || card.matched) return;
    setCards(prev => prev.map(c => (c.id === card.id ? { ...c, flipped: true } : c)));
    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }
  };

  useEffect(() => {
    if (difficulty && cards.length > 0 && cards.every(c => c.matched)) {
      setGameOver(true);
    }
  }, [cards, difficulty]);  

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const resetGame = () => {
    setDifficulty(null);
    setCards([]);
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
    setScore(0);
    setTime(0);
    setGameOver(false);
  };  

  return (
    <div>
      <h1>🎴 Memory Card Game</h1>
      {gameOver && <Confetti />}
      {!difficulty ? (
        <DifficultySelector setDifficulty={setDifficulty} />
      ) : (
        <>
          <p>⏱️ Waktu: {time}s | ⭐ Skor: {score}</p>

          {gameOver ? (
            <div>
              <h2>🎉 Selamat! Kamu berhasil menyelesaikan game 🎉</h2>
              <p>Total Waktu: {time}s | Skor: {score}</p>
              <button onClick={resetGame}>🔄 Main Lagi</button>
            </div>
          ) : (
            <div
              className="game-board"
              style={{
                gridTemplateColumns: `repeat(${difficulty}, 1fr)`
              }}
            >
              {cards.map(card => (
                <Card key={card.id} card={card} onClick={handleClick} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
