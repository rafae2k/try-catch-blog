import "styled-components";

type PrimaryColors = {
  100: string;
  90: string;
  80: string;
  50: string;
  20: string;
  10: string;
};

type SecondaryColors = {
  100: string;
  90: string;
  80: string;
  50: string;
  20: string;
  10: string;
};

type NeutralColors = {
  white: string;
  black: string;
  100: string;
  90: string;
  80: string;
  50: string;
  20: string;
  10: string;
};

declare module "styled-components" {
  export interface BaseTheme {
    colors: {
      neutral: NeutralColors;
    };
  }

  export interface DefaultTheme extends BaseTheme {
    title: "dark" | "light";
    colors: {
      neutral: NeutralColors;
      background: string;
      heading: string;
      body: string;
      primary: PrimaryColors;
      secondary: SecondaryColors;
    };
  }
}
