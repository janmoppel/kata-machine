/**
 * Breadth-first search.
 * Find Needle index element from the matrix and return path;
 * Matrix!
 * [
 *   [0, *, *],
 *   [*, 1, *],
 *   [*, 3, *]
 * ]
 * @param graph
 * @param source
 * @param needle
 */
export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number): number[] | null {

  const seen = new Array(graph.length).fill(false);
  // Parents
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  while (q.length) {
    const curr = q.shift() as number;
    if (curr === needle) {
      break;
    }

    // [ ., ., .] - connections
    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
       // No connection to the curr
       if (adjs[i] === 0) {
         continue;
       }

       // Has been seen
       if (seen[i]) {
         continue;
       }

       seen[i] = true;
       prev[i] = curr;
       q.push(i);
    }
  }

  if (prev[needle] === -1) {
    return null;
  }

  // build it backwards
  let curr = needle;
  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
}