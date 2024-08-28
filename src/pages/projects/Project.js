import React from "react";
import "./project.css";

import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
// import MainBannerImage from "../../assets/images/hadley-heights-main-banner-image.jpg";

import ProjectNavigation from "../../components/projectsNavigation/ProjectNavigation";

const Project = () => {
  return (
    <section className="project-section">
      <div className="container-fluid home-page-topbar">
        <div className="row">
          <div className="col">
            <div className="main-mini-heading-sections">
              <h1 className="mt-4 mb-2 page-heading-title">
                <Link to="/">LEOS PROJECTS</Link>
              </h1>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Leos International"
                  width={130}
                  height={40}
                  className="mt-3 mb-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container"> */}
      <div className="row">
        <div className="col">
          {/* <h2 className="mt-5">Properties Page</h2> */}
          <div className="main-banner-properties-page">
          </div>
        </div>
      </div>
      {/* </div> */}
      <ProjectNavigation />
      {/* <Navigation /> */}
    </section>
  );
};

export default Project;
