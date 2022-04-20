import styled from "styled-components";

export interface Props {
  isActive?: boolean;
}

export const Container = styled.div<Props>`
  position: relative;
  display: inline-flex;
  align-items: center;

  a {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  :before {
    content: "";
    width: 100%;
    height: 0.3rem;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 0.3rem 0.3rem 0 0;
    background-color: ${({ theme }) => theme.colors.primary[50]};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition: opacity 0.2s ease-out;
  }

  :hover::before,
  :active::before {
    opacity: 1;
  }
`;
