import * as React from "react";
import { darkTheme } from "../themes/dark";

export const Context = React.createContext(darkTheme);

export const ThemeContext = props => {
  return <Context.Provider value={darkTheme}>{props.children}</Context.Provider>;
};
