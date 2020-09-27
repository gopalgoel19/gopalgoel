import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import {ThemeContext} from "../components/themeContext";

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <ThemeContext>

    <Layout location={location} title={siteTitle}>
      <h2>About</h2>
    </Layout>
    </ThemeContext>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
