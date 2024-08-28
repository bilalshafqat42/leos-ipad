import React from "react";
import "./home.css";
import Logo from "../../assets/images/logo.png";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { Link } from "react-router-dom";

import "../project/hadleyHeights/exterior.css";

const Home = () => {
  return (
    <div className="main-page-banner">
      <div className="home-page-topbar">
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
                  width={98}
                  height={30}
                  className="mt-3 mb-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="home-page-image-section">
            <img src="../../assets/images/partnership-banner.jpg" className="main-banner-iamges-classes"/>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;
