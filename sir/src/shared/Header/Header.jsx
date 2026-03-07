const Header = () => {
    return (
       <header className='header'>
        <div>SIR model</div>
        <div style={{display: 'flex', gap: '20px'}}>
          <a 
            href="" 
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            Симулятор
          </a>
          <a 
            href="" 
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            Справка
          </a>
        </div>
      </header>
    )
}

export default Header