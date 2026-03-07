import './App.css';
import { useState } from 'react';

function App() {
  const [gridSize, setGridSize] = useState(20);
  const [grid, setGrid] = useState(Array(20).fill().map(() => Array(20).fill('S')));
  const [isRunning, setIsRunning] = useState(false);

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setGridSize(newSize);
    setGrid(Array(newSize).fill().map(() => Array(newSize).fill('S')));
    setIsRunning(false); // Останавливаем симуляцию при изменении размера
  };

  const handleCellClick = (rowIndex, colIndex) => {
    if (isRunning) return; // Блокируем изменение клеток во время симуляции
    
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

  const handleGenerate = () => {
    if (isRunning) return; // Блокируем генерацию во время симуляции
    
    const newGrid = [];
    const states = ['S', 'I', 'R'];
    
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        // Случайный выбор состояния с вероятностью:
        // S - 70%, I - 20%, R - 10%
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
    console.log('Сгенерирована новая случайная конфигурация');
  };

  const handleRun = () => {
    setIsRunning(true);
    // Здесь будет логика запуска симуляции
    console.log('Симуляция запущена');
  };

  const handleStop = () => {
    setIsRunning(false);
    // Здесь будет логика остановки симуляции
    console.log('Симуляция остановлена');
  };

  const handleReset = () => {
    // Сбрасываем все клетки в состояние 'S'
    setGrid(Array(gridSize).fill().map(() => Array(gridSize).fill('S')));
    setIsRunning(false); // Останавливаем симуляцию при сбросе
    console.log('Сетка сброшена');
  };

  const getCellColor = (value) => {
    switch(value) {
      case 'S': return '#4CAF50'; // зеленый
      case 'I': return '#f44336'; // красный
      case 'R': return '#9C27B0'; // фиолетовый
      default: return '#fff';
    }
  };

  // Подсчет количества клеток каждого типа
  const countCells = () => {
    let sCount = 0, iCount = 0, rCount = 0;
    grid.forEach(row => {
      row.forEach(cell => {
        if (cell === 'S') sCount++;
        else if (cell === 'I') iCount++;
        else if (cell === 'R') rCount++;
      });
    });
    return { sCount, iCount, rCount };
  };

  const { sCount, iCount, rCount } = countCells();

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
        <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
          {/* Левая панель с размером сетки */}
          <div style={{ 
            width: '500px', 
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',              // Добавлено
            flexDirection: 'column',       // Добавлено
            height: 'auto',               // Изменено с 'fit-content'
            minHeight: '100%'             // Добавлено - растягивание на всю высоту
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Настройки сетки</div>
             
              
              {/* Краткая статистика */}
              <div style={{ 
                marginTop: '10px',
                padding: '10px',
                backgroundColor:  '#f0f0f0',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Статистика:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>S:</span>
                    <span>{sCount}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>I:</span>
                    <span>{iCount}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>R:</span>
                    <span>{rCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Основная область с сеткой */}
          <div>
            {/* Легенда цветов */}
           {/* Легенда цветов - исправленная версия */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              marginBottom: '15px',
              flexWrap: 'nowrap',           // Запрещаем перенос на новую строку
              whiteSpace: 'nowrap'          // Запрещаем перенос текста
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#4CAF50', flexShrink: 0 }}></div>
                <span style={{ whiteSpace: 'nowrap' }}>S - Восприимчивые</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#f44336', flexShrink: 0 }}></div>
                <span style={{ whiteSpace: 'nowrap' }}>I - Инфицированные</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#9C27B0', flexShrink: 0 }}></div>
                <span style={{ whiteSpace: 'nowrap' }}>R - Выздоровевшие</span>
              </div>
            </div>
            
            {/* Сетка */}
            
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: `repeat(${gridSize}, 30px)`,
                gap: '1px',
                backgroundColor: '#ccc',
                padding: '1px',
                width: 'fit-content'
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
                      cursor: isRunning ? 'not-allowed' : 'pointer',
                      border: '1px solid rgba(0,0,0,0.1)',
                      transition: 'background-color 0.2s',
                      opacity: isRunning ? 0.7 : 1
                    }}
                    title={`${cell} - ${rowIndex},${colIndex}`}
                  />
                ))
              ))}
            </div>
            
            {/* Кнопки управления под полем с клетками */}
            <div style={{ 
              marginTop: '15px', 
              display: 'flex', 
              gap: '10px',
              width: '100%',
            }}>
              <button
                onClick={handleRun}
                disabled={isRunning}
                style={{
                  flex: '1',
                  padding: '10px 0',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: isRunning ? '#ccc' : '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => !isRunning && (e.target.style.backgroundColor = '#45a049')}
                onMouseLeave={(e) => !isRunning && (e.target.style.backgroundColor = '#4CAF50')}
              >
                Run
              </button>
              <button
                onClick={handleStop}
                disabled={!isRunning}
                style={{
                  flex: '1',
                  padding: '10px 0',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: !isRunning ? '#ccc' : '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: !isRunning ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => isRunning && (e.target.style.backgroundColor = '#d32f2f')}
                onMouseLeave={(e) => isRunning && (e.target.style.backgroundColor = '#f44336')}
              >
                Stop
              </button>
              <button
                onClick={handleReset}
                disabled={isRunning}
                style={{
                  flex: '1',
                  padding: '10px 0',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: isRunning ? '#ccc' : '#FF9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => !isRunning && (e.target.style.backgroundColor = '#F57C00')}
                onMouseLeave={(e) => !isRunning && (e.target.style.backgroundColor = '#FF9800')}
              >
                Reset
              </button>
              <button
                onClick={handleGenerate}
                disabled={isRunning}
                style={{
                  flex: '1',
                  padding: '10px 0',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  backgroundColor: isRunning ? '#ccc' : '#ffe600',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => !isRunning && (e.target.style.backgroundColor = '#f5dc00')}
                onMouseLeave={(e) => !isRunning && (e.target.style.backgroundColor = '#ffe600')}
              >
                Random
              </button>
            </div>
          </div>
          
          {/* Правая панель с графиком */}
          <div style={{ 
            width: '100%', 
            padding: '20px', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px' ,
          }}>
            <h3>График будет здесь</h3>
            <p>Место для отображения динамики модели SIR</p>
            
            {isRunning && (
              <p style={{ color: '#4CAF50', fontWeight: 'bold', marginTop: '10px' }}>
                Статус: Симуляция выполняется...
              </p>
            )}
          </div>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <div>
            <strong>Как пользоваться:</strong> Нажимайте на клетки для изменения их состояния. 
            При первом клике клетка становится I (инфицированной), при втором - R (выздоровевшей), 
            при третьем - снова S (восприимчивой).
          </div>
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