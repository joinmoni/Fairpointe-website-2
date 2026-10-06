/**
 * Sliding-window rate limiter held in memory.
 *
 * On serverless platforms each instance keeps its own window, so this is a
 * first line of defence alongside the honeypot and timing checks. For a strict
 * global limit, swap the store for a shared one (for example Upstash Redis)
 * behind the same function signature.
 */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_KEYS = 5000;

const hits = new Map<string, number[]>();

export function rateLimit(key: string, now = Date.now()): { allowed: boolean } {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return { allowed: false };
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > MAX_KEYS) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
    // If every key is still active, drop the oldest entries.
    while (hits.size > MAX_KEYS) {
      const oldest = hits.keys().next().value;
      if (oldest === undefined) break;
      hits.delete(oldest);
    }
  }

  return { allowed: true };
}
