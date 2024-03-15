import styled from "styled-components";

export const BACKGROUND_COLORS = {
  purple: "purple",
};

export const HOVER_BACKGROUND_COLORS = {
  "purple-dark": "purple-dark",
};

export const TEXT_COLORS = {
  white: "white",
};

interface ButtonProps {
  $background: keyof typeof BACKGROUND_COLORS;
  $hoverBackground: keyof typeof HOVER_BACKGROUND_COLORS;
  $color: keyof typeof TEXT_COLORS;
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  padding: 0.5rem;
  line-height: 0;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme[BACKGROUND_COLORS[props.$background]]};
  color: ${(props) => props.theme[TEXT_COLORS[props.$color]]};
  transition: all 0.1s;

  &:hover {
    background-color: ${(props) =>
      props.theme[HOVER_BACKGROUND_COLORS[props.$hoverBackground]]};
  }
`;
