const TitleToField = () => {
    return (
         <div style={{ 
              display: 'flex', 
              gap: '20px', 
              marginBottom: '15px',
              flexWrap: 'nowrap',    
              whiteSpace: 'nowrap'      
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#4CAF50', flexShrink: 0 }}></div>
            <span style={{ whiteSpace: 'nowrap' }}>S - Восприимчивые</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#f44336', flexShrink: 0 }}></div>
            <span style={{ whiteSpace: 'nowrap' }}>I - Инфицированные</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#9C27B0', flexShrink: 0 }}></div>
            <span style={{ whiteSpace: 'nowrap' }}>R - Выздоровевшие</span>
            </div>
        </div>
    )
}

export default TitleToField