import React from "react";
import ReactDOM from "react-dom/client";
import Contacts from "./contacts/Contacts";

import App from "./App";
import "./index.css";
import FullScreenDialog from "./login/FullScreenDialog";
// import <UserFor


// function Writeuserdata(userid,name,email,password){
//   set(ref(database,'users/' + userid),{
//     username:name,
//     email:email,
//     password:password
//   }).then(()=>{
//     console.log("sent")
//   })

// }


// Writeuserdata("1001001","gamanram","lci2022022@iiitl.ac.in","chodu")

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FullScreenDialog/>
{/* <Contacts/> */}
  </React.StrictMode>
);
