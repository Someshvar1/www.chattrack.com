var user_name_room=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="Welcome " + user_name_room;
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCAF0n7sQfEvuEk_vwR2Xc9xUwip9Q3okI",
      authDomain: "kwitter-28575.firebaseapp.com",
      databaseURL: "https://kwitter-28575-default-rtdb.firebaseio.com",
      projectId: "kwitter-28575",
      storageBucket: "kwitter-28575.appspot.com",
      messagingSenderId: "81176811681",
      appId: "1:81176811681:web:caa497f9992cbb9e3838e0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
          purpose:"adding room name"
      });
      localStorage.setItem("roomname",roomname);
      window.location="chattrack_page.html"
  }
  function logout(){
        localStorage.setItem("username","");
        window.location="index.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room name-"+Room_names);
     row="<div class='room_name' id="+Room_names+">#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
     //End code
     });});}
getData();


function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="chattrack_page.html";
}
