import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import { ThemeContext } from "../components/themeContext";
import SEO from "../components/seo";

const Projects = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <ThemeContext>
      <Layout location={location} title={siteTitle}>
        <SEO title="projects" />
        <h2>Projects</h2>
      </Layout>
    </ThemeContext>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
