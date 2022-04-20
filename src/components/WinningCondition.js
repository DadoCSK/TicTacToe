import React from "react";
import Mode from "../components/Mode";

export function calculateWinner(squares) {
  var lines = [];
  if (squares.length == 9) {
    lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }else if (squares.length == 16) {
    lines = [
    [0, 1, 2],
	  [1, 2, 3],
	  [4, 5, 6],
	  [5, 6, 7],
	  [8, 9, 10],
	  [9, 10, 11],
	  [12, 13, 14],
	  [13, 14, 15],
	  [0, 4, 8],
	  [4, 8, 12],
	  [1, 5, 9],
	  [5, 9, 13],
	  [2, 6, 10],
	  [6, 10, 14],
	  [3, 7, 11],
	  [7, 11, 15],
	  [0, 5, 10],
	  [5, 10, 15],
    [1, 6, 11],
    [4, 9, 14],
    [2, 5, 8],
    [7, 10, 13],
	  [3, 6, 9],
	  [6, 9, 12],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;

  }else if (squares.length == 25) {
    lines = [
    [0, 1, 2, 3],
	  [1, 2, 3, 4],
	  [5, 6, 7, 8],
	  [6, 7, 8, 9],
	  [10, 11, 12, 13],
	  [11, 12, 13, 14],
	  [16, 17, 18, 19],
	  [15, 16, 17, 18],
	  [20, 21, 22, 23],
	  [21, 22, 23, 24],
	  [0, 5, 10, 15],
	  [5, 10, 15, 20],
	  [1, 6, 11, 16],
	  [6, 11, 16, 21],
	  [2, 7, 12, 17],
	  [7, 12, 17, 22],
	  [3, 8, 13, 18],
	  [8, 13, 18, 23],
	  [4, 9, 14, 19],
	  [9, 14, 19, 24],
	  [0, 6, 12, 18],
	  [6, 12, 18, 24],
	  [4, 8, 12, 16],
	  [8, 12, 16, 20],
	  [1, 7, 13, 19],
	  [5, 11, 17, 23],
	  [3, 7, 11, 15],
	  [9, 13, 17, 21],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c,d] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
		    squares[a] === squares[d]
      ) {
        return squares[a];
      }
    }
    return null;
}
}
