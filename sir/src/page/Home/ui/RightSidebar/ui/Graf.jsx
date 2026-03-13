import { generateTicks } from "../utils/generateTicks";

const Graf = ({ 
    day, 
    S = [ { x: 0, y: 400 }, { x: 1, y: 350 }, { x: 6, y: 280 }, { x: 12, y: 220 }, { x: 18, y: 180 }, { x: 24, y: 150 }, { x: 30, y: 120 } ],
    I = [ { x: 0, y: 50 }, { x: 1, y: 80 }, { x: 6, y: 150 }, { x: 12, y: 200 }, { x: 18, y: 180 }, { x: 24, y: 120 }, { x: 30, y: 60 } ],
    R = [ { x: 0, y: 0 }, { x: 1, y: 20 }, { x: 6, y: 60 }, { x: 12, y: 100 }, { x: 18, y: 150 }, { x: 24, y: 200 }, { x: 30, y: 250 } ]
}) => {
    const maxY = 400
    const maxX = day
    const yTicks = generateTicks(maxY);
    const xTicks = generateTicks(maxX);
    const yPositions = [650, 530, 410, 290, 170, 50];
    const xPositions = [50, 150, 250, 350, 450, 550];
    
    const getXCoordinate = (value) => {
        return 50 + (value / maxX) * 500;
    };
    
    const getYCoordinate = (value) => {
        return 650 - (value / maxY) * 600;
    };
    
    // Функция для создания прямой линии
    const getLinePath = (points) => {
        if (points.length < 2) return '';
        
        return points.map((point, index) => {
            const x = getXCoordinate(point.x);
            const y = getYCoordinate(point.y);
            return (index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
        }).join(' ');
    };
    
    const linePathS = getLinePath(S);
    const linePathI = getLinePath(I);
    const linePathR = getLinePath(R);
    
    return (
        <svg width="100%" height="700" viewBox="0 0 600 700" style={{ maxWidth: '100%' }}>
            {/* Сетка */}
            {yPositions.map((y, index) => {
                if (y === 650) return null;
                return (
                    <line 
                        key={`grid-y-${index}`}
                        x1="50" 
                        y1={y} 
                        x2="550" 
                        y2={y} 
                        stroke="#ccc" 
                        strokeWidth="1" 
                        strokeDasharray="5,5"
                    />
                );
            })}
            
            {xPositions.map((x, index) => {
                if (x === 50) return null; 
                return (
                    <line 
                        key={`grid-x-${index}`}
                        x1={x} 
                        y1="50" 
                        x2={x} 
                        y2="650" 
                        stroke="#ccc" 
                        strokeWidth="1" 
                        strokeDasharray="5,5"
                    />
                );
            })}
            
            {/* Оси */}
            <line 
                x1="50" y1="650" 
                x2="50" y2="50" 
                stroke="#333" 
                strokeWidth="2" 
            />
            
            <line 
                x1="50" y1="650" 
                x2="550" y2="650" 
                stroke="#333" 
                strokeWidth="2" 
            />
            
            {/* Подписи по Y */}
            {yTicks.map((value, index) => {
                const y = yPositions[index];
                if (y === 650 || y === 50) return null;
                
                return (
                    <g key={`y-${index}`}>
                        <line 
                            x1="45" y1={y} 
                            x2="50" y2={y} 
                            stroke="#666" 
                            strokeWidth="1" 
                        />
                        <text 
                            x="35" y={y} 
                            textAnchor="end" 
                            dominantBaseline="middle"
                            fontSize="12"
                            fill="#666"
                        >
                            {value}
                        </text>
                    </g>
                );
            })}
            
            {/* Подписи по X */}
            {xTicks.map((value, index) => {
                const x = xPositions[index];
                if (x === 50 || x === 550) return null;
                
                return (
                    <g key={`x-${index}`}>
                        <line 
                            x1={x} y1="650" 
                            x2={x} y2="645" 
                            stroke="#666" 
                            strokeWidth="1" 
                        />
                        <text 
                            x={x} y="665" 
                            textAnchor="middle" 
                            fontSize="12"
                            fill="#666"
                        >
                            {value}
                        </text>
                    </g>
                );
            })}
            
            {/* ЛИНИИ ГРАФИКОВ */}
            {/* S линия (синяя) */}
            <path 
                d={linePathS}
                fill="none"
                stroke="#4CAF50"
                strokeWidth="2.5"
            />
            
            {/* I линия (красная) */}
            <path 
                d={linePathI}
                fill="none"
                stroke="#f44336"
                strokeWidth="2.5"
            />
            
            {/* R линия (зеленая) */}
            <path 
                d={linePathR}
                fill="none"
                stroke="#01e414"
                strokeWidth="2.5"
            />
            
            {/* Стрелки */}
            <polygon 
                points="45,55 50,40 55,55" 
                fill="#333"
            />
            
            <polygon 
                points="545,645 560,650 545,655" 
                fill="#333"
            />
            
            <text x="10" y="58" fontSize="14" fill="#333">S,I,R</text>
            <text x="550" y="666" fontSize="14" fill="#333">t</text>
        </svg>
    )
}

export default Graf;