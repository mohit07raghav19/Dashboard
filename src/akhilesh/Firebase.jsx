import { initializeApp } from "firebase/app";

import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC8NjmC9zyprhEZtLUEfQtNuCUGWKueeUc",
    authDomain: "clg-management-database.firebaseapp.com",
    projectId: "clg-management-database",
    storageBucket: "clg-management-database.appspot.com",
    messagingSenderId: "393380427844",
    appId: "1:393380427844:web:58963b1add4a505625e411",
    measurementId: "G-4NPSZK82H6",
    databaseURL: "https://clg-management-database-default-rtdb.firebaseio.com/",
  };
  
  const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    export {database};