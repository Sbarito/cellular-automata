export function classicSIR(S0, I0, R0, beta, gamma, tMax, dt) {
    const S = [];
    const I = [];
    const R = [];

    const N = S0 + I0 + R0; 
    let s = S0 / N;
    let i = I0 / N;
    let r = R0 / N;

    for (let t = 0; t <= tMax; t += dt) {
        S.push({ x: parseFloat(t.toFixed(2)), y: parseFloat((s * N).toFixed(2)) });
        I.push({ x: parseFloat(t.toFixed(2)), y: parseFloat((i * N).toFixed(2)) });
        R.push({ x: parseFloat(t.toFixed(2)), y: parseFloat((r * N).toFixed(2)) });

        const ds = -beta * s * i * dt;
        const di = (beta * s * i - gamma * i) * dt;
        const dr = gamma * i * dt;

        s += ds;
        i += di;
        r += dr;

        if (s < 0) s = 0;
        if (i < 0) i = 0;
        if (r < 0) r = 0;
    }

    return { S, I, R };
}