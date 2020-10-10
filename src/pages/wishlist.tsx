import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import { ThemeContext } from "../components/themeContext";
import SEO from "../components/seo";

const WishList = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <ThemeContext>
      <Layout location={location} title={siteTitle}>
        <SEO title="wishList" />
        <h2>Wish List</h2>
        <p>
            A list of items that I wish I had but haven't bought it yet. 
            This list should serve as a guide for friends and family to pick gifts for me.
        </p>
        <h4>Gadgets</h4>
        <ul>
            <li><a href="https://www.apple.com/in/ipad-air/">iPad Air</a></li>
            <li><a href="https://www.apple.com/in/iphone-se/">iPhone SE</a></li>
            <li><a href="https://gopro.com/en/in/shop/cameras/hero9-black/CHDHX-901-master.html">GoPro Hero9</a></li>
        </ul>
      </Layout>
    </ThemeContext>
  );
};

export default WishList;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
