import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "@styles/GlobalStyles";
import { StyledThemeProvider, useTheme } from "@styles/theme";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { theme } = useTheme();

  return (
    <SessionProvider session={session}>
      <StyledThemeProvider>
        <NextNProgress color={theme.colors.primary[50]} />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </StyledThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
