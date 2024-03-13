import React, { useState } from "react";
import welcomeImage from "../images/welcome.webp"; 


function Home() {

  //Skapar en ny variabel för att ändra min bakgrundsfärg
  const [bgColor, setBgColor] = useState("");

 
//Skapar en funktion som ändrar bakgrundsfärgen till orange.
//Om färgen redan är orange ska den sättas till tom, annars till orange
  const imgClick = () => {
    setBgColor(bgColor === "orange" ? "" : "orange");
  };

  return (
    <section style={{ backgroundColor: bgColor }}>
      <div className="info-box">
        <h4>Välkommen</h4>
        <div className="indexText">
                  
           
          
          <img
            src={welcomeImage}
            alt="Välkommen"
            className="welcomeImg"
            onClick={imgClick}
          />
          Välkommen till min digitala värld! Som student på min första resa in i
          webbutvecklingens fascinerande rike, är jag stolt över att presentera
          mitt allra första skolprojekt - en hemsida skapad med HTML och CSS.
          Denna sida är ett fönster till mina första steg som utvecklare, en
          plats där jag kan dela med mig av mina lärdomar, passioner och de
          projekt jag har arbetat på under min utbildning. Här finner du fem
          noggrant utformade sidor som representerar olika aspekter av mitt
          personliga och akademiska liv: Start: En översikt över webbplatsen och
          en inbjudan till dig att utforska mer. Om Mig: En personlig
          presentation där jag delar med mig av vem jag är, mina intressen och
          vad som driver mig i världen av teknik. CV: En detaljerad genomgång av
          mina akademiska meriter, arbetslivserfarenheter och de färdigheter jag
          samlat på mig. Portfolio: En samling av utvalda skolprojekt där jag
          har tillämpat mina kunskaper i praktiken. Här kan du se exempel på
          mitt arbete och de tekniska lösningar jag utvecklat. Övrigt: En sida
          dedikerad till mina passioner utanför kodningens värld - Bruce
          Springsteen och discgolf. En inblick i vad som ger mig inspiration och
          glädje bortom skärmen. Denna webbplats är inte bara ett bevis på min
          tekniska skicklighet, utan också en plats där jag kan uttrycka min
          kreativitet. Jag har valt att använda Google Fonts typsnittet Protest
          Riot för att ge sidan en unik och igenkännlig känsla. Dessutom är
          layouten designad för att vara tillgänglig och njutbar på både stora
          och små skärmar, vilket säkerställer en behaglig användarupplevelse
          oavsett enhet. Som nybörjare på denna resa välkomnar jag feedback och
          möjligheter att lära mig mer. Ta dig gärna en titt runt och upptäck
          vad jag har att erbjuda. Tack för att du besöker min sida!
        </div>
      </div>
    </section>
  );
}

export default Home;
