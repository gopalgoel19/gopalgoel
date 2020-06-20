// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout";
import { Navbar } from "../components/navbar";

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
    <Layout location={location} title={siteTitle}>
      <Navbar />
    </Layout>
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
