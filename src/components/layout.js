import React from "react";
import { Link, useStaticQuery } from "gatsby";
import { Context } from "./themeContext";
import { rhythm, scale } from "../utils/typography";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const theme = React.useContext(Context);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);
  const { name } = data.site.siteMetadata.author;

  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}>
        <Link
          style={{
            boxShadow: `none`,
            color: theme?.secondary,
          }}
          to={`/`}>
          {title}{" "}
        </Link>{" "}
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}>
          {title}{" "}
        </Link>{" "}
      </h3>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        minHeight: "100vh",
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
      <header> {header} </header> <main> {children} </main>{" "}
      <footer style={{ marginTop: "auto" }}>
        {" "}
        &copy;{name}, Built with {` `}{" "}
        <a href="https://www.gatsbyjs.org"> Gatsby </a>{" "}
      </footer>{" "}
    </div>
  );
};

export default Layout;
