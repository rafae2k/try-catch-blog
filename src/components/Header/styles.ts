import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primary[50]};
  height: 7rem;
  z-index: 100;

  button {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 102.4rem;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 3rem;
  font-size: 1.6rem;
  height: 100%;
  margin-left: 5rem;
  width: 100%;

  div:nth-child(3) {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 1rem;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 3rem;
  width: auto;
  cursor: pointer;
`;

export const HamburgerMenu = styled(FiMenu)`
  color: ${({ theme }) => theme.colors.heading};
  width: 4.4rem;
  height: 4.4rem;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;
