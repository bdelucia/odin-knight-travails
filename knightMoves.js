export function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const isValid = (x, y) => x >= 0 && y >= 0 && x < 8 && y < 8;

  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      return path;
    }

    for (const [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;
      if (isValid(nextX, nextY) && !visited.has([nextX, nextY].toString())) {
        visited.add([nextX, nextY].toString());
        queue.push([...path, [nextX, nextY]]);
      }
    }
  }

  return null; // If no path is found
}
