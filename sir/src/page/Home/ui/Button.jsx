const Button = ({text, onClick, disabled, colorButton, colorButtonHover}) => {
    const disabledValue = text === 'Stop'? !disabled: disabled
    return (
    <button
      onClick={onClick}
      disabled={disabledValue}
      style={{
        flex: '1',
        padding: '10px 0',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: disabledValue ? '#ccc' : colorButton,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: disabledValue ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={(e) => !disabledValue && (e.target.style.backgroundColor =  colorButtonHover)}
      onMouseLeave={(e) => !disabledValue && (e.target.style.backgroundColor = colorButton)}
    >
      {text}
    </button>
              )
}

export default Button