import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import GlobalStyle from "@styles/GlobalStyles";
import { StyledThemeProvider } from "@styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
}

export default MyApp;
