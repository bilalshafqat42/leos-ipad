import React from "react";
import "./meydan.css";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import LeftSidebar from "../../../components/meydan/leftsidebar/LeftSidebar";
import BottomNavigation from "../../../components/meydan/bottomNavigation/BottomNavigation";

const DubaimapKnightsbridge = () => {
  return (
    <section className="">
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">DUBAI MAP </h1>
            </Link>
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
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containing">
              <div id="slide">
                <div className="items knightsbridge-map-one-slide"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeftSidebar />
      <BottomNavigation />
    </section>
  );
};

export default DubaimapKnightsbridge;
