import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query social {
      site {
        siteMetadata {
          social {
            twitter
            github
            instagram
          }
        }
      }
    }
  `);

  const { social } = data.site.siteMetadata;
  return (
    <footer style={{ marginTop: "auto" }}>
      <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>{" "}
      <a href={`https://github.com/${social.github}`}>Github</a>{" "}
      <a href={`https://instagram.com/${social.instagram}`}>Instagram </a>
    </footer>
  );
};

export default Footer;
