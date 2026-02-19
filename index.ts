// GWA Test Target — Simple Counter App
// This file is managed by GWA E2E tests

let counter = 0;

export function increment(): number {
  counter++;
  return counter;
}

export function decrement(): number {
  counter--;
  return counter;
}

export function getCount(): number {
  return counter;
}

export function reset(): void {
  counter = 0;
}

if (import.meta.main) {
  console.log("Counter app ready. Count:", getCount());
}
