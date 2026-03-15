import Statistics from './ui/Statistics';
import Parameters from './ui/Parameters';
import Time from './ui/Time';

const LeftSidebar = ({sCount, iCount, rCount, day, setDay, beta, setBeta, gamma, setGamma, endSIR}) => {
    return (
        <div style={{ 
            width: '500px', 
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',              
            flexDirection: 'column',      
            height: 'auto',            
            minHeight: '100%', 
            justifyContent: 'space-between'        
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Настройки сетки</div>
              <Statistics 
                sCount={sCount} 
                iCount={iCount} 
                rCount={rCount}  
                />
              <Parameters 
                beta={beta}
                setBeta={setBeta}
                gamma={gamma}
                setGamma={setGamma}
              />
              <Time day={day} setDay={setDay}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Прогноз болезни</div>
              <Statistics 
                sCount={Math.floor(endSIR.S.y)} 
                iCount={Math.floor(endSIR.I.y)} 
                rCount={Math.floor(endSIR.R.y)}  
                days={Math.floor(endSIR.S.x)}
                />
            </div>
          </div>
    )
}

export default LeftSidebar