import { Minus, Plus } from "phosphor-react";
import { InputStepDownButton, InputStepUpButton } from "./styles";
import { ComponentProps, Ref, forwardRef } from "react";

interface InputStepButtonProps extends ComponentProps<"button"> {
  step: "up" | "down";
}

export const InputStepButton = forwardRef(
  (
    { step, ...rest }: InputStepButtonProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    if (step == "up") {
      return (
        <InputStepUpButton type="button" {...rest} ref={forwardedRef}>
          <Plus size={14} />
        </InputStepUpButton>
      );
    } else {
      return (
        <InputStepDownButton type="button" {...rest} ref={forwardedRef}>
          <Minus size={14} />
        </InputStepDownButton>
      );
    }
  }
);
