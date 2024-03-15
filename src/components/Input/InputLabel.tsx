import { ComponentProps, ReactNode } from "react";
import { InputLabelContainer } from "./styles";

interface InputLabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

export function InputLabel({ children, ...rest }: InputLabelProps) {
  return <InputLabelContainer {...rest}>{children}</InputLabelContainer>;
}
