import { InputErrorContainer } from "./styles";

interface InputErrorProps {
  children: any;
}

export function InputError({ children }: InputErrorProps) {
  return <InputErrorContainer>{children}</InputErrorContainer>;
}
