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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Настройки сетки</div>
              <div style={{ 
                marginTop: '10px',
                padding: '10px',
                backgroundColor:  '#f0f0f0',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Статистика:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>S:</span>
                    <span>{sCount}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>I:</span>
                    <span>{iCount}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>R:</span>
                    <span>{rCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default LeftSidebar