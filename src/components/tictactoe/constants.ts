export type Play = 'X' | 'O' | '';

export type Location = keyof typeof WINNING_COMBOS;

export const INITIAL_BOARD_STATE: Play[] = Array(9).fill('');

export const WINNING_COMBOS = {
  first_row: {
    cells: [0, 1, 2],
    coords: [
      [10, 26],
      [290, 26],
    ],
  },
  second_row: {
    cells: [3, 4, 5],
    coords: [
      [10, 76],
      [290, 76],
    ],
  },
  third_row: {
    cells: [6, 7, 8],
    coords: [
      [10, 126],
      [290, 126],
    ],
  },
  first_column: {
    cells: [0, 3, 6],
    coords: [
      [50, 10],
      [50, 144],
    ],
  },
  second_column: {
    cells: [1, 4, 7],
    coords: [
      [150, 10],
      [150, 144],
    ],
  },
  third_column: {
    cells: [2, 5, 8],
    coords: [
      [250, 10],
      [250, 144],
    ],
  },
  backward_diagonal: {
    cells: [0, 4, 8],
    coords: [
      [12, 6],
      [290, 144],
    ],
  },
  forward_diagonal: {
    cells: [2, 4, 6],
    coords: [
      [12, 144],
      [290, 6],
    ],
  },
} as const;
