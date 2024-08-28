import React from "react";
import "./weybridge.css";

import LeftSidebar from "../../../components/weybridge/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/weybridge/bottomNavigation/BottomNavigationBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const WeybridgeGardens = () => {
  const handleRightNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").appendChild(lists[0]);
  };
  const handleLeftNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
  return (
    <section className="">
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">
                WEYBRIDGE GARDENS
              </h1>
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
      {/* </div> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containing">
              <div id="slide">
                <div className="items amenities-exterior-one-slide-fourteen">
                  <div className="content">
                    <div className="name">LOBBY</div>
                    <div className="des">Excellence through design</div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-one">
                  <div className="content">
                    <div className="name">ROOFTOP LIVING</div>
                    <div className="des">
                      At Weybridge Gardens residents will enjoy an iconic
                      rooftop with a plethora of amenities.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-seventeen">
                  <div className="content">
                    <div className="name">A trendy lifestyle community</div>
                    <div className="des">
                      Enjoy over 20 different amenities at weybridge gardens{" "}
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-two">
                  <div className="content">
                    <div className="name">SWIMMING POOL DECK</div>
                    <div className="des">
                      The rooftop area features a beautiful pool deck with a
                      swimming pool.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-three">
                  <div className="content">
                    <div className="name">OUTDOOR CINEMA</div>
                    <div className="des">
                      Embrace evenings watching movies at our poolside outdoor
                      cinema.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-four">
                  <div className="content">
                    <div className="name">ROOFTOP LOUNGE AREA </div>
                    <div className="des">
                      Hang out with friends by day or by night alfresco at our
                      outdoor lounge area.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-twenty">
                  <div className="content">
                    <div className="name">alfresco living</div>
                    <div className="des">
enjoy world-class rooftop amenities 365 days a year.                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-five">
                  <div className="content">
                    <div className="name">GYMNASIUM & DANCE ACADEMY </div>
                    <div className="des">
                      Get your adrenalin pumping in our state-of-the-art gym and
                      LEOS Dance Academy.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-ninteen">
                  <div className="content">
                    <div className="name">boxing academy</div>
                    <div className="des">
                      At leos' boxing academy you can get your adrenalin
                      pumping.
                    </div>
                  </div>
                </div>
                <div className="items lifestyle-one-slide-five">
                  <div className="content">
                    <div className="name">leos dancing art academy</div>
                    <div className="des">
                      At leos' boxing academy you can get your adrenalin
                      pumping.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-six">
                  <div className="content">
                    <div className="name">ROOFTOP ENTRANCE & ELEVATORS</div>
                    <div className="des">
                      Our rooftop welcomes you with a bright modern design.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-seven">
                  <div className="content">
                    <div className="name">
                      ZEN JAPANESE GARDEN & himalayan tea house
                    </div>
                    <div className="des">
                      Practice yoga and meditation in our Japanese inspired zen
                      garden and disconnect from the world.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-eight">
                  <div className="content">
                    <div className="name">AN URBAN FARM</div>
                    <div className="des">
                      Located on the rooftop our urban farm will grow fresh
                      organic produce.
                    </div>
                  </div>
                </div>
                {/* <div className="items amenities-exterior-one-slide-nine">
                  <div className="content">
                    <div className="name">ROOFTOP ENTRANCE & ELEVATORS</div>
                    <div className="des">
                      Our rooftop welcomes you with a bright modern design.
                    </div>
                  </div>
                </div> */}
                <div className="items amenities-exterior-one-slide-sixteen">
                  <div className="content">
                    <div className="name">Como lounge cafe </div>
                    <div className="des">
                      Enjoy juices & smoothies, salads & healthy snacks at our
                      modern cafe.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-ten">
                  <div className="content">
                    <div className="name">
                      CO-WORKING SPACE & Ai supermarket
                    </div>
                    <div className="des">
                      Work remotely from our smartly designed co-working space
                      and network with other professionals.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-eleven">
                  <div className="content">
                    <div className="name">CHANGING ROOMS</div>
                    <div className="des">
                      Changing rooms and showers make it easy for you to freshen
                      up after any sports activities.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-twelve">
                  <div className="content">
                    <div className="name">LOBBY & MAIN ENTRANCE</div>
                    <div className="des">
                      Residents and guests are welcomed by a modern, trendy
                      lobby with 24 hr security.
                    </div>
                  </div>
                </div>
                <div className="items amenities-exterior-one-slide-thirteen">
                  <div className="content">
                    <div className="name">LOBBY</div>
                    <div className="des">
                      Our lobby features comfortable seating areas while you
                      wait for your uber.
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <button id="prev" onClick={handleLeftNavigation}>
                    <i className="fa-solid fa-angle-left">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="icons-section-bottom-navigation"
                      />
                    </i>
                  </button>
                  <button id="next" onClick={handleRightNavigation}>
                    <i className="fa-solid fa-angle-right">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="icons-section-bottom-navigation"
                      />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeftSidebar />
      <BottomNavigationBar />
    </section>
  );
};

export default WeybridgeGardens;
