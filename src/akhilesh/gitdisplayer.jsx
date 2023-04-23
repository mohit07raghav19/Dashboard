import { database } from "./Firebase";
import { ref, push, child, update } from "firebase/database";
// import { getDatabase, get } from "firebase/database";
import React from "react";
import axios from "axios";

// import React from 'react'
import { getDatabase, onValue } from "firebase/database";

var gitExporter = [];

const gitfetchData = async (username) => {
  if (username === "") {
    console.log("Empty user");
    return;
  }
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      gitExporter.push(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

function gitDisplayer() {
  var databaser = {};
  const db = getDatabase();
  let arr = [];
  const starCountRef = ref(db);
  onValue(starCountRef, (snapshot) => {
    databaser = snapshot.val();
    console.log(Object.values(Object.values(databaser)[0]));
    Object.values(Object.values(databaser)[0]).forEach((elem) => {
      arr.push(elem.githubownername);
    });
    console.log(arr);

    Object.values(Object.values(databaser)[0]).forEach((elem) => {
      gitfetchData(elem.githubownername);
    });

  });

  return <div></div>;
}

export default gitDisplayer;
export { gitExporter };
