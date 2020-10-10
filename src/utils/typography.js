import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";
import { darkTheme } from "../themes/dark";

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "*": {
      color: darkTheme.secondary,
    },
    a: {
      color: darkTheme.primary,
      fontWeight: 1000,
    },
    body: {
      backgroundColor: darkTheme.background,
    },
    "img.gatsby-resp-image-image": {
      boxShadow: `none !important`,
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
