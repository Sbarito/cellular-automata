const Time = ({day, setDay}) => {
    return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px'}}>
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
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            style={{
                                width: '50px',
                                padding: '6px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                    
                </div>
            </div>
    )
}

export default Time