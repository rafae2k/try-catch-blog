import { addDecorator } from "@storybook/react";
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
};

addDecorator((story) => (
  <StyledThemeProvider>
    <GlobalStyle />
    {story()}
  </StyledThemeProvider>
));
