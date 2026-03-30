import { useState, useEffect } from 'react';

const Parameters = ({beta, setBeta, gamma, setGamma, floor, setFloor, room, setRoom}) => {
    const [selectedDisease, setSelectedDisease] = useState('flu');
    const [r0, setR0] = useState(3);
    const [customMode, setCustomMode] = useState(false);

    useEffect(() => {
        if (gamma > 0) {
            const calculatedR0 = (beta / gamma).toFixed(2);
            setR0(calculatedR0);
        }
    }, [beta, gamma]);

    const handleDiseaseChange = (e) => {
        const disease = e.target.value;
        setSelectedDisease(disease);
        
        if (!customMode) {
            if (disease === 'covid') {
                setBeta(0.52);
                setGamma(0.1);
            } else if (disease === 'flu') {
                setBeta(1.11);
                setGamma(0.17);
            }
        }
    };

    const handleCustomModeChange = (e) => {
        const isCustom = e.target.checked;
        setCustomMode(isCustom);
        if (!isCustom) {
            if (selectedDisease === 'covid') {
                setBeta(0.52);
                setGamma(0.1);
            } else if (selectedDisease === 'flu') {
                setBeta(1.11);
                setGamma(0.17);
            }
        }
    };

    const handleBetaChange = (e) => {
        const value = e.target.value;
        
        // Если поле пустое, устанавливаем значение по умолчанию или 0
        if (value === '') {
            setBeta(''); // или другое значение по умолчанию
            return;
        }
        
        const numValue = value;
        // Проверяем, что получилось число
        if (!isNaN(numValue)) {
            setBeta(numValue);
        }
    };

    const handleFloorChange = (e) => {
        const value = e.target.value;
        setFloor(e.target.value)
    };

    const handleRoomChange = (e) => {
        const value = e.target.value;
        setRoom(e.target.value)
    };

    const handleGammaChange = (e) => {
        if (customMode) {
            setGamma(parseFloat(e.target.value));
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <div style={{
                padding: '10px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent:'space-between' }}>
                    <select
                        id="disease"
                        value={selectedDisease}
                        onChange={handleDiseaseChange}
                        disabled={customMode}
                        style={{
                            width: '100%',
                            padding: '6px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            backgroundColor: customMode ? '#e9e9e9' : 'white',
                            cursor: customMode ? 'not-allowed' : 'default',
                            opacity: customMode ? 0.7 : 1
                        }}
                    >
                        <option value="flu">А (H3N2)</option>
                        <option value="covid">SARS-CoV-2</option>
                    </select>
                </div>
                
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    justifyContent: 'flex-start',
                    padding: '5px 0'
                }}>
                    <input
                        type="checkbox"
                        id="customMode"
                        checked={customMode}
                        onChange={handleCustomModeChange}
                        style={{
                            margin: 0,
                            width: '16px',
                            height: '16px',
                            cursor: 'pointer'
                        }}
                    />
                    <label 
                        htmlFor="customMode" 
                        style={{ 
                            fontSize: '14px', 
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        настроить самому
                    </label>
                </div>

                 <div style={{ 
                    marginTop: '10px',
                    padding: '8px',
                    backgroundColor: '#e3f2fd',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                    R₀ = {beta} / {gamma} = {r0}
                </div>
                
                <div  style={{ display: 'flex', gap: '10px'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label htmlFor="beta" style={{fontSize: '14px' }}>β:</label>
                        <input
                            id="beta"
                            value={beta}
                            onChange={handleBetaChange}
                            disabled={!customMode}
                            style={{
                                width: '60px',
                                padding: '6px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                backgroundColor: !customMode ? '#e9e9e9' : 'white',
                                opacity: !customMode ? 0.7 : 1
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <label htmlFor="gamma" style={{  fontSize: '14px' }}>γ:</label>
                        <input
                            id="gamma"
                            value={gamma}
                            onChange={handleGammaChange}
                            disabled={!customMode}
                            style={{
                                width: '60px',
                                padding: '6px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                backgroundColor: !customMode ? '#e9e9e9' : 'white',
                                opacity: !customMode ? 0.7 : 1
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <label htmlFor="r0" style={{  fontSize: '14px' }}>R0:</label>
                        <input
                            id="r0"
                            value={r0}
                            disabled={true}
                            style={{
                                width: '60px',
                                padding: '6px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                backgroundColor:  '#e9e9e9',
                                opacity:  0.7
                            }}
                        />
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Parameters;