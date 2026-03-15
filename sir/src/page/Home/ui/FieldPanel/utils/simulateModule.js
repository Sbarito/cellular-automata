const countInfectedNeighbors = (grid, row, col) => {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1],  [1, 0], [1, 1]
    ];
    
    let infectedCount = 0;
    const gridSize = grid.length;
    
    directions.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        
        if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
            if (grid[newRow][newCol] === 'I') {
                infectedCount++;
            }
        }
    });
    
    return infectedCount;
};

export const simulateStep = (currentGrid, beta, gamma) => {
    const gridSize = currentGrid.length;
    const newGrid = Array(gridSize).fill().map(() => Array(gridSize).fill(''));
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = currentGrid[i][j];
            
            if (cell === 'S') {
                const infectedNeighbors = countInfectedNeighbors(currentGrid, i, j);
                if (infectedNeighbors > 0) {
                    const infectionProbability = 1 - Math.pow(1 - beta, infectedNeighbors);
                    
                    if (Math.random() < infectionProbability) {
                        newGrid[i][j] = 'I';
                    } else {
                        newGrid[i][j] = 'S';
                    }
                } else {
                    newGrid[i][j] = 'S';
                }
            } 
            else if (cell === 'I') {
                if (Math.random() < gamma) {
                    newGrid[i][j] = 'R';
                } else {
                    newGrid[i][j] = 'I';
                }
            } 
            else if (cell === 'R') {
                newGrid[i][j] = 'R';
            }
        }
    }
    
    return newGrid;
};

export const runSimulation = (
    setGrid, 
    beta, 
    gamma, 
    isRunning, 
    setDay,
    speed = 100 
) => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
        setGrid(prevGrid => {
            const newGrid = simulateStep(prevGrid, beta, gamma);
            return newGrid;
        });
        setDay(prev => prev + 1);
    }, speed);
    
    return () => clearInterval(interval);
};