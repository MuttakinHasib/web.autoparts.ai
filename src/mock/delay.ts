/**
 * Simulates async latency so components keep their loading/spinner states,
 * mirroring the legacy fake-server's network delay.
 */
export function delay<T>(value: T, ms = 350): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}
