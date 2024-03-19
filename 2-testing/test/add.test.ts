import { describe, expect, it, test } from "vitest";

describe("adds 1 + 2 to equal 3", () => {
  it("should return 3", () => {
    expect(1 + 2).toBe(3);
  });
});

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
