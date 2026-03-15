import { useState } from 'react';
import { countCells } from './utils/countCells';
import RightSidebar from './ui/RightSidebar/RightSidebar';
import LeftSidebar from './ui/LeftSidebar/LeftSidebar';
import FieldPanel from './ui/FieldPanel/FieldPanel';

const Home = () => {
    const [beta, setBeta] = useState(0.3);
    const [gamma, setGamma] = useState(0.1);
    const [gridSize, setGridSize] = useState(20);
    const [day, setDay] = useState(30)
    const [grid, setGrid] = useState(Array(20).fill().map(() => Array(20).fill('S')));
    const [isRunning, setIsRunning] = useState(false);
    const { sCount, iCount, rCount } = countCells(grid)
    const [endSIR, setEndSIR] = useState({S: {x: 0, y: 0}, I: {x: 0, y: 0}, R: {x: 0, y: 0}});


    return (<div style={{ padding: '5px 150px' }}>
        <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
          <LeftSidebar 
            sCount={sCount} 
            iCount={iCount} 
            rCount={rCount} 
            setIsRunning={setIsRunning}
            day={day}
            setDay={setDay}
            beta={beta}
            setBeta={setBeta}
            gamma={gamma}
            setGamma={setGamma}
            endSIR={endSIR}
            />
          <FieldPanel gridSize={gridSize} grid={grid} isRunning={isRunning} setGrid={setGrid} setIsRunning={setIsRunning}/>
          <RightSidebar 
            day={day}
            s0={sCount} 
            i0={iCount} 
            r0={rCount} 
            beta={beta} 
            gamma={gamma}
            emulation={isRunning}
            setEndSIR={setEndSIR}
            />
        </div>
        <div style={{ marginTop: '20px' }}>
          <div>
            <strong>Как пользоваться:</strong> Нажимайте на клетки для изменения их состояния. 
            При первом клике клетка становится I (инфицированной), при втором - R (выздоровевшей), 
            при третьем - снова S (восприимчивой).
          </div>
        </div>
      </div>);
}

export default Home