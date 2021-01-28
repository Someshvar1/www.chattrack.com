
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCAF0n7sQfEvuEk_vwR2Xc9xUwip9Q3okI",
      authDomain: "kwitter-28575.firebaseapp.com",
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
