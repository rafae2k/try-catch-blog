import React from "react";
import { Container } from "./styles";
import { FaGithub } from "react-icons/fa";

interface SignInButtonProps {
  children?: React.ReactNode;
}

const SignInButton: React.FC<SignInButtonProps> = () => {
  return (
    <Container>
      <FaGithub />
      Sign in with GitHub
    </Container>
  );
};

export default SignInButton;
