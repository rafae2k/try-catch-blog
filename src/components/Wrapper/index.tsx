import React, { ReactNode } from "react";

import { Container } from "./styles";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <Container>{children}</Container>;
}

export default Wrapper;
