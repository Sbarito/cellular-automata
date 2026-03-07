import { useState } from 'react';
import { countCells } from './utils/countCells';
import RightSidebar from './ui/RightSidebar/RightSidebar';
import LeftSidebar from './ui/LeftSidebar/LeftSidebar';
import FieldPanel from './ui/FieldPanel/FieldPanel';

const Home = () => {
    const [gridSize, setGridSize] = useState(20);
    const [grid, setGrid] = useState(Array(20).fill().map(() => Array(20).fill('S')));
    const [isRunning, setIsRunning] = useState(false);
    const { sCount, iCount, rCount } = countCells(grid)

    return (<div style={{ padding: '5px 150px' }}>
        <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
          <LeftSidebar  sCount={sCount} iCount={iCount} rCount={rCount} setIsRunning={setIsRunning}/>
          <FieldPanel gridSize={gridSize} grid={grid} isRunning={isRunning} setGrid={setGrid} setIsRunning={setIsRunning}/>
          <RightSidebar isRunning={isRunning}/>
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