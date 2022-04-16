import SignInButton from "@components/SignInButton";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Container, Logo, HamburgerMenu, Nav, NavMenu } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo src="/images/logo.svg" alt="Try...catch logo" />

        <HamburgerMenu />

        <NavMenu>
          <NavLink isActive>
            <a href="/">Home</a>
          </NavLink>
          <NavLink>
            <a href="#">Posts</a>
          </NavLink>
        </NavMenu>

        <SignInButton />
      </Nav>
    </Container>
  );
};
