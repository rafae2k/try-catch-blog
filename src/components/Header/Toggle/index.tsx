import React, { useState } from "react";
import { useTheme } from "@styles/theme";
import DarkModeToggle from "react-dark-mode-toggle";

const Toggle: React.FC = () => {
  const { toggle, themeName } = useTheme();
  return (
    <DarkModeToggle
      onChange={toggle}
      checked={themeName === "dark"}
      size={60}
    />
  );
};

export default Toggle;
