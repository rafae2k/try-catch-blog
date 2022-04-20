import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "@styles/GlobalStyles";
import { StyledThemeProvider, useTheme } from "@styles/theme";
import NextNProgress from "nextjs-progressbar";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider>
      <NextNProgress color={theme.colors.primary[50]} />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
}

export default MyApp;
