import React from "react";
import "./navigation.css";
import CarouselImage from "../../assets/images/hadley-heights-banner.jpg";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="bottom-navigation-section">
      <div className="container">
        <div className="d-flex navigation-section">
          <div className="row align-self-center ">
            <div className="col navigation-column-design">
              <Link to={"/projects"}>
                <img
                  src={CarouselImage}
                  alt="navigation"
                  className="bottom-navigation-section-image"
                />
              </Link>
              <NavLink to={"/projects"}>
                <h3>PROJECTS</h3>
              </NavLink>
            </div>
            <div className="col navigation-column-design">
              <Link to={"/projects"}>
                <img
                  src={CarouselImage}
                  alt="navigation"
                  className="bottom-navigation-section-image"
                />
              </Link>
              <NavLink to={"/projects"}>
                <h3>INTRO</h3>
              </NavLink>
            </div>
            <div className="col navigation-column-design">
              <Link to={"/projects"}>
                <img
                  src={CarouselImage}
                  alt="navigation"
                  className="bottom-navigation-section-image"
                />
              </Link>
              <NavLink to={"/projects"}>
                <h3>EXPERIENCE CENTRE</h3>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
