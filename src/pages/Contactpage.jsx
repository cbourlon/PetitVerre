import Formular from "../components/ContactpageComponents/Formular";
import { useState, useEffect } from "react";
import StartFirebase from "../firebase-config";
import { ref, onValue, off } from "firebase/database";

function Contactpage() {
  const [contactpageData, setContactpageData] = useState([""]);

  useEffect(() => {
    const database = StartFirebase();
    const contactpagegRef = ref(database, "Contactpage");

    const fetchData = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setContactpageData(data);
        console.log(data);
      }
    };

    onValue(contactpagegRef, fetchData);

    return () => {
      off(contactpagegRef, fetchData);
    };
  }, []);

  return (
    <div>
      <Formular data={contactpageData} />
    </div>
  );
}

export default Contactpage;
