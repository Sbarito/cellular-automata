const Statistics = ({sCount, iCount, rCount}) => {
    return (
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
    )
}

export default Statistics