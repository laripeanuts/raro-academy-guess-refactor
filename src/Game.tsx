import React from "react";
import "./game.css";
import { BoardHeader } from "./components/BoardHeader";
import { BoardBody } from "./components/BoardBody";
import { GameForm } from "./components/GameForm";
import { GameOverPanel } from "./components/GameOverPanel";
import { WaitingPanel } from "./components/WaitingPanel";
import { IsLessThanPanel } from "./components/IsLessThanPanel";
import { IsGreaterThanPanel } from "./components/IsGreaterThanPanel";
import { WonPanel } from "./components/WonPanel";

export function Game() {
  const [ gameState, setGameState ] = React.useState(newGame(10));

  function newGame(tries: number) {
    return {
      status: "NEW_GAME",
      number: Math.floor(Math.random() * 100) + 1,
      remainingGuesses: tries,
      maxTries: tries,
    };
  }

  function restart() {
    setGameState(newGame(10));
  }

  const guess = (number: number) => {
    let remaining = gameState.remainingGuesses - 1;

    if (gameState.number === number && gameState.status !== "GAME_OVER") {
      setGameState({
        ...gameState,
        status: "WON",
        remainingGuesses: remaining,
      });
    } else {
      if (remaining <= 0) {
        setGameState({
          ...gameState,
          status: "GAME_OVER",
          remainingGuesses: remaining,
        });
      } else {
        if (gameState.number > number) {
          setGameState({
            ...gameState,
            status: "IS_GREATER_THAN",
            remainingGuesses: remaining,
          });
        } else {
          setGameState({
            ...gameState,
            status: "IS_LESS_THAN",
            remainingGuesses: remaining,
          });
        }
      }
    }
  };

  const allowNewGame = () => gameState.status === "GAME_OVER";

  return (
    <div className="m-16">

      <BoardHeader 
        allowNewGame={allowNewGame}
        restart={restart} />
      <BoardBody>
        <GameForm
          guess={guess}
          step={gameState.maxTries - gameState.remainingGuesses + 1}
          max={gameState.maxTries}
        />
        {
          {
            WAITING: <WaitingPanel />,
            NEW_GAME: <WaitingPanel />,
            IS_GREATER_THAN: <IsGreaterThanPanel />,
            IS_LESS_THAN: <IsLessThanPanel />,
            WON: <WonPanel />,
            GAME_OVER: <GameOverPanel />,
          }[gameState.status]
        }
      </BoardBody>
    </div>
  );
}
