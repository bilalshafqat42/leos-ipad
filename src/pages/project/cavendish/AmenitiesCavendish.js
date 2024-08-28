import React from "react";
import "./cavendish.css";

import LeftSidebar from "../../../components/cavendish/leftsidebar/LeftSidebar";
import BottomNavigationBar from "../../../components/cavendish/bottomNavigation/BottomNavigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

const AmenitiesCavendish = () => {
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
              <h1 className="mt-4 mb-2 page-heading-title">CAVENDISH SQUARE</h1>
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
                <div className="items cavendish-amenities-one-slide-sixteen">
                  <div className="content">
                    <div className="name">ALFRESCO ENTERTAINING</div>
                    <div className="des">
                      The rooftop is the perfect place to entertain guests.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-seventeen">
                  {/* <div className="content">
                    <div className="name">ALFRESCO ENTERTAINING</div>
                    <div className="des">
                      The rooftop is the perfect place to entertain guests.
                    </div>
                  </div> */}
                </div>
                <div className="items cavendish-amenities-one-slide-eighteen">
                  {/* <div className="content">
                    <div className="name">ALFRESCO ENTERTAINING</div>
                    <div className="des">
                      The rooftop is the perfect place to entertain guests.
                    </div>
                  </div> */}
                </div>
                <div className="items cavendish-amenities-one-slide-ninteen">
                  {/* <div className="content">
                    <div className="name">ALFRESCO ENTERTAINING</div>
                    <div className="des">
                      The rooftop is the perfect place to entertain guests.
                    </div>
                  </div> */}
                </div>
                <div className="items cavendish-amenities-one-slide-one">
                  <div className="content">
                    <div className="name">A SERENE LOBBY</div>
                    <div className="des">
                      The beautiful lobby features a fusion of special design
                      elements and materials.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-two">
                  <div className="content">
                    <div className="name">STUNNING DESIGNS</div>
                    <div className="des">
                      The lobby is home to a stunning olive tree and petal-like
                      feature lighting.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-three">
                  <div className="content">
                    <div className="name">INSPIRED INTERIORS</div>
                    <div className="des">
                      The lobby also features fire glazed tiles with elegant
                      wood and gold detailing.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-four">
                  <div className="content">
                    <div className="name">CO-WORKING SPACE </div>
                    <div className="des">
                      This space reflects the design DNA of LEOS to provide a
                      tranquil setting for co-working.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-five">
                  <div className="content">
                    <div className="content">
                      <div className="name">SWIMMING POOL</div>
                      <div className="des">
                        Relax and unwind at the swimming pool and enjoy lush
                        landscaped surroundings.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-six">
                  <div className="content">
                    <div className="name">A STATE-OF-THE-ART GYM </div>
                    <div className="des">
                      A spacious modern gym with the latest equipment.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-seven">
                  <div className="content">
                    <div className="name">LEOS BOXING & DANCE STUDIO</div>
                    <div className="des">
                      The gym also features a boxing and dance studio for
                      fitness enthusiasts.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-eight">
                  <div className="content">
                    <div className="name">LEOS BOXING STUDIO</div>
                    <div className="des">
                      Get your adrenalin rush in our state-of-the-art boxing
                      studio.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-nine">
                  <div className="content">
                    <div className="name">HIMALAYAN TEA HOUSE</div>
                    <div className="des">
                      This beautiful indoor area serves a variety of teas &
                      herbal infusions.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-ten">
                  <div className="content">
                    <div className="name">ROOFTOP GARDEN</div>
                    <div className="des">
                      Home to a zen garden and a stunning water feature.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-eleven">
                  <div className="content">
                    <div className="name">ROOFTOP CINEMA</div>
                    <div className="des">
                      Enjoy movie nights alfresco on the rooftop garden.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-twelve">
                  <div className="content">
                    <div className="name">BBQ AREA </div>
                    <div className="des">
                      Enjoy cooking and dining with friends & family on the
                      rooftop.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-thirteen">
                  <div className="content">
                    <div className="name">BELLA NAPOLI PIZZERIA</div>
                    <div className="des">
                      The perfect place to make your own homemade Italian
                      pizzas.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-fourteen">
                  <div className="content">
                    <div className="name">VERTICAL GARDEN</div>
                    <div className="des">
                      Grow your own organic herbs and vegetables at our urban
                      farm.
                    </div>
                  </div>
                </div>
                <div className="items cavendish-amenities-one-slide-fifteen">
                  <div className="content">
                    <div className="name">ROOFTOP LIVING</div>
                    <div className="des">
                      Relax and unwind in lush green surroundings with lovely
                      views.
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
      {/* </div> */}
    </section>
  );
};

export default AmenitiesCavendish;
