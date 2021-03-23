/**
 * Like fetch, but automatically resolves path based on environment
 * @param input
 * @returns
 */
export const fetch2 = (input: string, init?: RequestInit) =>
  process.env.NODE_ENV === "production"
    ? fetch(input, init)
    : fetch(`http://localhost:9000${input}`, init);
