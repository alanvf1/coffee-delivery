import styled from "styled-components";

export const HomeIntro = styled.div`
  padding: 5.875rem 0;

  display: flex;
  flex-wrap: wrap;
  gap: 3.5rem;

  @media (max-width: 767px) {
    padding: 2rem 0;
  }
`;

export const HomeIntroText = styled.div`
  flex: 1;

  > h1 {
    ${(props) => props.theme.typograph.titleXL}
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }
  > p {
    color: ${(props) => props.theme["base-subtitle"]};
    ${(props) => props.theme.typograph.textRegularL}
  }
`;

export const HomeIntroItemsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
`;

export const HomeIntroItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ITEM_BACKGROUND_COLOR = {
  yellow: "yellow",
  "yellow-dark": "yellow-dark",
  gray: "base-text",
  purple: "purple",
};

interface HomeIntroItemIconProps {
  $background: keyof typeof ITEM_BACKGROUND_COLOR;
}

export const HomeIntroItemIcon = styled.span<HomeIntroItemIconProps>`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.theme[ITEM_BACKGROUND_COLOR[props.$background]]};
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeIntroItemText = styled.span`
  ${(props) => props.theme.typograph.textRegularM}
  color: ${(props) => props.theme["base-text"]}
`;

export const HomeIntroImage = styled.img`
  width: 29.75rem;
  max-width: 100%;
`;

export const CoffeeList = styled.div`
  h2 {
    ${(props) => props.theme.typograph.titleL}
    color: ${(props) => props.theme["base-subtitle"]};
    margin: 2rem 0 3.375rem;
  }
`;

export const CoffeeListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
