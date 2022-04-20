import React, { useEffect, useState } from "react";
import Link from "next/link";
import SignInButton from "@components/SignInButton";
import Toggle from "@components/Header/Toggle";
import NavLink from "@components/Header/NavLink";
import { Container, Logo, HamburgerMenu, Nav, NavMenu } from "./styles";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Container navUp={show}>
      <Nav>
        <Link href="/">
          <Logo src="/images/logo.svg" alt="Try...catch logo" />
        </Link>

        <HamburgerMenu />

        <NavMenu>
          <NavLink href="/">
            <a>Home</a>
          </NavLink>
          <NavLink href="/posts">
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
