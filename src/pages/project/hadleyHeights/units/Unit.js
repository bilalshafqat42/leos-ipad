import React from "react";
import { useParams } from "react-router-dom";
import { firstFloors } from "../../../../db/firstFloor";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Unit = () => {
  const { id } = useParams();
  const [paramId, setParamId] = useState();
  const [filteredObject, setFilteredObject] = useState();

  console.log("data", firstFloors);

  useEffect(() => {
    setParamId(id);
  }, [id]);

  useEffect(() => {
    if (paramId) {
      const filteredItem = firstFloors.find((item) => item.id == paramId);
      setFilteredObject(filteredItem);
    }
  }, [paramId, id]);

  return (
    <section className="units-page-section-design">
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to={"/"}>
              <h1 className="mt-4 mb-2 page-heading-title">Unit</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row units-section-design">
          <div className="col-7">
            <div className="unit-images-left-side">
              <img
                src={filteredObject?.imageURL}
                alt="navigation"
                className="single-unit-page-images-section"
              />
            </div>
          </div>
          <div className="col-5">
            <div className="unit-description-section">
              <h2 className="unit-descripton-section-heading">
                {filteredObject?.propertyName}
              </h2>
              <table className="unit-description-section-block-list">
                <tr>
                  <th>Unit Number</th>
                  <td>{filteredObject?.unitNo}</td>
                </tr>
                <tr>
                  <th>Unit Type </th>
                  <td>{filteredObject?.bedrooms}</td>
                </tr>
                <tr>
                  <th>Availability </th>
                  <td
                    className={`${
                      filteredObject?.status === "Available"
                        ? "green-box"
                        : "red-box"
                    } w-100 px-2`}
                  >
                    {filteredObject?.status === "Available"
                      ? "Available"
                      : "Not Available"}
                  </td>
                </tr>
                <tr>
                  <th>Property Type </th>
                  <td>{filteredObject?.type}</td>
                </tr>
                <tr>
                  <th> View</th>
                  <td>{filteredObject?.view}</td>
                </tr>
                <tr>
                  <th> Floor</th>
                  <td>{filteredObject?.floor}</td>
                </tr>
                <tr>
                  <th> Bedroom </th>
                  <td>{filteredObject?.bedrooms}</td>
                </tr>
                <tr>
                  <th> Balcony Size </th>
                  <td>{filteredObject?.balconyArea} sq ft</td>
                </tr>
                <tr>
                  <th>Total Area </th>
                  <td>{filteredObject?.totalArea} sq ft</td>
                </tr>
                <tr>
                  <th>Price </th>
                  <td>{filteredObject?.price}</td>
                </tr>
              </table>
              <p className="unit-description-section-block-list"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="expereince-centre-bottom-copyright-panel">
        <div className="back-to-projects">
          <Link to={"/projects/hadley-heights/units"}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="icons-section-bottom-navigation"
            />
          </Link>
        </div>
        <div className="copyright-section">
          Ⓒ 2024 - LEOS International. All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Unit;
