import React, { useState } from "react";
import SignInButton from "@components/SignInButton";
import Toggle from "@components/Header/Toggle";
import NavLink from "@components/Header/NavLink";
import { Container, Logo, HamburgerMenu, Nav, NavMenu } from "./styles";
import Link from "next/link";

export const Header = () => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <Logo src="/images/logo.svg" alt="Try...catch logo" />
        </Link>

        <HamburgerMenu />

        <NavMenu>
          <NavLink href="/">
            <a>Home</a>
          </NavLink>
          <NavLink href="/posts" prefetch>
            <a>Posts</a>
          </NavLink>
          <div>
            <SignInButton />
            <Toggle />
          </div>
        </NavMenu>
      </Nav>
    </Container>
  );
};
