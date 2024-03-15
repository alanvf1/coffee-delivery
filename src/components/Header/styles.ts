import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`;

const COLOR = {
  "purple-dark": "purple-dark",
  "yellow-dark": "yellow-dark",
};

const BACKGROUND_COLOR = {
  "purple-light": "purple-light",
  "yellow-light": "yellow-light",
};

interface ButtonProps {
  $color: keyof typeof COLOR;
  $backgroundColor: keyof typeof BACKGROUND_COLOR;
}

export const HeaderButton = styled.button<ButtonProps>`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme[COLOR[props.$color]]};
  background-color: ${(props) =>
    props.theme[BACKGROUND_COLOR[props.$backgroundColor]]};

  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const HeaderButtonBadge = styled.span`
  ${(props) => props.theme.typograph.textS}
  color: ${(props) => props.theme.white};
  font-weight: bold;
  background-color: ${(props) => props.theme["yellow-dark"]};
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  border-radius: 50%;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
