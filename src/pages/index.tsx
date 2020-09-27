// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout";
import { Navbar } from "../components/navbar";
import SEO from "../components/seo";
import { ThemeContext } from "../components/themeContext";

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Index = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <ThemeContext>
      <Layout location={location} title={siteTitle}>
        <SEO title="home" />
        <Navbar />
      </Layout>
    </ThemeContext>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
