import styled from "styled-components";
import { NavLinkProps } from ".";

export const Container = styled.div<NavLinkProps>`
  position: relative;
  display: flex;
  align-items: center;

  a {
    font-size: 1.6rem;
    font-weight: bold;
    color: #fff;
    padding-bottom: 1rem;
  }

  :before {
    content: "";
    width: 100%;
    height: 0.3rem;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 0.3rem 0.3rem 0 0;
    background-color: #ff57b2;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition: opacity 0.2s ease-out;
  }

  :hover::before,
  :active::before {
    opacity: 1;
  }
`;
