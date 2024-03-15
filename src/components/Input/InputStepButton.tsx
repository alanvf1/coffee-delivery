import { Minus, Plus } from "phosphor-react";
import { InputStepDownButton, InputStepUpButton } from "./styles";
import { ComponentProps } from "react";

interface InputStepButtonProps extends ComponentProps<"button"> {
  step: "up" | "down";
}

export function InputStepButton({ step, ...rest }: InputStepButtonProps) {
  if (step == "up") {
    return (
      <InputStepUpButton type="button" {...rest}>
        <Plus size={14} />
      </InputStepUpButton>
    );
  } else {
    return (
      <InputStepDownButton type="button" {...rest}>
        <Minus size={14} />
      </InputStepDownButton>
    );
  }
}
