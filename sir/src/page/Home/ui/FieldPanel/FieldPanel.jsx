import { handleGenerate } from '../../utils/handleGenerate';
import Button from '../Button';
import Field from '../Field/Field';
import TitleToField from '../Field/TitleToField';
import { simulateStep } from "../../../../shared/utils/simulateModule"


const FieldPanel = ({
    gridSize, 
    gridHouse,
    grid, 
    isRunning, 
    setGrid, 
    setIsRunning,  
    setCurrentDay,  
    beta, 
    gamma, 
    day, 
    currentDay,
    setResetTrigger
}) => {
    
    const handleRun = () => {
        setIsRunning(true);
    };
    const handleStop = () => {
        setIsRunning(false);
    };
    const generateGrid = (gridHouse, gridSize) => {
        // Создаем пустую сетку
        const newGrid = Array(gridSize).fill().map(() => Array(gridSize).fill('S'));
        
        const totalCellsInSquare = gridSize * gridSize;
        const extraCells = totalCellsInSquare - gridHouse;
        
        if (extraCells > 0) {
            let remaining = extraCells;
            
            // Заполняем disabled клетки ТОЧНО КАК В ОРИГИНАЛЕ
            // Сначала заполняем последнюю строку
            for (let j = gridSize - 1; j >= 0 && remaining > 0; j--) {
                newGrid[gridSize - 1][j] = 'disabled';
                remaining--;
            }

            // Затем заполняем последний столбец (начиная с предпоследней строки)
            for (let i = gridSize - 2; i >= 0 && remaining > 0; i--) {
                newGrid[i][gridSize - 1] = 'disabled';
                remaining--;
            }
        }
        
        return newGrid;
    };
    const handleReset = () => {
        const newGrid = generateGrid(gridHouse, gridSize);
        setGrid(newGrid)
        setCurrentDay(0);
        setIsRunning(false);
        setResetTrigger(prev => prev + 1);
    };
    const handleStep = () => {
        if (currentDay < day) {
            setGrid(prevGrid => simulateStep(prevGrid, beta, gamma));
            setCurrentDay(prev => prev + 1);
        }
    };
    const isLastDayReached = currentDay >= day;
 
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            <TitleToField/>
            <Field gridSize={gridSize} grid={grid} isRunning={isRunning} setGrid={setGrid}/>
                        
            <div style={{ 
              marginTop: '15px', 
              display: 'flex', 
              gap: '10px',
              width: '100%',
            }}>
              
              <Button 
                text={'Run'}
                onClick={handleRun} 
                disabled={isRunning}
                colorButton={'#4CAF50'} 
                colorButtonHover={'#45a049'}
               />
                <Button 
                 text={!isNaN(day)? `Шаг ${currentDay}/${day}`: 'Шаг'}
                 onClick={handleStep}
                 
                 disabled={(isRunning && currentDay < day) || isLastDayReached}
                 colorButton={'#01e414'} 
                 colorButtonHover={'#00dd12'}
                />
               <Button
                text={'Stop'}
                onClick={handleStop} 
                disabled={isRunning}
                colorButton={'#f44336'} 
                colorButtonHover={'#d32f2f'}
               />
               <Button 
                text={'Reset'}
                onClick={handleReset} 
                disabled={isRunning}
                colorButton={'#FF9800'} 
                colorButtonHover={'#F57C00'}
               />
               <Button 
                text={'Random'}
                onClick={() => handleGenerate(isRunning, gridSize, setGrid,  grid)} 
                disabled={isRunning}
                colorButton={'#ffe600'} 
                colorButtonHover={'#f5dc00'}
               />
            </div>
          </div>
    )
}

export default FieldPanel