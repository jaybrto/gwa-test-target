import { test, expect, beforeEach } from "bun:test";
import { increment, decrement, getCount, reset } from "./index.ts";

beforeEach(() => {
  reset();
});

test("starts at zero", () => {
  expect(getCount()).toBe(0);
});

test("increment works", () => {
  expect(increment()).toBe(1);
  expect(getCount()).toBe(1);
});

test("decrement works", () => {
  increment();
  expect(decrement()).toBe(0);
});
