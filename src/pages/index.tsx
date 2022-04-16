import type { NextPage } from "next";
import Head from "next/head";
import { Wrapper } from "@components/Wrapper";
import GlobalStyle from "@styles/GlobalStyles";

import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title> Home | Try...Catch </title>
      </Head>

      <Header />
    </Wrapper>
  );
};

export default Home;
