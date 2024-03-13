import React from "react";
import profilePic from "../images/profilePic.jpg";

function About(){

    return(
       <>
       <section>
        <div className="info-box">
        <h4>Om mig</h4>

        <div className="text-content">
          <img
            src={profilePic}
            alt="Bild på Olof"
            className="profilePic"
          />

          <p>
            Jag heter Olof Sandberg, är 33 år gammal och föddes och växte upp i
            den vackra kuststaden Varberg. Idag bor jag i ett mysigt radhus
            tillsammans med min sambo Nina och vår älskade katt Pepsi, som
            ständigt ger oss glädje och sällskap. Mitt liv utanför arbetet är
            fyllt av en mängd intressen och passioner. Jag är en stor
            sportentusiast och finner stor glädje i att följa olika
            sportevenemang. Musik och film utgör också en stor del av min
            fritid, där jag kan dyka ner i olika världar och låta kreativiteten
            flöda. Frisbeegolf har blivit en favoritaktivitet där jag kan
            kombinera min kärlek för sport med att vara utomhus i naturen, något
            som alltid varit viktigt för mig. Professionellt har jag spenderat
            hela mitt yrkesliv på Gekås i Ullared, en plats som gett mig otaliga
            erfarenheter och möjligheter att växa. Jag började min karriär där
            som lagerarbetare, en roll som gav mig en solid grund och förståelse
            för detaljhandelns dynamik. Med tiden tog jag mig an utmaningar som
            sortimentsansvarig och arbetsledare, positioner som krävde både
            strategiskt tänkande och förmågan att leda team mot gemensamma mål.
            Min tid på Gekås har varit otroligt givande, men jag har alltid
            varit nyfiken på att lära mig nya saker och utvecklas personligen
            och professionellt. År 2023 tog jag ett stort steg i min karriär och
            livsresa genom att återvända till skolbänken för att omskola mig
            till systemutvecklare. Detta beslut speglar min önskan om att hålla
            jämna steg med den snabbt föränderliga teknikvärlden och min passion
            för innovation och problemlösning. Jag ser fram emot att dyka
            djupare in i programmeringens och teknikens värld, och att använda
            dessa nya färdigheter för att skapa lösningar som gör skillnad.
            Detta är en spännande ny början för mig, och jag är ivrig att se var
            denna väg kommer att leda.
          </p>
        </div>
      </div>
    </section>
       </>
        
        );
}
        

export default About