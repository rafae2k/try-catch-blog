import React from "react";
import { FaGithub } from "react-icons/fa";
import { Container } from "./styles";

interface SignInButtonProps {
  children?: React.ReactNode;
}

const SignInButton: React.FC<SignInButtonProps> = () => (
    <Container>
      <FaGithub />
      Sign in with GitHub
    </Container>
  );

export default SignInButton;
