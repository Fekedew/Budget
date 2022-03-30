import React from "react";
import { Button } from "semantic-ui-react";
function ButtonSaveOrCancel({
  cancelMessage = "Cancel",
  okMessage = "Ok",
  cancelColor = "red",
  addEntry,
  message,
  value,
}) {
  return (
    <Button.Group style={{ marginTop: 10 }}>
      <Button color={cancelColor}>{cancelMessage}</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry(message, value)}>{okMessage}</Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
