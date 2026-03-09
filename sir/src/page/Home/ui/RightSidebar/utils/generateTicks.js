export const generateTicks = (max, count = 5) => {
    const ticks = [];
    for (let index = 0; index <= count; index++) {
        const value = Math.round((max / count) * index);
        ticks.push(value);
    }
    return ticks;
};