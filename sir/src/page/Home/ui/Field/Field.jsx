const Field = ({ gridSize, grid, isRunning, setGrid }) => {
  const handleCellClick = (rowIndex, colIndex) => {
    if (isRunning) return;

    const newGrid = [...grid];
    const currentValue = newGrid[rowIndex][colIndex];

    if (currentValue === 'S') newGrid[rowIndex][colIndex] = 'I';
    else if (currentValue === 'I') newGrid[rowIndex][colIndex] = 'R';
    else if (currentValue === 'R') newGrid[rowIndex][colIndex] = 'S';

    setGrid(newGrid);
  };

  const getCellColor = (value) => {
    switch (value) {
      case 'S': return '#4CAF50';
      case 'I': return '#f44336';
      case 'R': return '#fbff00';
      default: return '#fff';
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`, // адаптивная ширина колонок
        gridAutoRows: 'minmax(0, 1fr)', // адаптивная высота строк
        gap: '1px',
        backgroundColor: '#ccc',
        width: '100%', // контейнер может быть ограничен родителем
        aspectRatio: '1', // чтобы сетка была квадратной
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            style={{
              backgroundColor: getCellColor(cell),
              cursor: isRunning ? 'not-allowed' : 'pointer',
              border: '1px solid rgba(0,0,0,0.1)',
              transition: 'background-color 0.2s',
              opacity: isRunning ? 0.7 : 1,
              width: '100%',
              height: '100%',
            }}
            title={`${cell} - ${rowIndex},${colIndex}`}
          />
        ))
      )}
    </div>
  );
};

export default Field;