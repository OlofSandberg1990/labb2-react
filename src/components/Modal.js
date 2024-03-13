import React, { useState, useEffect } from "react"; // Importera useState och useEffect från react-biblioteket
import "./Modal.css";
import EasterPic from "../images/easterEggPic.jpg";

function Modal() {
  // Skapar en const för att hålla koll på om modalen är synlig eller ej och sätter den till "false"
  const [showModal, setShowModal] = useState(false);

  // Skapar en sträng för att hålla koll på vilka knappar som tryckts ner. Deklarerar den som tom.
  const [typedKeys, setTypedKeys] = useState("");

  // En funktion för att stänga modalen (sätta den som false)
  const handleCloseClick = () => {
    setShowModal(false);
  };

  // En funktion som körs varje gång en tangent trycks ner.
  const handleKeyPress = (event) => {
    // Här lägger vi till den senaste tryckta tangenten till prevTypedKeys
    setTypedKeys((prevTypedKeys) => prevTypedKeys + event.key);
  };

  useEffect(() => {
    // Kontrollera om de fyra sista inmatade tangenterna är "1337" efter varje tangenttryckning
    if (typedKeys.slice(-4) === "1337") {

    //Om så är fallet så sätts modalen som "true" och visas...
      setShowModal(true);

      //...Och rensar de inmatade tangenterna igen
      setTypedKeys(""); 
    }
  }, [typedKeys]); // Denna effekt körs när 'typedKeys' ändras


  useEffect(() => {
    // Här anropar vi funktionen handleKeyPress varje gång användaren trycker ner en tangent 
    window.addEventListener("keydown", handleKeyPress);

    // och sedan en funktion för att rensa upp handleKeyPress
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); 
  
  // Om modalen inte är synlig, så visa ingenting.
  if (!showModal) return null;

  //Annars retunera koden nedan
  return (
    <div className="modalPopUp">
      <a href="#" className="close-button" id="close-btn" onClick={handleCloseClick}>
        &#10006; 
      </a>
      <h2>Du hittade påskägget</h2> 
      <img src={EasterPic} alt="Easter Egg" className="easterImg" /> 
    </div>
  );
}

export default Modal; 
