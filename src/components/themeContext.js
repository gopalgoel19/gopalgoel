import * as React from "react";
import {light} from "../themes/light";

export const Context = React.createContext();

export const ThemeContext = (props) => (<Context.Provider value={light}>{props.children}</Context.Provider>)
