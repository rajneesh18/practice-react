import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink
        // className={({ isActive, isPending, isTransitioning }) =>
        //   [
        //     isPending ? "pending" : "",
        //     isActive ? "active" : "",
        //     isTransitioning ? "transitioning" : "",
        //   ].join(" ")
        // }

        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink to="/posts">Post Page</NavLink>
    </header>
  );
};

export default Header;
