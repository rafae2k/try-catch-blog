import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import GlobalStyle from "@styles/GlobalStyles";
import { StyledThemeProvider } from "@styles/theme";
import NextNProgress from "nextjs-progressbar";
import { useTheme } from "@styles/theme";

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
