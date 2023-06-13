import React from "react";
import HermitDrinkingSection from "../components/FrontpageComponents/HermitDrinkingSection";
import BeerPreviewSection from "../components/FrontpageComponents/BeerPreviewSection";
import AboutSection from "../components/FrontpageComponents/AboutSection";
import ContactSection from "../components/FrontpageComponents/ContactSection";
import { useState, useEffect } from "react";
import StartFirebase from "../firebase-config";
import { ref, onValue, off } from "firebase/database";

function Frontpage() {
  //State som skal indeholde data, indeholder empty string for at undgå errors såsom undefined
  const [frontpageData, setFrontpageData] = useState([""]);

  useEffect(() => {
    const database = StartFirebase(); // vi får fat i vores realtime data instans
    const frontpageRef = ref(database, "Frontpage"); //frontpageRef, vha ref, referer til den specifikke data "Frontpage"

    //her har jeg min kode som udfører processen i at hente dataen fra databasen og opdatere denne her komponents state "frontpageData" med dataen
    const fetchData = (snapshot) => {
      //parameteren snapshot repræsenterer et snapshot af dataen på tidspunktet denne her callbackfuktion bliver triggered
      if (snapshot.exists()) {
        //if snapsot.exists() giver en boolean værdi om der indeholder data eller ej
        const data = snapshot.val(); //.val metoden henter værdierne af dataen og gemmer det i konstanten data
        setFrontpageData(data); //vi gemmer dataen i sidste ende i vores state frontpageData
        console.log(data);
      }
    };

    //onValue er en metode fra firebase, som sætter en eventlistener op på vores specifikke lokation i dataen som vi angiver "frontpageRef". Den lytter efter ændringerne og trigger "fetchData funktionen"
    //onValue tager to argumenter: referencen der skal lyttes på, funktionen der skal køres når en ændring sker (callbackfunction, fetchData i det her tilfælde). En callbackfunction er en function der køres når en anden funktion bliver triggered/kørt
    onValue(frontpageRef, fetchData);

    //return køres når useeffekten er kørt færdigt, som afhænger af dependency arrayet
    //fungerer som en clean up funktion for at fjerne eventlisteners eller andet som var sat op under effektens udførelse
    return () => {
      //fjerner eventlisteneren når use-effekten er kørt (dependency arrayet) for at undgå at tage for meget hukommelse og ødelægge hjemmesidens performance
      off(frontpageRef, fetchData);
    };
  }, []);

  //Arrayet[hvilket objekt i arrayet].specifikkefeltiarrayet
  return (
    <main className="container" style={{ margin: "0 auto" }}>
      <h1 className="text-white">DATATEST:</h1>
      <h1 className="text-white">{frontpageData[1].secondSectionFirstBeer}</h1>

      <div className="HermitDrinkingSection md:pb-44">
        <HermitDrinkingSection data={frontpageData} />
      </div>

      <div className="BeerPreviewSection md:pb-20">
        <BeerPreviewSection data={frontpageData} />
      </div>

      <div className="AboutSection md:pb-20">
        <AboutSection data={frontpageData} />
      </div>

      <div className="ContactSection sm:pt-20 md:pt-10 lg:pt-20">
        <ContactSection data={frontpageData} />
      </div>
    </main>
  );
}
export default Frontpage;
