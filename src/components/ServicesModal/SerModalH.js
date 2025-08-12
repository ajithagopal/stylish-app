import { useState } from "react";
import { v4 } from "uuid";
import { FaAngleDoubleDown } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SerModalHTabItem from "./SerModalHTabItem";

import serH from "../../images/Services/serH.jpg";

import "./SerModal.css";

const hTabsList = [
  { tabId: "STRAIGHT", displayText: "Straight" },
  { tabId: "UCUT", displayText: "U cut" },
  { tabId: "VCUT", displayText: "V cut" },
  { tabId: "FEATHER", displayText: "Feather" },
  { tabId: "STEPCUT", displayText: "Step cut" },
  { tabId: "LAYER", displayText: "Layer" },
];

const hTabItem = [
  { id: v4(), category: "STRAIGHT", imageUrl: serH },
  { id: v4(), category: "UCUT", imageUrl: serH },
  { id: v4(), category: "VCUT", imageUrl: serH },
  { id: v4(), category: "FEATHER", imageUrl: serH },
  { id: v4(), category: "STEPCUT", imageUrl: serH },
  { id: v4(), category: "LAYER", imageUrl: serH },
];

function MyVerticallyCenteredModal(props) {
  const [activeTabId, setActiveTabId] = useState(hTabsList[0].tabId);

  const changeOptions = (event) => {
    setActiveTabId(event.target.value);
  };

  const filteredProject = hTabItem.filter((e) => e.category === activeTabId);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-hairc-cont"
    >
      <Modal.Header closeButton className="s-header">
        <Modal.Title id="contained-modal-title-vcenter" className="title">
          Haircut <span>Category</span>
        </Modal.Title>
        <ul className="gal-row">
          {filteredProject.map((projectDetails) => (
            <SerModalHTabItem
              key={projectDetails.id}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </Modal.Header>
      <Modal.Body>
        <select
          value={activeTabId}
          className="select-hair-cut"
          onChange={changeOptions}
        >
          {hTabsList.map((eachOption) => (
            <option
              key={eachOption.tabId}
              value={eachOption.tabId}
              className="option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function SerModalH() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <button
        type="button"
        className="brid-more-btn"
        onClick={() => setModalShow(true)}
      >
        <FaAngleDoubleDown size={25} />
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default SerModalH;
