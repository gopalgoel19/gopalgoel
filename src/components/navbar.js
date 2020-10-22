import React from "react";
import { Link } from "gatsby";

export const Navbar = props => {
  return (
    <ul style={{ listStyle: "none", margin: 0 }}>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/blog">Blog</ListLink>
      <ListLink to="/projects">Projects</ListLink>
      <ListLink to="/wishlist">Wish List</ListLink>    
    </ul>
  );
};

const ListLink = props => (
  <li
    style={{
      display: "inline-block",
      marginRight: "10px",
    }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);
