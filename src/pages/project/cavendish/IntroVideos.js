import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";

import BottomNavigationBar from "../../../components/cavendish/bottomNavigation/BottomNavigation";

import "./cavendish.css";

const IntroVideos = () => {
  return (
    <section className="exterior-page-section">
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">Intro Video </h1>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div
              className="containing-full-width embed-responsive embed-responsive-16by9"
              style={{ padding: "0px" }}
            >
              <iframe
                width="100%"
                height="100%"
                className="youtube-embed-section embed-responsive-item"
                src="https://www.youtube.com/embed/yWunRMBuuLE?si=vrkD3yFvczi7eLDx"
                title="Weybridge Gardens Intro Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <LeftSidebar /> */}
      <BottomNavigationBar />
      <div
        className="bottom-black-border"
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: "#232323",
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      ></div>
    </section>
  );
};

export default IntroVideos;
