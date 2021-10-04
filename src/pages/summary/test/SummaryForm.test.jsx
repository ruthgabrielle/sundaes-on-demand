import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  userEvent.click(checkBox);
  expect(submitButton).toBeEnabled();

  userEvent.click(checkBox);
  expect(submitButton).toBeDisabled();
});
