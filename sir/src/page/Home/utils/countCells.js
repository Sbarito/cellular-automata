export const countCells = (grid) => {
    let sCount = 0, iCount = 0, rCount = 0;
    grid.forEach(row => {
      row.forEach(cell => {
        if (cell === 'S') sCount++;
        else if (cell === 'I') iCount++;
        else if (cell === 'R') rCount++;
      });
    });
    return { sCount, iCount, rCount };
  
}