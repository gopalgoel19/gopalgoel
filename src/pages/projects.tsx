import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      Projects
    </Layout>
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
