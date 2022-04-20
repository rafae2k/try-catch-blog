import { addDecorator } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { StyledThemeProvider } from "@styles/theme";
import GlobalStyle from "@styles/GlobalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: "/",
    asPath: "/",
    push() {},
  },
};

addDecorator((story) => (
  <StyledThemeProvider>
    <GlobalStyle />
    {story()}
  </StyledThemeProvider>
));
