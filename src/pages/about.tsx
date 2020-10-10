import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import { ThemeContext } from "../components/themeContext";
import SEO from "../components/seo";

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <ThemeContext>
      <Layout location={location} title={siteTitle}>
        <SEO title="about" />
        <h2>About Me</h2>
        <p>
          I am a Software Engineer who works at <strong>Microsoft</strong>. 
          I love the internet and I am making it a productive place by creating web applications one at a time.
          I have worked on building <a href="https://www.microsoft.com/en-in/microsoft-365/microsoft-teams/group-chat-software">
          Microsoft Teams</a> and <a href="https://docs.microsoft.com/en-us/MicrosoftSearch/">Microsoft Search</a>.
          I work professionally with TypeScript, React, Redux, Webpack, etc. 
        </p>
        <p>
        I am also a student and am pursuing Master of Science in Computer Science from <strong>Georgia Institute of Technology</strong>.
        </p>
        <p>
        I live in city of <strong>Bangalore</strong> but I am originally form Calcutta. 
        I love Banglore for its perfect weather, amazing breweries and the entrepreneurial spirit around the city.
        </p>
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
