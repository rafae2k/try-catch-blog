import { DefaultTheme } from "styled-components";
import { common } from "@styles/theme/common";

const dark: DefaultTheme = {
  title: "dark",
  colors: {
    neutral: { ...common.colors.neutral },
    background: "#1A1D23",
    body: "#D7D7D7",
    heading: "#F8F8F8",
    primary: {
      100: "#662347",
      90: "#802c59",
      80: "#b33d7d",
      50: "#FF57B2",
      20: "#ff89c9",
      10: "#ffbce0",
    },
    secondary: {
      100: "#041341",
      90: "#061957",
      80: "#082583",
      50: "#0d38c4",
      20: "#3e65e1",
      10: "#9fb2f0",
    },
  },
};

export { dark };
