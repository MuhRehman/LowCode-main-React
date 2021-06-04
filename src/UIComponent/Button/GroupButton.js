import React from 'react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
const ButtonGroupComponent = () => {
  return (
    <ButtonGroup>
      <Button togglable={true}>Bold</Button>
      <Button togglable={true}>Italic</Button>
      <Button togglable={true}>Underline</Button>
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;
