import styled from "styled-components";

export const CheckoutContainer = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
`;

export const CheckoutTitle = styled.h2`
  color: ${(props) => props.theme["base-subtitle"]};
  ${(props) => props.theme.typograph.titleXS};
  margin-bottom: 1rem;
`;

export const CheckoutBiggerColumn = styled.div`
  flex: 1;
`;

export const CheckoutSmallerColumn = styled.div`
  width: 28rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CheckoutCart = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  border-top-right-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckoutCartValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 0;
`;
export const CheckoutCartValuesItem = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => props.theme.typograph.textS}
  color: ${(props) => props.theme["base-text"]}
`;
export const CheckoutCartValuesTotal = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => props.theme.typograph.textBoldL}
  color: ${(props) => props.theme["base-subtitle"]}
`;

export const CheckoutSubmit = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  ${(props) => props.theme.typograph.buttonG}
  padding: 0.75rem;
  text-transform: uppercase;
  transition: all 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.yellow};
    }
  }
`;
