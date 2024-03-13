import React from "react";
import cvData from "../json/cvData.json"; //Importerar json-filen
import imgSkills from "../images/skills.webp";
import imgExp from "../images/experience.webp";
import imgEdu from "../images/education.webp";
import imgContcat from "../images/contact.webp";
import "./CV.css";


function CV(){

    return(
        
        <section>
        <h4 className="h4-center">Kontakt</h4>
        <hr />
        <div className="contact-information">
          <p>Namn: Olof Sandberg</p>
          <p>
            Email:
            <a href="mailto:olof.sandberg1990@gmail.com"
              >olof.sandberg1990@gmail.com</a
            >
          </p>
          <p>Telefon: 0709162764</p>
          <div className="category">
            <img
              src= {imgSkills}
              alt="Tecknad bild på en utvecklare"
              className="categoryImage"
            />
          </div>
        </div>
        <br /><br />
  
        <div className="education-experience">
          <h4 id="header-education">Utbildning</h4>
          <hr />
          <div id="education">
            
            {cvData.education.map((edu, index) => 
            //Här packas education-arrayen upp från min json-fil med hjälp av .map(). 
            
            //För varje element skapas ett nytt div-element med en unik key(index)
            <div key={index}>
                <p>{edu.school} - {edu.program} - {edu.years}</p>
                </div>
            )}

          </div>
          
          <br />
          <div className="category">
            <img
              src={imgExp}
              alt="Tecknad bild på en man framför en tavla"
              className="categoryImage"
            />
          </div>
          <br /><br />
          <h4 id="header-experience">Erfarenheter</h4>
          <hr />
          <div id="workExperience">
            {cvData.workExperience.map((exp, index) => 
            //Samma som ovan, fast här hämtar vi workExperience istället
            <div key = {index}>
                <p>{exp.company} - {exp.position} - {exp.years} </p>
            </div>
            )}


          </div>
          <div className="category">
            <img
              src={imgEdu}
              alt="Tecknad bild på en man som föreläser"
              className="categoryImage"
            />
          </div>
        </div>
        <br /><br />
        <br />
        <div className="skills">
          <h4>Tekniker</h4>
          <hr />
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>C#</li>
            <li>SQL</li>
          </ul>
          <div className="category">
            <img
              src={imgContcat}
              alt="tecknad bild på två personer som pratar"
              className="categoryImage"
            />
          </div>
        </div>
      </section>



        );
}
        

export default CV