import { ComponentProps, Ref, forwardRef } from "react";
import { InputFieldContainer } from "./styles";

interface InputFieldProps extends ComponentProps<"input"> {
  inputSize?: "small" | "normal" | "big";
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { inputSize = "normal", ...rest }: InputFieldProps,
    forwardedRef: Ref<HTMLInputElement>
  ) => {
    return (
      <InputFieldContainer {...rest} $size={inputSize} ref={forwardedRef} />
    );
  }
);
