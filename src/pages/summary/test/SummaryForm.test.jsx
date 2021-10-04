import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Default conditions", () => {
  render(<SummaryForm />);

  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkBox).not.toBeChecked();

  const submitButton = screen.getByRole("button", { name: /confirm order/i });
  expect(submitButton).toBeDisabled();
});

test("Checkbox disables button on first click and enable on second click", () => {
  render(<SummaryForm />);

  const submitButton = screen.getByRole("button", { name: /confirm order/i });
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  fireEvent.click(checkBox);
  expect(submitButton).toBeEnabled();

  fireEvent.click(checkBox);
  expect(submitButton).toBeDisabled();
});
