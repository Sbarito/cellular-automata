import Graf from "./ui/Graf";

const RightSidebar = ({day}) => {
    return (
        <div style={{ 
            width: '100%', 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '8px',
            minHeight: '100%'
        }}>
            <div style={{ 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#ffffff', 
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <Graf day={day}/>
            </div>
        </div>
    )
}

export default RightSidebar;