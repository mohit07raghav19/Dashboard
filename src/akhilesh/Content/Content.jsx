import React,{useState} from 'react'
import { database } from "../Firebase";
import { ref, push, child, update } from "firebase/database";
// import Discord from 'discord.js'


export default function Content() {
    const [pinnedMessages, setPinnedMessages] = useState([]);
//     const Client=new Discord.Client();
//     Client.login('MTA5OTQyMDE5NTk3OTgwMDY5Ng.Gca-H0.zPxMt6nroyJkTT467iWKxhgnbNQiCWinlSgATg')
//     Discord.Client.on("ready",()=>{
//         console.log("I'm Ready")
    
//     })
//     Discord.Client.on("message",async message =>{
//     console.log(message.content)
// // Check if the message is a command to fetch pinned messages
// if (message.content === '!fetch-pinned-messages') {
//     // Fetch the channel where the command was sent
//     const channel = message.channel;

//     // Fetch the pinned messages in the channel
//     const pinnedMessages = await channel.messages.fetchPinned();

//     // Add the pinned messages to the Firebase Realtime Database
//     // const dbRef = firebase.database().ref('/pinned-messages');
//     const updates={}
//     const arr=[];
//     pinnedMessages.forEach((msg) => {
//     // dbRef.push().set({
  
//     // });
//     let obj={
//     content: msg.content,
//       author: msg.author.username,
//     }

// arr.push(obj)

//   });
//   let obj={
//     message1:arr
//   }
//     updates['/discord_data/'] = obj
//     update(ref(database), updates).then(
//      console.log("done")
//     )


//     // Update the state variable with the pinned messages
//     setPinnedMessages(pinnedMessages.array());

//     // Send a confirmation message in Discord
//     message.reply('Pinned messages added to Firebase Realtime Database.');


// }

     



//     })
console.log("check1")
}
