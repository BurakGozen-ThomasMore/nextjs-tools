import { Counter } from "@/components/counter";
import { fireEvent, render, screen } from "@testing-library/react";
import { test } from "vitest";

test("Counter component", ({ expect }) => {
  render(<Counter />);

  // Debug the screen
  screen.debug();

  // Get the counter button
  const button = screen.getByTestId("counter");

  // Check if the counter button is rendered
  expect(button).toBeDefined();

  // Check if the counter button has the correct text
  expect(button.textContent).toEqual("Count: 0");

  // Click the counter button
  fireEvent.click(button);

  // Check if the counter button has the correct text after clicking
  expect(button.textContent).toEqual("Count: 1");
});
