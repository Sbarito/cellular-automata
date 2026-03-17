// export const countInfectedNeighbors = (grid, row, col) => {
//   const directions = [
//     [-1,-1], [-1,0], [-1,1],
//     [0,-1],         [0,1],
//     [1,-1],  [1,0], [1,1]
//   ];

//   let count = 0;
//   const size = grid.length;

//   directions.forEach(([dx, dy]) => {
//     const newRow = row + dx;
//     const newCol = col + dy;

//     if (
//       newRow >= 0 &&
//       newRow < size &&
//       newCol >= 0 &&
//       newCol < size &&
//       grid[newRow][newCol] === 'I'
//     ) {
//       count++;
//     }
//   });

//   return count;
// };

// export const simulateStep = (grid, beta, gamma) => {
//   const size = grid.length;
//   const newGrid = grid.map(row => [...row]);

//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {

//       const cell = grid[i][j];

//       if (cell === 'S') {
//         const k = countInfectedNeighbors(grid, i, j);
//         const p = 1 - Math.pow((1 - beta), k);

//         if (Math.random() < p) {
//           newGrid[i][j] = 'I';
//         }

//       } else if (cell === 'I') {
//         if (Math.random() < gamma) {
//           newGrid[i][j] = 'R';
//         }
//       }

//     }
//   }

//   return newGrid;
// };



export const countInfectedNeighbors = (grid, row, col) => {
  const directions = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1],         [0,1],
    [1,-1],  [1,0], [1,1]
  ];

  let count = 0;
  const size = grid.length;

  directions.forEach(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;

    if (
      newRow >= 0 &&
      newRow < size &&
      newCol >= 0 &&
      newCol < size &&
      grid[newRow][newCol] === 'I'
    ) {
      count++;
    }
  });

  return count;
};

export const simulateStep = (grid, beta, gamma) => {
  const size = grid.length;
  const newGrid = grid.map(row => [...row]);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {

      const cell = grid[i][j];

      if (cell === 'S') {
        const infectedNeighbors = countInfectedNeighbors(grid, i, j);
        if (infectedNeighbors > 0 && Math.random() < beta) {
          newGrid[i][j] = 'I';
        }

      } else if (cell === 'I') {
        if (Math.random() < gamma) {
          newGrid[i][j] = 'R';
        }
      }

    }
  }

  return newGrid;
};