import { DefaultTheme } from "styled-components";
import { common } from "@styles/theme/common";

const light: DefaultTheme = {
  title: "light",
  colors: {
    neutral: { ...common.colors.neutral },
    background: "#FFFFFF",
    body: "#737373",
    heading: "#303030",
    primary: {
      100: "#662347",
      90: "#802c59",
      80: "#b33d7d",
      50: "#ff57b2",
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

export { light };
