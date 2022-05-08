import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "@styles/GlobalStyles";
import { StyledThemeProvider, useTheme } from "@styles/theme";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { Header } from "../components/Header";
import { motion } from "framer-motion";

function MyApp({
  Component,
  pageProps: { session, router, ...pageProps },
}: AppProps) {
  const { theme } = useTheme();

  return (
    <NextAuthSessionProvider session={session}>
      <StyledThemeProvider>
        <NextNProgress color={theme.colors.primary[50]} />
        <GlobalStyle />
        <Header />
        <motion.div
          key={Object.keys(pageProps)[0]}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              y: 100,
            },
            pageAnimate: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 0.8,
              },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </StyledThemeProvider>
    </NextAuthSessionProvider>
  );
}

export default MyApp;
