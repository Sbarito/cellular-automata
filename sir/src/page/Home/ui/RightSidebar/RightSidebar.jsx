const RightSidebar = ({isRunning}) => {
    return (
        <div style={{ 
            width: '100%', 
            padding: '20px', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px' ,
          }}>
            <h3>График будет здесь</h3>
            <p>Место для отображения динамики модели SIR</p>
            
            {isRunning && (
              <p style={{ color: '#4CAF50', fontWeight: 'bold', marginTop: '10px' }}>
                Статус: Симуляция выполняется...
              </p>
            )}
          </div>
    )
}

export default RightSidebar