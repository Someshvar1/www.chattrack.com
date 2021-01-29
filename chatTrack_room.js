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
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
function addRoom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
          purpose:"adding room name"
      });
      localStorage.setItem("roomname",roomname);
  }
  function logout(){
        localStorage.setItem("username","");
        window.location="index.html";
  }
