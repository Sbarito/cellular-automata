import { useState, useEffect } from "react";
import { generateTicks } from "../utils/generateTicks";
import { classicSIR } from '../../../../../shared/utils/classicSIR'

const Graf = ({ day, s0, i0, r0, beta, gamma, emulation = false, endSIRRef, setGrafCurrentDay, reset }) => {
    const [S, setS] = useState([]);
    const [I, setI] = useState([]);
    const [R, setR] = useState([]);
    const [step, setStep] = useState(0);

    useEffect(() => {
        setS([]);
        setI([]);
        setR([]);
        setStep(0);
    }, [reset]);

    const fullData = emulation 
        ? classicSIR(s0, i0, r0, Number(beta), gamma, day, 0.1)
        : { S: [], I: [], R: [] };

    const maxY = 400;
    const maxX = day;
    const yTicks = generateTicks(maxY);
    const xTicks = generateTicks(maxX);
    const yPositions = [650, 530, 410, 290, 170, 50];
    const xPositions = [50, 150, 250, 350, 450, 550];

    const getXCoordinate = (value) => 50 + (value / maxX) * 500;
    const getYCoordinate = (value) => 650 - (value / maxY) * 600;

    const getLinePath = (points) => {
        if (points.length < 2) return '';
        return points.map((point, index) => {
            const x = getXCoordinate(point.x);
            const y = getYCoordinate(point.y);
            return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
        }).join(' ');
    };

    useEffect(() => {
        if (!emulation) return;
        if (step >= fullData.S.length) return;

        const timeout = setTimeout(() => {
            setS(prev => [...prev, fullData.S[step]]);
            setI(prev => [...prev, fullData.I[step]]);
            setR(prev => [...prev, fullData.R[step]]);
            setStep(prev => prev + 1);
            endSIRRef.current = {
                S: fullData.S[step], 
                I: fullData.I[step], 
                R: fullData.R[step]
            }
            setGrafCurrentDay(Math.floor(endSIRRef.current.S.x))
        }, 1);

        return () => clearTimeout(timeout);
    }, [step, fullData, emulation]);

    const linePathS = getLinePath(S);
    const linePathI = getLinePath(I);
    const linePathR = getLinePath(R);

    return (
        <svg width="100%" height="700" viewBox="0 0 600 700" style={{ maxWidth: '100%' }}>
            {yPositions.map((y, index) => y !== 650 && (
                <line key={`grid-y-${index}`} x1="50" y1={y} x2="550" y2={y} stroke="#ccc" strokeWidth="1" strokeDasharray="5,5"/>
            ))}
            {xPositions.map((x, index) => x !== 50 && (
                <line key={`grid-x-${index}`} x1={x} y1="50" x2={x} y2="650" stroke="#ccc" strokeWidth="1" strokeDasharray="5,5"/>
            ))}

            <line x1="50" y1="650" x2="50" y2="50" stroke="#333" strokeWidth="2" />
            <line x1="50" y1="650" x2="550" y2="650" stroke="#333" strokeWidth="2" />

            {yTicks.map((value, index) => {
                const y = yPositions[index];
                if (y === 650 || y === 50) return null;
                return (
                    <g key={`y-${index}`}>
                        <line x1="45" y1={y} x2="50" y2={y} stroke="#666" strokeWidth="1" />
                        <text x="35" y={y} textAnchor="end" dominantBaseline="middle" fontSize="12" fill="#666">{value}</text>
                    </g>
                );
            })}

            {xTicks.map((value, index) => {
                const x = xPositions[index];
                if (x === 50 || x === 550) return null;
                return (
                    <g key={`x-${index}`}>
                        <line x1={x} y1="650" x2={x} y2="645" stroke="#666" strokeWidth="1" />
                        <text x={x} y="665" textAnchor="middle" fontSize="12" fill="#666">{value}</text>
                    </g>
                );
            })}

            <path d={linePathS} fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeDasharray="5,3" opacity="0.5" />
            <path d={linePathI} fill="none" stroke="#f44336" strokeWidth="2.5" strokeDasharray="5,3" opacity="0.5" />
            <path d={linePathR} fill="none" stroke="#01e414" strokeWidth="2.5" strokeDasharray="5,3" opacity="0.5" />

            <polygon points="45,55 50,40 55,55" fill="#333"/>
            <polygon points="545,645 560,650 545,655" fill="#333"/>

            <text x="10" y="58" fontSize="14" fill="#333">S,I,R</text>
            <text x="550" y="666" fontSize="14" fill="#333">t</text>
        </svg>
    );
};

export default Graf;