const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  //   Base cases:
  //   1. Off the map
  if (curr.x < 0 || curr.x > maze[0].length ||
      curr.y < 0 || curr.y > maze.length) {
    return false;
  }

  //   2. Hit the wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  //   3. Got to the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  //   4. Already checked/seen
  if (seen[curr.y][curr.x]) {
    return false;
  }

  //   Pre-condition -> Recursion -> Post-condition
  //   pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  //   rec
  // Check path for all directions
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, {
      x: curr.x + x,
      y: curr.y + y
    }, end, seen, path)) {
      return true;
    }
  }

  //   post
  /**
   * E.g. the situation is like that:
   * # # # #
   * # A B C #
   * # e # #
   *
   * Because the step goes up, right, down, left, the path will be [A], [A, B], [A, B, C].
   * B and C can only go left -> path.pop(), which results in [A, B, C] -> [A, B] -> [A] -> true
   */
  path.pop()

  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[i].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}