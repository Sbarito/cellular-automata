import './App.css';
import { useState } from 'react';

function App() {
  const [gridSize, setGridSize] = useState(10);
  const [grid, setGrid] = useState(Array(10).fill().map(() => Array(10).fill('S')));

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setGridSize(newSize);
    setGrid(Array(newSize).fill().map(() => Array(newSize).fill('S')));
  };

  const handleCellClick = (rowIndex, colIndex) => {
    const newGrid = [...grid];
    const currentValue = newGrid[rowIndex][colIndex];
    
    // Цикл состояний: S -> I -> R -> S
    if (currentValue === 'S') {
      newGrid[rowIndex][colIndex] = 'I';
    } else if (currentValue === 'I') {
      newGrid[rowIndex][colIndex] = 'R';
    } else if (currentValue === 'R') {
      newGrid[rowIndex][colIndex] = 'S';
    }
    
    setGrid(newGrid);
  };

  const getCellColor = (value) => {
    switch(value) {
      case 'S': return '#4CAF50'; // зеленый
      case 'I': return '#f44336'; // красный
      case 'R': return '#9C27B0'; // фиолетовый
      default: return '#fff';
    }
  };

  return (
    <div className="App">
      <header className='header'>
        <div>SIR model</div>
        <div style={{display: 'flex', gap: '20px'}}>
          <div>Симулятор</div>
          <div>Инструкция</div>
          <div>О проекте</div>
        </div>
      </header>
      <div style={{ padding: '5px 150px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <label htmlFor="grid-size">Размер сетки:</label>
            <select 
              id="grid-size" 
              value={gridSize} 
              onChange={handleSizeChange}
              style={{ padding: '5px', borderRadius: '4px' }}
            >
              <option value={10}>10x10</option>
              <option value={20}>20x20</option>
              <option value={30}>30x30</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: '#4CAF50' }}></div>
              <span>S - Восприимчивые</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: '#f44336' }}></div>
              <span>I - Инфицированные</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: '#9C27B0' }}></div>
              <span>R - Выздоровевшие (2 клика)</span>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: `repeat(${gridSize}, 30px)`,
              gap: '1px',
              backgroundColor: '#ccc',
              padding: '1px'
            }}
          >
            {grid.map((row, rowIndex) => (
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: getCellColor(cell),
                    cursor: 'pointer',
                    border: '1px solid rgba(0,0,0,0.1)',
                    transition: 'background-color 0.2s'
                  }}
                  title={`${cell} - ${rowIndex},${colIndex}`}
                />
              ))
            ))}
          </div>
          <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h3>График будет здесь</h3>
            <p>Место для отображения динамики модели SIR</p>
          </div>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          Для работы с симулятором нажимайте на клетки для изменения их состояния. 
          При первом клике клетка становится I (инфицированной), при втором - R (выздоровевшей), 
          при третьем - снова S (восприимчивой).
        </div>
      </div>
      <footer className='footer'>
        контакты для связи:<br/>
        почта: 2b1000okn35@gmail.com<br/>
        телефон: +79872767937
      </footer>
    </div>
  );
}

export default App;