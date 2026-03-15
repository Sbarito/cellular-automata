import Graf from "./ui/Graf";

const RightSidebar = ({day, s0, i0, r0, beta, gamma, emulation, setEndSIR}) => {
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
                <Graf day={day} s0={s0} i0={i0} r0={r0} beta={beta} gamma={gamma} emulation={emulation} setEndSIR={setEndSIR}/>
            </div>
        </div>
    )
}

export default RightSidebar;