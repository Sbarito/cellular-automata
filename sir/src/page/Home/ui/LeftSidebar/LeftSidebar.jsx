import Statistics from './ui/Statistics';
import Parameters from './ui/Parameters';

const LeftSidebar = ({sCount, iCount, rCount}) => {
    return (
        <div style={{ 
            width: '500px', 
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',              
            flexDirection: 'column',      
            height: 'auto',            
            minHeight: '100%'           
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Настройки сетки</div>
              <Statistics sCount={sCount} iCount={iCount} rCount={rCount}/>
              <Parameters/>
            </div>
          </div>
    )
}

export default LeftSidebar