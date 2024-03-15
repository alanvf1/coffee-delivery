import styled, { css } from "styled-components";

const INPUT_SIZES = {
  small: () => css`
    width: 3.75rem;
    min-width: 3.75rem;
  `,
  normal: () => css`
    width: 12.5rem;
    min-width: 12.5rem;
  `,
  big: () => css`
    flex: 1;
  `,
  number: () => css`
    width: 4.5rem;
    min-width: 4.5rem;
  `,
};

interface InputProps {
  $size: keyof typeof INPUT_SIZES;
}

export const InputRootContainer = styled.div<InputProps>`
  position: relative;
  ${(props) => INPUT_SIZES[props.$size]}
  min-width: 3.75rem;
`;

export const InputFieldContainer = styled.input<InputProps>`
  border: none;
  ${(props) => props.theme.typograph.textRegularM}
  height: 2.375rem;
  width: 100%;

  &[type="number"] {
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-button"]};
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    padding: 0.5rem 1.625rem;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  &:not([type="number"]) {
    padding: 0.75rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    ${(props) => INPUT_SIZES[props.$size]}
    ${(props) => props.theme.typograph.textS}

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const InputStepButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.875rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.purple};
  line-height: 0;
  cursor: pointer;
`;

export const InputStepDownButton = styled(InputStepButton)`
  left: 0.625rem;
`;

export const InputStepUpButton = styled(InputStepButton)`
  right: 0.625rem;
`;

export const InputLabelContainer = styled.label``;

export const InputErrorContainer = styled.span`
  display: block;
  color: #ff3333;
  margin-top: 0.125rem;
`;
