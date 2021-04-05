import React from 'react';

import Button, { EButtonTheme } from '../Button';

import * as SC from './styles';

interface IButtonProps {
  buttonTheme: EButtonTheme;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  useButton?: boolean;
  buttonProps?: IButtonProps;
}

type InputType = React.ForwardRefExoticComponent<
  IInputProps & React.RefAttributes<HTMLInputElement>
>;

const Input: InputType = React.forwardRef(
  ({ useButton, buttonProps, children, ...restProps }, forwardReference) => {
    return (
      <SC.Container {...restProps}>
        <input ref={forwardReference} {...restProps} />

        {useButton && buttonProps && (
          <Button
            onClick={buttonProps.onButtonClick}
            theme={buttonProps.buttonTheme}
          >
            {buttonProps.buttonText}
          </Button>
        )}
      </SC.Container>
    );
  },
);

export default Input;
