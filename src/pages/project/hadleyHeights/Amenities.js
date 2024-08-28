import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";
import "./exterior.css";

const Amenities = () => {
  const handleRightNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").appendChild(lists[0]);
  };
  const handleLeftNavigation = () => {
    let lists = document.querySelectorAll(".items");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };
  return (
    <section className="exterior-page-section">
      {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="col">
        <div className="main-mini-heading-sections">
            <h1 className="mt-2 page-heading-title">
              <Link to="/">HADLEY HEIGHTS AMENITIES</Link>
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
      {/* </div> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="containing hadley-heights-main">
              <div id="slide">
                <div className="items exterior-one-slide-twenty-nine">
                  <div className="content">
                    <div className="name">COMO LOUNGE CAFE</div>
                    <div className="des">
                      Enjoy a selection of refreshments & light bites at our
                      organic café.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twelve">
                  <div className="content">
                    <div className="name">MAIN LOBBY </div>
                    <div className="des">
                      A beautiful contemporary lobby welcomes you.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-thirteen">
                  <div className="content">
                    <div className="name">LOBBY </div>
                    <div className="des">
                      Residents and guests can enjoy comfortable seating areas.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-fourteen">
                  <div className="content">
                    <div className="name">CO-WORKING SPACE</div>
                    <div className="des">
                      The lobby features a co-working space for remote working
                      professionals.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-fifteen">
                  <div className="content">
                    <div className="name">LEOS CLUBHOUSE</div>
                    <div className="des">
                      The lobby features a co-working space for remote working
                      professionals.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-sixteen">
                  <div className="content">
                    <div className="name">A GYMNASIUM</div>
                    <div className="des">
                      Residents will enjoy a fully-equipped gymnasium with the
                      latest equipment.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-seventeen">
                  <div className="content">
                    <div className="name">SWIMMING POOL</div>
                    <div className="des">
                      Swim, sunbathe, relax and unwind at the community swimming
                      pool.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-eighteen">
                  <div className="content">
                    <div className="name">ZEN JAPANESE GARDEN</div>
                    <div className="des">
                      Meditate, read, practice yoga and find your zen in the
                      Japanese inspired garden.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-ninteen">
                  <div className="content">
                    <div className="name">OUTDOOR CINEMA</div>
                    <div className="des">
                      Enjoy balmy evenings at our outdoor cinema with friends
                      and family.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty">
                  <div className="content">
                    <div className="name">VERTICAL FARM</div>
                    <div className="des">
                      Grow your own organic produce and educate your little ones
                      about sustainability.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty-one">
                  <div className="content">
                    <div className="name">LEOS BOXING ACADEMY</div>
                    <div className="des">
                      Perfect for boxing enthusiasts, adrenalin junkies and
                      fitness lovers.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty-two">
                  <div className="content">
                    <div className="name">LEOS DANCE STUDIO </div>
                    <div className="des">
                      A studio designed for children and adults who love to
                      dance.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty-three">
                  <div className="content">
                    <div className="name">LEOS DA VINCI ART ACADEMY</div>
                    <div className="des">
                      Get creative in our dedicated art academy with a variety
                      of workshops.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty-four">
                  <div className="content">
                    <div className="name">KIDS DAY CARE & NURSERY </div>
                    <div className="des">
                      The perfect space for your little ones to play and engage
                      with other children.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty-five">
                  <div className="content">
                    <div className="name">AI SUPERMARKET</div>
                    <div className="des">
                      Powered by AI, get access to all your daily essentials.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty-six">
                  <div className="content">
                    <div className="name">A SAUNA</div>
                    <div className="des">
                      De-stress and rejuvenate your mind, body and soul in the
                      sauna.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty-seven">
                  <div className="content">
                    <div className="name">HIMALAYAN TEA HOUSE</div>
                    <div className="des">
                      Enjoy an iced tea or an oriental infusion at our tea
                      kiosk.
                    </div>
                  </div>
                </div>
                <div className="items exterior-one-slide-twenty-eight">
                  <div className="content">
                    <div className="name">BELLA NAPOLI PIZZERIA</div>
                    <div className="des">
                      Cook your freshly made pizzas in our community pizza oven.
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
      <ProjectBottomBar />
    </section>
  );
};

export default Amenities;
