const Time = ({day, setDay,  gridSize,  setGridSize, setGrid, gridHouse, 
  setGridHouse}) => {
const handleFloorChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) return; 
    
    setGridHouse(value);
    
    const sideSize = Math.ceil(Math.sqrt(value));
    setGridSize(sideSize);
    
    const newGrid = Array(sideSize).fill().map(() => Array(sideSize).fill('S'));
    
    const totalCellsInSquare = sideSize * sideSize;
    const extraCells = totalCellsInSquare - value;
    
    if (extraCells > 0) {
        let remaining = extraCells;
        
        for (let j = sideSize - 1; j >= 0 && remaining > 0; j--) {
            newGrid[sideSize - 1][j] = 'disabled';
            remaining--;
        }

        for (let i = sideSize - 2; i >= 0 && remaining > 0; i--) {
            newGrid[i][sideSize - 1] = 'disabled';
            remaining--;
        }
    }
    
    setGrid(newGrid);
};
    return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div style={{
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent:'space-between' }}>
                        <label htmlFor="beta" style={{ minWidth: '60px', fontSize: '14px' }}>Количество дней:</label>
                        <input
                            id="time"
                            type='number'
                            step="1"
                            min="1"
                            max="10000"
                            value={day}
                              onChange={(e) => setDay(parseInt(e.target.value, 10))}
                            style={{
                                width: '60px',
                                padding: '6px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                    
                </div>
                <div style={{
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent:'space-between' }}>
                        <label htmlFor="beta" style={{ minWidth: '60px', fontSize: '14px' }}>Количество домов:</label>
                       <input
                            id="floor"
                            type='number'
                            step="1"
                            min="1"
                            max="10000"
                            value={gridHouse}
                            onChange={handleFloorChange}
                            style={{
                                width: '60px',
                                padding: '6px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                backgroundColor: 'white',
                                opacity:  1
                            }}
                        />
                    </div>
                </div>
            </div>
    )
}

export default Time