import { useState } from "react";

import { GiCheckMark } from "react-icons/gi";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import "./CoursesLists.css";

const CoursesLists = () => {
  const [seeBasicCourse, setSeeBasicCourse] = useState(false);
  const [seeAdvanceCourse, setSeeAdvanceCourse] = useState(false);

  return (
    <div className="course-list">
      <h3 className="animate__animated animate__zoomInUp about">COURSE PLAN</h3>
      <div className="course-item">
        <div className="course-card">
          <div className="course-card-body">
            <h5 className="course-card-title">Basic Course</h5>
            <ul>
              <li>
                <GiCheckMark size={25} />
                <span>Threading</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Facial</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Pedicure</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Menicure</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Waxing</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Straight cut</span>
              </li>
              {seeBasicCourse && (
                <>
                  <li>
                    <GiCheckMark size={25} />
                    <span>U cut</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Baby cut</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Megandhi</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Head Massage</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Hair dye</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Basic Makeup</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setSeeBasicCourse(!seeBasicCourse)}
          >
            {seeBasicCourse ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
          </button>
        </div>

        <div className="course-card">
          <div className="course-card-body">
            <h5 className="course-card-title">Advance Course</h5>
            <ul>
              <li>
                <GiCheckMark size={25} />
                <span>Feather cut</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Layer cut</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Step cut</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Aroma facial</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Treatment facials</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Pedi spa</span>
              </li>
              {seeAdvanceCourse && (
                <>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Hand polishing</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Hair spa</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Straightening</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Smoothening</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>Hair colouring</span>
                  </li>
                  <li>
                    <GiCheckMark size={25} />
                    <span>HD Makeup</span>
                  </li>
                </>
              )}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setSeeAdvanceCourse(!seeAdvanceCourse)}
          >
            {seeAdvanceCourse ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
          </button>
        </div>

        <div className="course-card">
          <div className="course-card-body">
            <h5 className="course-card-title">Updation Course</h5>
            <ul>
              <li>
                <GiCheckMark size={25} />
                <span>Facial using Machines</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Hair colouring definition</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Waterproof Makeup</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Airbrush Makeup</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>Nail Art</span>
              </li>
              <li>
                <GiCheckMark size={25} />
                <span>International Hair do</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesLists;
