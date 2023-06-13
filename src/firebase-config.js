//Laver connection
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

//Firebase konfiguration
function StartFirebase() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_Firebase_Key,
    authDomain: "afgangseksamen2023-334a4.firebaseapp.com",
    databaseURL:
      "https://afgangseksamen2023-334a4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "afgangseksamen2023-334a4",
    storageBucket: "afgangseksamen2023-334a4.appspot.com",
    messagingSenderId: "773649657431",
    appId: "1:773649657431:web:5ceb01299555e1306f3d12",
    measurementId: "G-LC4YBFXT1V",
  };

  //Laver forbindelsen min firebase
  const app = initializeApp(firebaseConfig);
  //Laver forbindelsen til vores database i min firebase
  return getDatabase(app);
}

export default StartFirebase;
