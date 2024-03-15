import styled from "styled-components";

export const AddressForm = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;

  address {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    margin-bottom: 2rem;
    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
    > div {
      span {
        display: block;
        &:first-child {
          color: ${(props) => props.theme["base-subtitle"]};
          ${(props) => props.theme.typograph.textRegularM};
        }

        &:last-child {
          color: ${(props) => props.theme["base-text"]};
          ${(props) => props.theme.typograph.textS};
        }
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const PaymentForm = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  > div:first-child {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    margin-bottom: 2rem;
    svg {
      color: ${(props) => props.theme["purple"]};
    }
    > div {
      span {
        display: block;
        &:first-child {
          color: ${(props) => props.theme["base-subtitle"]};
          ${(props) => props.theme.typograph.textRegularM};
        }

        &:last-child {
          color: ${(props) => props.theme["base-text"]};
          ${(props) => props.theme.typograph.textS};
        }
      }
    }
  }
`;

export const PaymentMethod = styled.button`
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  border-radius: 6px;
  padding: 1rem;
  text-transform: uppercase;
  ${(props) => props.theme.typograph.buttonM};
  line-height: 0;
  min-width: 11rem;
  transition: all 0.2s;
  cursor: pointer;

  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-start;
  flex: 1;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme.purple};
    line-height: 0;
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
  &.active {
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme.purple};
  }
`;
