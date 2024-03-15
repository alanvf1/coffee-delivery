import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 5rem;
  @media (max-width: 767px) {
    margin-top: 2rem;
  }
`;
export const SuccessTitle = styled.h1`
  ${(props) => props.theme.typograph.titleL}
  color: ${(props) => props.theme["yellow-dark"]}
`;
export const SuccessSubtitle = styled.p`
  ${(props) => props.theme.typograph.textRegularL}
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 2.5rem;
`;

export const SuccessMain = styled.div`
  display: flex;
  gap: 6.375rem;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    gap: 2rem;
  }
`;
export const SuccessContent = styled.div`
  background-color: ${(props) => props.theme.background};
  position: relative;
  flex: 1;
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  &::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    content: "";
    z-index: -1;
    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
  }
`;

export const SucessContentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ITEM_BACKGROUND_COLOR = {
  yellow: "yellow",
  "yellow-dark": "yellow-dark",
  gray: "base-text",
  purple: "purple",
};

interface SucessContentItemIconProps {
  $background: keyof typeof ITEM_BACKGROUND_COLOR;
}

export const SucessContentItemIcon = styled.span<SucessContentItemIconProps>`
  width: 2rem;
  min-width: 2rem;
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

export const SucessContentItemText = styled.span`
  display: block;
  ${(props) => props.theme.typograph.textRegularM}
  color: ${(props) => props.theme["base-text"]}
`;

export const SuccessImage = styled.img`
  width: 30.75rem;
  max-width: 100%;
  margin: 0 auto;
  @media (max-width: 991px) {
    width: 20rem;
  }
`;
