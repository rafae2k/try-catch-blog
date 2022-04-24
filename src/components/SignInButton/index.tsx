import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Container, UserAvatar } from "./styles";
import { MdOutlineLogout } from "react-icons/md";

interface SignInButtonProps {
  children?: React.ReactNode;
}

const SignInButton: React.FC<SignInButtonProps> = () => {
  const { data } = useSession();
  if (data) {
    return (
      <Container onClick={() => signOut()}>
        <UserAvatar
          src={data.user?.image as string}
          alt={data.user?.name as string}
        />
        <p>{data.user?.name}</p>
        <MdOutlineLogout />
      </Container>
    );
  }

  return (
    <Container onClick={() => signIn("github")}>
      <FaGithub />
      <p>Sign in with GitHub</p>
    </Container>
  );
};

export default SignInButton;
