import { database } from "./Firebase";
import { ref, push, child, update } from "firebase/database";
// import { getDatabase, get } from "firebase/database";
import React from "react";
import axios from "axios";

// import React from 'react'
import { getDatabase, onValue } from "firebase/database";

var Exporter = [];
const fetchData = async (username) => {
  axios
    .get(`https://codeforces.com/api/user.info?handles=${username}`)
    .then((response) => {
      Exporter= response.data.result.map((x) => x)
      // console.log(response.data.result);
      // console.log(response.data.result)
      // Exporter.map((item)=>{
      // console.log(item.avatar)
      // })
    })
    .catch((error) => {
      console.log(error);
    });
};

function Displayer() {
  var databaser = {};
  const db = getDatabase();
  let arr = [];
  const starCountRef = ref(db);
  onValue(starCountRef, (snapshot) => {
    databaser = snapshot.val();
    // console.log(Object.values(Object.values(databaser)[0]))
    Object.values(Object.values(databaser)[0]).forEach((elem) => {
      arr.push(elem.codeforcesusername);
    });
    // console.log(arr)
    let res = arr.join("; ");
    console.log(res);
    fetchData(res);

    // let a=Array.from(Object.values(Object.values(databaser)[0].codeforcesusername))
    // console.log(res)

    // Object.values(Object.values(databaser)[0]).forEach((elem)=>{
    //   fetchData(elem.codeforcesusername)
    // // console.log(elem.codeforcesusername)
    // })
    // console.log(data)
    // updateStarCount(postElement, data);
  });

  return <div></div>;
}

export default Displayer;
export { Exporter };
