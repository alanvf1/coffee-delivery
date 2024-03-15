import { ReactNode } from "react";
import { InputRootContainer } from "./styles";

interface InputRootProps {
  children: ReactNode;
  inputSize?: "small" | "normal" | "big" | "number";
}

export function InputRoot({ children, inputSize = "normal" }: InputRootProps) {
  return <InputRootContainer $size={inputSize}>{children}</InputRootContainer>;
}
