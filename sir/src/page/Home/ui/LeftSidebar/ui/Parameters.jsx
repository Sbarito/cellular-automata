import { useState } from 'react';

const Parameters = () => {
    const [beta, setBeta] = useState(0.3);
    const [gamma, setGamma] = useState(0.1);
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
                        <label htmlFor="beta" style={{ minWidth: '60px', fontSize: '14px' }}>β (beta):</label>
                        <input
                            id="beta"
                            value={beta}
                            onChange={(e) => setBeta(e.target.value)}
                            style={{
                                width: '50px',
                                padding: '6px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent:'space-between' }}>
                        <label htmlFor="gamma" style={{ minWidth: '60px', fontSize: '14px' }}>γ (gamma):</label>
                        <input
                            id="gamma"
                            type="number"
                            value={gamma}
                            onChange={(e) => setGamma(e.target.value)}
                            step="0.01"
                            min="0"
                            max="1"
                            style={{
                                width: '50px',
                                padding: '6px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                </div>
            </div>
    )
}

export default Parameters