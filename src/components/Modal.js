import React, { useState } from "react";
import "./Modal.css"
import EasterPic from "../images/easterEggPic.jpg";

function Modal() {
  // State variabel för att visa eller dölja modalen
  const [showModal, setShowModal] = useState(true);

  // Funktion för att hantera klick på krysset
  const handleCloseClick = () => {
    setShowModal(false);
  }

  // Returnera null om showModal är false
  if (!showModal) return null;

  return (
    <div className="modalPopUp">
      <a href="#" className="close-button" id="close-btn" onClick={handleCloseClick}>&#10006;</a>
      <h2>Du hittade påskägget</h2>
      <img src={EasterPic} alt="Easter Egg" className="easterImg" />
    </div>
  );
}

export default Modal;
