import React, { useState, useEffect } from "react";
import { ref, onValue, off } from "firebase/database";
import StartFirebase from "../firebase-config";
import FilterMenu from "../components/FilterMenu";
import AllProducts from "../components/ProductpageComponents/AllProducts";
import BeerComponent from "../components/BeerComponent";
import Beers from "../components/ProductpageComponents/Beers";
import Goodies from "../components/ProductpageComponents/Goodies";
import TastingBox from "../components/ProductpageComponents/TastingBox";
import ScrollToTop from "../components/ScrollToTop";

function Productpage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [beerData, setBeerData] = useState([""]);
  const [glassesData, setGlassesData] = useState([""]);
  const [tastingboxData, setTastingboxData] = useState([""]);

  const handleCategoryChange = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  useEffect(() => {
    const database = StartFirebase();
    const beerdataRef = ref(database, "Beers");
    const glassesdataRef = ref(database, "Glasses");
    const tastingboxdataRef = ref(database, "Tastingbox");

    const fetchDataBeers = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setBeerData(data);
      }
    };

    const fetchDataGlasses = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setGlassesData(data);
      }
    };

    const fetchDataTastingbox = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setTastingboxData(data);
      }
    };

    onValue(beerdataRef, fetchDataBeers);
    onValue(glassesdataRef, fetchDataGlasses);
    onValue(tastingboxdataRef, fetchDataTastingbox);

    return () => {
      off(beerdataRef, fetchDataBeers);
      off(glassesdataRef, fetchDataGlasses);
      off(tastingboxdataRef, fetchDataTastingbox);
    };
  }, []);

  return (
    <div className="Filtermenu text-white sm:pt-28">
      <FilterMenu onCategoryChange={handleCategoryChange} />
      {selectedCategory === "All" && (
        <AllProducts
          beers={beerData}
          tastingbox={tastingboxData}
          goodies={glassesData}
        />
      )}
      {selectedCategory === "Beers" && <Beers beers={beerData} />}
      {selectedCategory === "Tastingbox" && (
        <TastingBox tastingbox={tastingboxData} />
      )}
      {selectedCategory === "Goodies" && <Goodies goodies={glassesData} />}
      <ScrollToTop />
    </div>
  );
}

export default Productpage;
