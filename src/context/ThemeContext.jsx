/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  let [isDark, setIsDark] = useState(false);

  let theme = {
    "--bg-color": isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    "--bg-color-element": isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    "--text-color-input": isDark ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)",
    "--text-color": isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    "--icon-bg": isDark ? "brightness(0) invert(1)" : "brightness(100%)",
  };

  let values = {
    isDark,
    setIsDark,
    theme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
