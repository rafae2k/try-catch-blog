import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Header = styled.h1`
  background-color: red;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home | Try...Catch </title>
      </Head>
      <Header>Hello rafo</Header>
    </>
  );
};

export default Home;
