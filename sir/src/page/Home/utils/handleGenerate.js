  export const handleGenerate = (isRunning, gridSize, setGrid) => {
    if (isRunning) return; 
    
    const newGrid = [];
    
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        const random = Math.random();
        if (random < 0.7) {
          row.push('S');
        } else if (random < 0.9) {
          row.push('I');
        } else {
          row.push('R');
        }
      }
      newGrid.push(row);
    }
    
    setGrid(newGrid);
  };