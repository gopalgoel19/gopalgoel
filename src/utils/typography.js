import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";
import { light } from "../themes/light";

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "*": {
      color: light.secondary,
    },
    a: {
      color: light.primary,
    },
    body: {
      backgroundColor: light.background,
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
