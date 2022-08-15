import React, { useState } from "react";
import { Button, Form, Popover, OverlayTrigger } from "react-bootstrap";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <OverlayTrigger placement="right" overlay={popover}>
      <span>
        I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
      </span>
    </OverlayTrigger>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          label={checkboxLabel}
        ></Form.Check>
        <Button variant="primary" type="submit" disabled={!isChecked}>
          Confirm Order
        </Button>
      </Form.Group>
    </Form>
  );
};
export default SummaryForm;
