import Statistics from './ui/Statistics';
import Parameters from './ui/Parameters';
import Time from './ui/Time';

const LeftSidebar = ({
    sCount, 
    iCount, 
    rCount, 
    day, 
    setDay, 
    beta, 
    setBeta, 
    gamma, 
    setGamma, 
    endSIRRef,
    currentDay,
    initialCountsRef,
    floor,
    room,
    setRoom,
    setFloor,
  grafCurrentDay}) => {
    return (
        <div style={{ 
            display: 'flex',              
            flexDirection: 'column',      
            gap: '8px'     
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'white', padding: '15px', 
              borderRadius: '8px', height: '100%'}}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Параметры</div>
              <Statistics 
                title={'Вводные данные:'}
                sCount={initialCountsRef.current.s} 
                iCount={initialCountsRef.current.i} 
                rCount={initialCountsRef.current.r}  
                />
              <Parameters 
                beta={beta}
                setBeta={setBeta}
                gamma={gamma}
                setGamma={setGamma}
                floor={floor}
                setFloor={setFloor}
                room={room}
                setRoom={setRoom}
              />
              <Time day={day} setDay={setDay}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'white', padding: '15px', 
              borderRadius: '8px', height: '100%'}}>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Итоги</div>
              <Statistics 
                title={'КА'}
                sCount={sCount} 
                iCount={iCount} 
                rCount={rCount}  
                day={day}
                currentDay={currentDay}
                />
                <Statistics 
                title={'SIR'}
                sCount={Math.floor(endSIRRef.current.S.y)} 
                iCount={Math.floor(endSIRRef.current.I.y)} 
                rCount={Math.floor(endSIRRef.current.R.y)}  
                day={day}
                currentDay={grafCurrentDay}
                />
            </div>
          </div>
    )
}

export default LeftSidebar