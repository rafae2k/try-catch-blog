import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

type HeaderProps = {
  navUp?: boolean;
};

export const Container = styled.header<HeaderProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7rem;
  position: fixed;
  top: ${({ navUp }) => (navUp ? "-7rem" : "0")};
  transition: top 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primary[50]};
  z-index: 100;

  button {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
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

  div:nth-child(2) {
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
