import * as React from "react";
import { light } from "../themes/light";

export const Context = React.createContext(light);

export const ThemeContext = props => {
  console.log(light);
  return <Context.Provider value={light}>{props.children}</Context.Provider>;
};
