import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Container } from "./styles";

export interface NavLinkProps extends LinkProps {
  children: ReactNode;
  isActive?: boolean;
}

function NavLink({ children, ...args }: NavLinkProps) {
  const { asPath } = useRouter();

  const isActive = asPath === args.href;

  return (
    <Container isActive={isActive}>
      <Link {...args}>{children}</Link>
    </Container>
  );
}

export default NavLink;
