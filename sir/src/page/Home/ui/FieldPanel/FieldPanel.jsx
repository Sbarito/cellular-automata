import { handleGenerate } from '../../utils/handleGenerate';
import Button from '../Button';
import Field from '../Field/Field';
import TitleToField from '../Field/TitleToField';
import { simulateStep } from "../../../../shared/utils/simulateModule"


const FieldPanel = ({
    gridSize, 
    grid, 
    isRunning, 
    setGrid, 
    setIsRunning,  
    setCurrentDay,  
    beta, 
    gamma, 
    day, 
    currentDay,
    onReset
}) => {
    const handleRun = () => {
        setIsRunning(true);
    };
    const handleStop = () => {
        setIsRunning(false);
    };
    const handleReset = () => {
        setGrid(Array(gridSize).fill().map(() => Array(gridSize).fill('S')));
        setCurrentDay(0);
        setIsRunning(false);
        onReset(); 
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
                onClick={() => handleGenerate(isRunning, gridSize, setGrid)} 
                disabled={isRunning}
                colorButton={'#ffe600'} 
                colorButtonHover={'#f5dc00'}
               />
            </div>
          </div>
    )
}

export default FieldPanel