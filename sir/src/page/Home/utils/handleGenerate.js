  export const handleGenerate = (isRunning, gridSize, setGrid,  grid) => {
    if (isRunning) return; 
    
    const newGrid = [];
    
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        if ( grid[i][j] === 'disabled') {
          row.push('disabled');
        } else {
          const random = Math.random();
          if (random < 0.7) {
            row.push('S');
          } else if (random < 0.9) {
            row.push('I');
          } else {
            row.push('R');
          }
        }
      }
      newGrid.push(row);
    }
    
    setGrid(newGrid);
  };