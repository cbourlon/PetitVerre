import PrivateTastingSection from "../components/PrivateTastingComponents/PrivateTastingSection";
import { useState, useEffect } from "react";
import StartFirebase from "../firebase-config";
import { ref, onValue, off } from "firebase/database";

function Beertasting() {
  const [privatetastingData, setPrivateTastingData] = useState([""]);

  useEffect(() => {
    const database = StartFirebase();
    const privatetastingRef = ref(database, "Privatetasting");

    const fetchData = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setPrivateTastingData(data);
        console.log(data);
      }
    };

    onValue(privatetastingRef, fetchData);

    return () => {
      off(privatetastingRef, fetchData);
    };
  }, []);

  return <PrivateTastingSection data={privatetastingData} />;
}

export default Beertasting;
