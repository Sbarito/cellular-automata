import { handleGenerate } from '../../utils/handleGenerate';
import Button from '../Button';
import Field from '../Field/Field';
import TitleToField from '../Field/TitleToField';


const FieldPanel = ({gridSize, grid, isRunning, setGrid, setIsRunning}) => {
    const handleRun = () => {
        setIsRunning(true);
        console.log('Симуляция запущена');
    };
    const handleStop = () => {
        setIsRunning(false);
        console.log('Симуляция остановлена');
    };
    const handleReset = () => {
        setGrid(Array(gridSize).fill().map(() => Array(gridSize).fill('S')));
        setIsRunning(false);
        console.log('Сетка сброшена');
    };
    return (
        <div>
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