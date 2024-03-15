import { ComponentProps, ReactNode } from "react";
import {
  BACKGROUND_COLORS,
  ButtonContainer,
  HOVER_BACKGROUND_COLORS,
  TEXT_COLORS,
} from "./styles";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  color: keyof typeof TEXT_COLORS;
  background: keyof typeof BACKGROUND_COLORS;
  hoverBackground: keyof typeof HOVER_BACKGROUND_COLORS;
}

export function Button({
  children,
  color,
  background,
  hoverBackground,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      $background={background}
      $color={color}
      $hoverBackground={hoverBackground}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
}
