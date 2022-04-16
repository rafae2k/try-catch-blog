import { ReactNode } from "react";

import { Container } from "./styles";

export interface NavLinkProps {
  children: ReactNode;
  isActive?: boolean;
}

function NavLink({ children, ...args }: NavLinkProps) {
  return <Container {...args}>{children}</Container>;
}

export default NavLink;
