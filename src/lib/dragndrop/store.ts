import { derived, writable, type Readable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

export const mX = writable(0);
export const mY = writable(0);
export const dragging: Writable<number | null> = writable(null);

export const zones: Writable<[number | string, () => number, () => number][]> = writable([]);

export const activeZone: Readable<number | string | null> = derived(
  [zones, mX, mY, dragging],
  ([zones, x, y, isDragging]) => {
    if (isDragging === null) {
      return null;
    }
    let closestDistance = 10000;
    let closestZone = null;
    zones.forEach(([key, getX, getY]) => {
      const xDiff = getX() - x;
      const yDiff = getY() - y;
      const dist = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
      if (dist < closestDistance) {
        closestZone = key;
        closestDistance = dist;
      }
    });
    return closestZone;
  }
);

if (browser) {
  document.addEventListener('mousemove', (ev) => {
    mX.set(ev.x);
    mY.set(ev.y);
  });
}
