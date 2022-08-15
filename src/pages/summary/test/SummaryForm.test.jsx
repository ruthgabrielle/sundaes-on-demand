import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
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

test("Popover responds to hover", async () => {
  render(<SummaryForm />);

  //popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  //popover dispappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
