import styled from "styled-components";

export const CartProductContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  &:not(:first-child) {
    padding-top: 1.5rem;
  }
`;
export const CartProductImg = styled.img`
  width: 4rem;
`;

export const CartProductMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CartProductName = styled.h3`
  ${(props) => props.theme.typograph.textRegularM}
  color: ${(props) => props.theme["base-subtitle"]}
`;
export const CartProductActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const CartProductDeleteButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  ${(props) => props.theme.typograph.buttonM}
  padding: 0.5rem;
  border-radius: 6px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.1s;
  line-height: 0;

  display: flex;
  gap: 0.25rem;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme.purple};
    line-height: 0;
  }
`;
export const CartProductPrice = styled.span`
  display: block;
  text-align: right;
  flex: 1;
  color: ${(props) => props.theme["base-text"]};
  ${(props) => props.theme.typograph.textBoldM}
`;
