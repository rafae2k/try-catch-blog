import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1a1d23;
  border-bottom: 0.1rem solid #535353;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 102.4rem;
  padding: 1.6rem 0 0;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 3rem;
  font-size: 1.6rem;
  height: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 3rem;
  width: auto;
  margin-bottom: 1.6rem;
`;

export const HamburgerMenu = styled(FiMenu)`
  color: #fff;
  width: 4.4rem;
  height: 4.4rem;
  margin-bottom: 1.6rem;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;
