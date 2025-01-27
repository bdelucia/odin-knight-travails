export function knightMoves(start, end) {
  // possible directions the knight can move relative to its current position
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

  // checks if a position is within the bounds of the chessboard
  const isValid = (x, y) => x >= 0 && y >= 0 && x < 8 && y < 8;

  // check if start and end positions are valid
  if (!isValid(start[0], start[1]) || !isValid(end[0], end[1])) {
    return "Invalid start or end position!";
  }

  const queue = [[start]]; // simulating a queue for BFS
  const visited = new Set(); // keep track of visited positions
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1]; // parse x and y from the last position in the path

    if (x === end[0] && y === end[1]) {
      // if x and y match end position, we are done
      printPath(path);
    }

    // check all possible moves from the current position, takes first valid move
    for (const [dx, dy] of directions) {
      const nextX = x + dx; // calculate next x position
      const nextY = y + dy;

      // if potential move is valid and not visited, add to path queue and visited Set
      if (isValid(nextX, nextY) && !visited.has([nextX, nextY].toString())) {
        visited.add([nextX, nextY].toString());
        queue.push([...path, [nextX, nextY]]);
      }
    }
  }

  return "Path completed!";
}

function printPath(path) {
  console.log(`You've made it in ${path.length - 1} moves! Here's your path:`);
  for (const [x, y] of path) {
    console.log(`(${x}, ${y})\n`);
  }
}
