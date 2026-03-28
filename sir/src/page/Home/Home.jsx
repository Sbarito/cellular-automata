import { useState, useRef } from 'react';
import { countCells } from './utils/countCells';
import RightSidebar from './ui/RightSidebar/RightSidebar';
import LeftSidebar from './ui/LeftSidebar/LeftSidebar';
import FieldPanel from './ui/FieldPanel/FieldPanel';
import { useEffect } from "react";
import { simulateStep } from "../../shared/utils/simulateModule";

const Home = () => {
    const [beta, setBeta] = useState(0.3);
    const [gamma, setGamma] = useState(0.1);
    const [gridSize, setGridSize] = useState(20);
    const [day, setDay] = useState(30);
    const [floor, setFloor] = useState(30);
    const [room, setRoom] = useState(30);
    const [grid, setGrid] = useState(Array(gridSize).fill().map(() => Array(gridSize).fill('S')));
    const [isRunning, setIsRunning] = useState(false);
    const [resetTrigger, setResetTrigger] = useState(0); 
    const initialCountsRef = useRef({ s: 0, i: 0, r: 0 });
    const endSIRRef = useRef({S: {x: 0, y: 0}, I: {x: 0, y: 0}, R: {x: 0, y: 0}});
    const endCARef = useRef({S: {x: 0, y: 0}, I: {x: 0, y: 0}, R: {x: 0, y: 0}});
    const [currentDay, setCurrentDay] = useState(0);
    const [grafCurrentDay, setGrafCurrentDay] = useState(0);
    const { sCount, iCount, rCount } = countCells(grid)
    
    const [gridData, setGridData] = useState({
        currentDay: 0,
        sCount: 0,
        iCount: 0,
        rCount: 0
    });

    useEffect(() => {
        setGridData({
            currentDay: currentDay,
            sCount: sCount,
            iCount: iCount,
            rCount: rCount
        });
    }, [currentDay, sCount, iCount, rCount]);
    
    if (!isRunning && currentDay === 0) {
        initialCountsRef.current = { s: sCount, i: iCount, r: rCount };
        endSIRRef.current = {S: {x: 0, y: sCount}, I: {x: 0, y: iCount}, R: {x: 0, y: rCount}}
        endCARef.current = {S: {x: 0, y: sCount}, I: {x: 0, y: iCount}, R: {x: 0, y: rCount}}
    }

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setCurrentDay(prevDay => {
                if (prevDay >= day) {
                    setIsRunning(false); 
                    return prevDay;
                }
                return prevDay + 1;
            });

            setGrid(prevGrid => simulateStep(prevGrid, beta, gamma));

        }, 500);

        return () => clearInterval(interval);

    }, [isRunning, beta, gamma, day]);

    const handleReset = () => {
        setGrid(Array(gridSize).fill().map(() => Array(gridSize).fill('S')));
        setCurrentDay(0);
        setIsRunning(false);
        setResetTrigger(prev => prev + 1);
    };

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
                endSIRRef={endSIRRef}
                currentDay={currentDay}
                grafCurrentDay={grafCurrentDay}
                initialCountsRef={initialCountsRef}
                floor={floor}
                setFloor={setFloor}
                room={room}
                setRoom={setRoom}
            />
            <FieldPanel 
                gridSize={gridSize} 
                grid={grid} 
                isRunning={isRunning} 
                setGrid={setGrid} 
                setIsRunning={setIsRunning}
                setCurrentDay={setCurrentDay}
                beta={beta} 
                gamma={gamma} 
                day={day} 
                currentDay={currentDay}
                onReset={handleReset} 
            />
            <RightSidebar 
                day={day}
                s0={initialCountsRef.current.s} 
                i0={initialCountsRef.current.i} 
                r0={initialCountsRef.current.r} 
                beta={beta} 
                gamma={gamma}
                emulation={isRunning}
                endSIRRef={endSIRRef}
                setGrafCurrentDay={setGrafCurrentDay}
                reset={resetTrigger}
                gridData={gridData}
                gridSize={gridSize}
            />
        </div>
        
        <div style={{ 
            marginTop: '20px', 
            display: 'flex', 
            gap: '10px', 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          
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

export default Home;