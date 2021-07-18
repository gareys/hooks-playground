import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Play,
  Location,
  INITIAL_BOARD_STATE,
  WINNING_COMBOS,
} from './constants';

export const TicTacToe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [boardState, setBoardState] = useState<Play[]>(INITIAL_BOARD_STATE);
  const [currentPlay, setCurrentPlay] = useState<Play>('X');
  const [winner, setWinner] = useState<
    { play: Play; location: Location } | undefined
  >();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (winner && canvas) {
      const start = WINNING_COMBOS[winner.location].coords[0] as [
        number,
        number
      ];
      const finish = WINNING_COMBOS[winner.location].coords[1] as [
        number,
        number
      ];
      const ctx = canvas.getContext('2d');
      ctx!.strokeStyle = 'red';
      ctx!.lineWidth = 3;
      ctx!.beginPath();
      ctx!.moveTo(...start);
      ctx!.lineTo(...finish);
      ctx!.stroke();
    }
  }, [winner]);

  const calculateBoardState = (i: number, play: Play) => {
    if (winner) return;
    const boardBefore = boardState.slice(0, i);
    const boardAfter = boardState.slice(i + 1);
    const newBoard = [...boardBefore, play, ...boardAfter];
    const winningMove = calculateWinner(newBoard, play);
    if (winningMove) {
      setWinner(winningMove);
    }
    setBoardState(newBoard);
    setCurrentPlay((prevPlay) => (prevPlay === 'X' ? 'O' : 'X'));
  };

  const calculateWinner = (board: Play[], play: Play) => {
    for (const [location, { cells }] of Object.entries(
      WINNING_COMBOS
    ) as unknown as Array<[Location, { cells: number[] }]>) {
      if (cells.every((cell) => board[cell] === play)) {
        return { play, location };
      }
    }
  };

  const reset = () => {
    setCurrentPlay('X');
    setBoardState(INITIAL_BOARD_STATE);
    setWinner(undefined);
  };

  const catsGame = !winner && boardState.every((cell) => !!cell);
  const gameOver = !!winner || catsGame;

  return (
    <>
      <h2>Tic Tac Toe</h2>
      <Board>
        <tbody>
          <tr>
            {boardState.map((cell, i) => (
              <Cell
                disabled={!!boardState[i] || gameOver}
                onClick={() => {
                  if (!boardState[i]) {
                    calculateBoardState(i, currentPlay);
                  }
                }}
                key={i}
              >
                {cell}
              </Cell>
            ))}
          </tr>
        </tbody>
      </Board>
      {winner && <Canvas ref={canvasRef} />}
      {winner && (
        <>
          <p>The Winner is {winner.play}!</p>
          <p>They won on the {winner.location.split('_').join(' ')}.</p>
        </>
      )}
      {catsGame && <p>It's a Cat's Game! No Winner!</p>}
      {gameOver && (
        <p>
          <ResetA onClick={() => reset()}>Start Over</ResetA>
        </p>
      )}
    </>
  );
};

const Canvas = styled.canvas`
  display: block;
  position: relative;
  top: -126px;
  margin-bottom: -126px;
  height: 126px;
  width: 126px;
`;

const Board = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 128px;
  min-width: 160px;
  display: block;
  user-select: none;
`;

const Cell = styled.td<{ disabled: boolean }>`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const ResetA = styled.a`
  cursor: pointer;
`;
