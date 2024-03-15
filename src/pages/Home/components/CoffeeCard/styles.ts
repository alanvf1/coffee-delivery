import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
`;

export const CoffeeCardImage = styled.img`
  width: 7.5rem;
  max-width: 100%;
  display: block;
  margin: auto;
  margin-top: -1.25rem;
  margin-bottom: 0.75rem;
`;

export const CoffeeCardTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  span {
    display: inline-block;
    ${(props) => props.theme.typograph.tag}
    text-transform: uppercase;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`;

export const CoffeeCardName = styled.h3`
  ${(props) => props.theme.typograph.titleS}
  color: ${(props) => props.theme["base-subtitle"]};
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const CoffeeCardDescription = styled.p`
  ${(props) => props.theme.typograph.textS}
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
  margin-bottom: 2rem;
`;

export const CoffeeCardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CoffeeCardPrice = styled.div`
  span {
    ${(props) => props.theme.typograph.textS}
    color: ${(props) => props.theme["base-text"]};
    strong {
      ${(props) => props.theme.typograph.titleM}
    }
  }
`;
export const CoffeeCardForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;
