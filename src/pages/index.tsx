// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link, graphql } from "gatsby";
import Layout from "../components/layout";

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
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
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
