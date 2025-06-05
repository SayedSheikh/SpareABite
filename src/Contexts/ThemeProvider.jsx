import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem("theme") || "light";
  localStorage.setItem("theme", defaultTheme);
  const [theme, setTheme] = useState(defaultTheme);
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
