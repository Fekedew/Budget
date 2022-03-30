import React, { useState } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
function NewEntryForm({addEntry}) {
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('')
  const [isExpence, setIsExpence] = useState(true);

  return (    
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tag"
          width={12}
          label="Description"
          placeholder="Name of the transaction"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>

      <Segment compact>
        <Checkbox toggle checked={isExpence} label="is expence" onChange={() => setIsExpence(oldValue => !oldValue)}/>
      </Segment>
      <ButtonSaveOrCancel addEntry={addEntry} message={message} value={value} isExpence={isExpence}/>
    </Form>
  );
}

export default NewEntryForm;
