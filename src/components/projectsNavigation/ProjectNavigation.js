import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectsNavigations } from "../../db/projectsNavigation";
import { Link } from "react-router-dom";

import "./projectNavigation.css";

const ProjectNavigation = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="bottom-navigation-section">
      <div className="d-flex navigation-section">
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {projectsNavigations.map((projectsNavigation, index) => {
              return (
                <motion.div className="item" key={index}>
                  {
                    <>
                      <Link to={projectsNavigation.link}>
                        <img
                          src={projectsNavigation.imageURL}
                          alt="navigation"
                          className="bottom-navigation-section-image"
                        />
                        {/* <NavLink to={projectsNavigation.link}> */}
                        <h3 className="heading-item mt-2">
                          {projectsNavigation.title}
                        </h3>
                        {/* </NavLink> */}
                      </Link>
                    </>
                  }
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ProjectNavigation;
